export const TIME_LIMIT = 60;

export const initialState = {
  timeLimit: TIME_LIMIT,
  timeSpent: 0
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'TIMER_TICK':
      return {
        ...state,
        timeLimit: --state.timeLimit,
        timeSpent: ++state.timeSpent
      };

    case 'RESET_INFO':
      return {...initialState};

    default:
      return state
  }
};

export default timer;
