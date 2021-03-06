import * as actionTypes from 'constants/types';
import { initialState } from 'constants/initialState';

const clockInitialState = initialState.get('clock');

const clockReducers = (state = clockInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK_CLOCK:
      return state.merge({
        lastUpdate: action.ts,
        light: !!action.light
      });

    default: return state
  }
}

export default clockReducers;
