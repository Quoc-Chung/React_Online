import { updateReducer } from "../reducer/updateReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  updateReducer,
});

const count_store = createStore(allReducers);
export default count_store;

