import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../components/LandingPage/LandingPage';
import '../setupTests';

describe('About LandingPage', () => {
  it('renders without crashing', () => {
    const components = shallow(<LandingPage />);
    expect(components.debug()).toMatchSnapshot();
  });
});
