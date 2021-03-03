export const auth = (auth) => ({
  type: "IS_AUTH",
  payload: auth,
});

export const user = (user) => ({
  type: "USER",
  payload: user,
});
