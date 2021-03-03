import { $authUser } from "./index";

export const createTask = async (text, userId) => {
  try {
    const { data } = await $authUser.post(`/add/${userId}`, text);
    return data;
  } catch (error) {
    alert(error);
  }
};

export const removeTask = async (id) => {
  try {
    const { data } = await $authUser.post("/remove", id);
    return data;
  } catch (error) {
    alert(error);
  }
};

export const complete = async (id) => {
  try {
    const { data } = await $authUser.post("/complete", id);
    return data;
  } catch (error) {
    alert(error);
  }
};

export const fetchTasks = async (tasks, userId) => {
  try {
    const { data } = await $authUser.get(`/fetchtask/${userId}`, tasks);
    return data;
  } catch (error) {
    alert(error);
  }
};
