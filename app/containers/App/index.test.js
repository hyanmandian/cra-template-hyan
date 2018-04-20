import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import Footer from './Footer';
import App from './';

describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header).length).toBe(1);
  });

  it('should render the footer', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Footer).length).toBe(1);
  });
});
