import React from 'react';
import { shallow } from 'enzyme';
import ProjectsPage from '../components/Projects/ProjectsPage';
import '../setupTests';

describe('About ProjectsPage', () => {
  it('renders without crashing', () => {
    // const mockState = 0;
    const components = shallow(<ProjectsPage />);
    // components.find('[id="tsTab"]').simulate('onChange');
    components.setState({ activeTab: 1 });
    expect(components.state()).toEqual({ activeTab: 1 });
  });
});
