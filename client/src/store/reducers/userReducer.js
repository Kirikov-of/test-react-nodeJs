const initialState = {
  isAuth: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_AUTH":
      return {
        ...state,
        isAuth: action.payload,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
