import { combineReducers } from "redux";
import CrudReducer from "./crudReducers";


const rootReducers = combineReducers({
  crud: CrudReducer,
});

export default rootReducers;