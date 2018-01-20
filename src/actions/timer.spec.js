import { timerTick, resetInfo} from './timer'

describe('>>> ACTIONS Test timer actions', () => {
  test('+++ actionCreator timerTick', () => {
    const action = timerTick();
    expect(action).toEqual({ type: "TIMER_TICK" })
  });

  test('+++ actionCreator resetInfo', () => {
    const action = resetInfo();
    expect(action).toEqual({ type: "RESET_INFO" })
  });

});


