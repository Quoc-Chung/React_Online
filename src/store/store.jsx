import { createStore, combineReducers } from 'redux';
import themeReducer from '../reducer/themeReducer';
const rootReducer = combineReducers({
   themeReducer
});

const store = createStore(rootReducer);

export default store;
