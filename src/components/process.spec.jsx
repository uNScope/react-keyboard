import React from 'react';
import * as sinon from "sinon";
import { shallow } from 'enzyme';

import { Process, mapDispatchToProps } from './process'
import { TIME_LIMIT } from "../reducers/timer";

describe('>>> COMPONENTS --- Test Process component', () => {

  const props = {
    items: [],
    wrongKeys: 0,
    timeLimit: TIME_LIMIT,
    timeSpent: 0,
    checkLetter: jest.fn(),
    generateLetters: jest.fn(),
    resetProcess: jest.fn(),
    timerTick: jest.fn()
  };

  test('+++ letters reset and generate at component mount', () => {
    let resetSpy = sinon.spy();
    let generateSpy = sinon.spy();

    let container = shallow(
      <Process {...props} resetProcess={resetSpy} generateLetters={generateSpy} />
    );

    expect(resetSpy.calledOnce).toEqual(true);
    expect(generateSpy.calledOnce).toEqual(true);

    container.instance().startProcess();
    container.instance().finishProcess();
  });

  test('+++ timer start and stop', () => {
    let container = shallow(<Process {...props} />);
    let instance = container.instance();

    instance.startProcess();
    expect(instance.state.timer).not.toEqual(null);

    instance.finishProcess();
    expect(instance.state.timer).toEqual(null);
    expect(instance.state.isFinished).toEqual(true);
  });

  test('+++ finish when letters empty', () => {
    let container = shallow(<Process {...props} />);
    let instance = container.instance();

    instance.startProcess();
    instance.onKeyPress({});
    expect(instance.state.isFinished).toEqual(true);
  });

  test('+++ finish when time is over', () => {
    let testProps = {...props, timeLimit: 0};
    let container = shallow(<Process {...testProps} />);
    let instance = container.instance();

    instance.startProcess();
    instance.handleTimerTick();
    expect(instance.state.isFinished).toEqual(true);
  });

  test('+++ continue when time is not over', () => {
    let testProps = {...props, timeLimit: 10};
    let container = shallow(<Process {...testProps} />);
    let instance = container.instance();

    instance.startProcess();
    instance.handleTimerTick();
    expect(instance.state.isFinished).toEqual(false);
  });

  test('+++ dispatched timer tick return need action', () => {
    let dispatch = jest.fn();
    let dispatchProps = mapDispatchToProps(dispatch);

    dispatchProps.timerTick();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'TIMER_TICK' });
  });

  test('+++ dispatched generate letters return need action', () => {
    let dispatch = jest.fn();
    let dispatchProps = mapDispatchToProps(dispatch);

    dispatchProps.generateLetters();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'GENERATE_LETTERS' });
  });

  test('+++ dispatched check letter return need action', () => {
    let dispatch = jest.fn();
    let dispatchProps = mapDispatchToProps(dispatch);

    dispatchProps.checkLetter('a');
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'CHECK_LETTER',
      letter: 'a'
    });
  });

  test('+++ dispatched check letter return need action', () => {
    let dispatch = jest.fn();
    let dispatchProps = mapDispatchToProps(dispatch);

    dispatchProps.resetProcess();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'RESET_INFO'});
    expect(dispatch.mock.calls[1][0]).toEqual({type: 'RESET_LETTERS'});
  });

});
