import { combineReducers } from "redux";
import taskDetailsReducer from './taskDetailsReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    taskDetailsReducer,
    themeReducer
})

export default rootReducer