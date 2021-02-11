import axios from "axios";

const $authUser = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const $auth = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authUser.interceptors.request.use(authInterceptor);

export { $authUser, $auth };
