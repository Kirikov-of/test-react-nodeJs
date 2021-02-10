import { $authUser, $auth } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, name) => {
  const { data } = await $authUser.post("/signUp", { email, password, name });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $authUser.post("/signIn", { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $auth.get("/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
