import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import phones from './phones';
import phonePage from './phonePage';
import devicePage from './devicePage';
import basket from './basket';
import categories from './categories';

export default combineReducers({
    routing: routerReducer,
    phones,
    phonePage,
    devicePage,
    basket,
    categories
})