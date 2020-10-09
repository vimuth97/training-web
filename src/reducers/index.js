import {combineReducers} from 'redux';
import DiarycardReducer from './reducer-DiaryCard';

const allReducers = combineReducers({
    cards:DiarycardReducer
});

export default allReducers;

