import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../src/components';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});