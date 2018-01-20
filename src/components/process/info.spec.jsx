import React from 'react';
import { mount } from 'enzyme';
import Info from './info'

describe('>>> COMPONENTS --- Test Info component', () => {
  let props = {
    timeLimit: 10,
    timeSpent: 0,
    wrongKeys: 0,
    items: []
  };

  test('+++ renders without crashing', () => {
    mount(
      <Info {...props} />
    );
  });

});
