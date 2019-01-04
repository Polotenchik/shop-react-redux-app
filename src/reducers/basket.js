import R from 'ramda';
import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAR_BASKET } from '../actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case REMOVE_PHONE_FROM_BASKET:
          return R.without(R.of(payload), state)
        case ADD_PHONE_TO_BASKET: 
          return R.append(payload, state);
        case CLEAR_BASKET:
          return [];
        default:
          return state;
    }
}