import { combineReducers } from "redux";
import homeReducer from './homeReducer'

const allReducers = combineReducers({
    Home: homeReducer,

});

export default allReducers;
