import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import '../setupTests';

it('renders without crashing', () => {
  const components = shallow(<App />);
  expect(components.debug()).toMatchSnapshot();
});
