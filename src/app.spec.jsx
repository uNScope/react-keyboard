import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('app', () => {
  test('+++ should renders without crashing', () => {
    shallow(<App />);
  });
});
