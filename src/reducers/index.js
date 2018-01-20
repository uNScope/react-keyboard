import { combineReducers } from 'redux'

import letters from './letters'
import timer from './timer'

const reducers = combineReducers({
  letters,
  timer
});

export default reducers;
