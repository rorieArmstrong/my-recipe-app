import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../containers/HomePage';
import { BrowserRouter, Link } from 'react-router-dom';


describe('<HomePage />', () => {
    it('should render a NavBar component', () => {
        const wrapper = shallow(<HomePage  />); 
        expect(wrapper.exists('NavBar')).toEqual(true);
    });

    it('should render a 4 links', () => {
        const wrapper = shallow(<HomePage  />); 
        expect((wrapper.find('Route').length)).toEqual(4);
    });
})

