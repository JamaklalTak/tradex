import { createSelector } from 'reselect';
import { actions } from './actions';

const initialState = {
}

export default (state = initialState, payload = {}) => {
    switch (payload.type) {
      default:
        return state;
    }
  };