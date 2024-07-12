import axios, { AxiosRequestConfig } from "axios";
interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "33757777a8154ae4894a0b41cfa88580",
  },
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default APIClient;
