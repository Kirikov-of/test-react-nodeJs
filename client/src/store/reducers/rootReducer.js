import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  itemsReducer,
});

export default rootReducer;
