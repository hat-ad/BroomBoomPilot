import API from "./apiServices";

export const baseUrl = "http://localhost:7000/api/v1";

const Api = new API({
  baseUrl: baseUrl,
});

export default Api;
