import axios from "axios";

export const getItem = (data) => (dispatch) => {
  dispatch({
    type: "GET_ITEMS",
    payload: data,
  });

  axios.get(process.env.REACT_APP_URL + "/fetchtask").then(({ data }) => {
    dispatch(setItems(data));
  });
};

export const setItems = (data) => ({
  type: "SET_ITEMS",
  payload: data,
});
