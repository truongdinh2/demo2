import { combineReducers } from 'redux';
import info4 from './info4';
import table from './table'
const myReducers = combineReducers ({
    // console.log('hi');
    info4,// info4: info4
    table,
});
// console.log(info4)
export default myReducers;