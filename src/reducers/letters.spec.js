import Letters, { TOTAL_STRLEN, initialState, checkLetter } from './letters'

describe('>>> REDUCERS --- Test lettersReducers', () => {
  let state = {};

  beforeEach(() => {
    state = initialState;
  });

  test('+++ reducer for GENERATE_LETTERS return need array', () => {
    let testState = Letters(state, { type: "GENERATE_LETTERS" });
    expect(testState.items.length).toEqual(TOTAL_STRLEN)
  });

  test('+++ reducer for CHECK_LETTER delete letters', () => {
    state.items.push("a");
    let testState = Letters(state, { type: "CHECK_LETTER", letter: "a" });
    expect(testState.items.length).toEqual(0);
  });

  test('+++ reducer for RESET_LETTERS return initial state', () => {
    let testState = Letters(state, { type: "RESET_LETTERS" });
    expect(testState).toEqual(initialState);
  });

  test('+++ checkLetter return array', () => {
    expect(checkLetter('', null)).toEqual([]);
    expect(checkLetter('', [])).toEqual([]);
  });

  test('+++ without reducer return current state', () => {
    let testState = Letters(state, { type: "" });
    expect(testState).toEqual(initialState);
  });
});
