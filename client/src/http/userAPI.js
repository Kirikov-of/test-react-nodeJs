import { $authUser, $auth } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, name) => {
  const { data } = await $auth.post("/signUp", { email, password, name });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $auth.post("/signIn", { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authUser.get("/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
