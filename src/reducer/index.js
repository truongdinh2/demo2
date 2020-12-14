import { combineReducers } from 'redux';
import info4 from './info4';
import table from './table';
import isToggleForm from './isDisplayForm'
import isEditNewFile from './isEditNewFile';
import indexDel from './indexDel';

const myReducers = combineReducers ({
    // console.log('hi');
    info4,// info4: info4
    table,
    isToggleForm,
    isEditNewFile,
    indexDel

});
export default myReducers;