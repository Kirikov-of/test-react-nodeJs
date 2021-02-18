import axios from "axios";

const $authUser = axios.create({
  baseURL: "http://localhost:8080",
});

const $auth = axios.create({
  baseURL: "http://localhost:8080",
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authUser.interceptors.request.use(authInterceptor);

export { $authUser, $auth };
