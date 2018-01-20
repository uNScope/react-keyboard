import React from 'react';
import { mount } from 'enzyme';
import Routes from './routes';

describe('routes', () => {
  test('+++ should renders without crashing', () => {
    mount(<Routes />);
  });
});
