import React from 'react';
import { mount } from 'enzyme';
import Letters from './letters'

describe('>>> COMPONENTS --- Test Letters component', () => {
  let letters = [];

  beforeEach(() => {
    letters = ['a', 'b', 'c'];
  });

  test('+++ render items', () => {
    let element = mount(
      <Letters items={letters} active={true} />
    );
    expect(element.find('[data-letter]').length).toEqual(3);
  });

  test('+++ not render items when empty prop', () => {
    let element = mount(
      <Letters items={[]} active={true} />
    );
    expect(element.find('[data-letter]').length).toEqual(0);
  });

  test('+++ change class when disabled', () => {
    let element = mount(
      <Letters items={[]} active={false} />
    );
    expect(element.find('[data-letter]').length).toEqual(0);
  });

});
