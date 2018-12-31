import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import phones from './phones';
import phonePage from './phonePage';

export default combineReducers({
    routing: routerReducer,
    phones,
    phonePage
})