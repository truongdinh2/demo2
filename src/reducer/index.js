import { combineReducers } from 'redux';
import info4 from './info4';
import table from './table';
import isToggleForm from './isDisplayForm'
import isEditNewFile from './isEditNewFile'

const myReducers = combineReducers ({
    // console.log('hi');
    info4,// info4: info4
    table,
    isToggleForm,
    isEditNewFile,

});
// console.log(info4)
export default myReducers;