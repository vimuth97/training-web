import { combineReducers } from "redux";
import todos from "./todos";
import DiaryCards from './fetch_data';



const allReducers = combineReducers({
  todos: todos,
  DiaryCards:DiaryCards 
  
});

export default allReducers;
