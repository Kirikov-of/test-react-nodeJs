import axios from "axios";

export const getItem = (userId) => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_URL + `/fetchtask/${userId}`)
      .then((res) => dispatch(setItems(res.data)));
  };
};

export const setItems = (data) => ({
  type: "SET_ITEMS",
  payload: data,
});
