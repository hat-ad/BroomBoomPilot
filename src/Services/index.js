import API from "./apiServices";

export const baseUrl = "http://192.168.142.23:7000/api/v1";

const Api = new API({
  baseUrl: baseUrl,
});

export default Api;
