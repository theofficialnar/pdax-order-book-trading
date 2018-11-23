import { combineReducers } from "redux";
import userReducer from "./userReducer";
import orderBookReducer from "./orderBookReducer";

const rootReducer = combineReducers({
  user: userReducer,
  orderBook: orderBookReducer
});

export default rootReducer;
