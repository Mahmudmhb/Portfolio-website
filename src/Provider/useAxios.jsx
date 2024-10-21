import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
});
