export const isAuth = (isAuth) => ({
  type: "IS_AUTH",
  payload: isAuth,
});

export const user = (user) => async (dispatch) => {
  await dispatch({
    type: "USER",
    payload: user,
  });
};
