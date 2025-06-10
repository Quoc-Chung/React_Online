import { createStore, combineReducers } from "redux";
import { AuthenReducer } from "../reducers/AuthenReducer";

const rootReducer = combineReducers({
  auth: AuthenReducer, // Sửa từ AuthReducer thành AuthenReducer
});

export const store = createStore(rootReducer);