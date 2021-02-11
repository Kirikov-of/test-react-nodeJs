import { $authUser } from "./index";

export const createTask = async (text) => {
  const { data } = await $authUser.post("/add", text);
  return data;
};

export const removeTask = async (id) => {
  const { data } = await $authUser.post("/remove", id);
  return data;
};

export const complete = async (id) => {
  const { data } = await $authUser.post("/complete", id);
  return data;
};

export const fetchTasks = async (tasks) => {
  const { data } = await $authUser.get("/fetchtask", tasks);
  return data;
};
