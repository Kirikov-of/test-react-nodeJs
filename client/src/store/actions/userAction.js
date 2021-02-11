export const auth = (auth) => ({
  type: "IS_AUTH",
  payload: auth,
});

export const user = (user) => async (dispatch) => {
  await dispatch({
    type: "USER",
    payload: user,
  });
};
