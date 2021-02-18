import axios from "axios";
import { fetchTasks } from "../../http/tasksAPI";

export const getItem = () => {
  return (dispatch) => {
    // fetchTasks()
    axios
      .get(process.env.REACT_APP_URL + "/fetchtask")
      .then((res) => dispatch(setItems(res.data)));
  };
};

export const setItems = (data) => ({
  type: "SET_ITEMS",
  payload: data,
});
