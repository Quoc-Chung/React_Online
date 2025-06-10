import { combineReducers , createStore} from "redux";
import { productReducer } from "../reducers/productReducer";

const allReducer = combineReducers({
    productReducer, 

});

export const store = createStore(allReducer); 