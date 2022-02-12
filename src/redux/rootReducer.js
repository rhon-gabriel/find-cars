import { combineReducers } from "redux";
import carsReducer from "../containers/Main/redux/reducer";

const rootReducer = combineReducers({
  cars: carsReducer,
});

export default rootReducer;
