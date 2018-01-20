import Timer, {TIME_LIMIT, initialState} from './timer'
import Letters from "./letters";

describe('>>> REDUCERS --- Test timerReducers', () => {
  let state = {};

  beforeEach(() => {
    state = initialState;
  });

  test('+++ reducer for TIMER_TICK increment values', () => {
    let testState = Timer(state, { type: "TIMER_TICK" });
    expect(testState.timeLimit).toEqual(TIME_LIMIT - 1);
    expect(testState.timeSpent).toEqual(1);
  });

  test('+++ reducer for RESET_INFO return initial state', () => {
    let testState = Timer(state, { type: "RESET_INFO" });
    expect(testState).toEqual(initialState);
  });

  test('+++ without reducer return current state', () => {
    let testState = Timer(state, { type: "" });
    expect(testState).toEqual(initialState);
  });

  test('+++ without state return initial state', () => {
    let testState = Timer(undefined, { type: "" });
    expect(testState).toEqual(initialState);
  });

});
