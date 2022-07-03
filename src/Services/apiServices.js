import axios from "axios";
import { popRequest, pushRequest } from "../Redux/Actions/configActions";
import { store } from "../Redux/store";
export default class API {
  constructor(options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
    });
    this.axiosInstance.interceptors.request.use(
      function (config) {
        store.dispatch(pushRequest(config));
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      function (response) {
        store.dispatch(popRequest());
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }

  get(endpoint, params, header) {
    return this.httpRequest("GET", endpoint, params, header);
  }

  post(endpoint, params, header) {
    return this.httpRequest("POST", endpoint, params, header);
  }

  update(endpoint, params, header) {
    return this.httpRequest("PUT", endpoint, params, header);
  }

  postForm(endpoint, params, header) {
    return this.httpRequestForFormData(endpoint, params, header);
  }

  async httpRequest(method, url, params, header = null) {
    let state = store.getState();
    let clientToken = state.auth.clientToken;
    return new Promise((resolve, reject) => {
      let options;
      if (method === "GET") {
        options = {
          url: url,
          headers: header
            ? header
            : {
                authorization: clientToken ? `Bearer ${clientToken}` : null,
                "Content-Type": "application/json",
              },
          method: method,
        };
      } else {
        options = {
          url: url,
          headers: header
            ? header
            : {
                authorization: clientToken ? `Bearer ${clientToken}` : null,
                "Content-Type": "application/json",
              },
          method: method,
          data: params,
        };
      }
      this.axiosInstance
        .request(options)
        .then((response) => {
          resolve({
            status: response.status,
            ...response.data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
