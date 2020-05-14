import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Navbar from '../components/Navbar';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('contains Routes', () => {
    expect(wrapper.containsMatchingElement(<Route />)).toEqual(true);
  });

  test('contains 4 Routes', () => {
    expect((wrapper.find('Route').length)).toEqual(4);
  });

  it('Route to HomePage is exact', () => {     
    let wrap = mount(<App />);                                 
    let route = wrap.find(<Route path='/' exact/>);
    expect(route).toBeTruthy();
   });

});