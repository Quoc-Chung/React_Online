
import { combineReducers, createStore } from "redux";
import { an_noi_dungReducer } from "../reducers/an_noi_dungReducer";

const allReducer = combineReducers({
    an_noi_dungReducer,  // PHẢI là object với key
});

export const store = createStore(allReducer);

