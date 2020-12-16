import React from 'react';
import '@testing-library/jest-dom';
import { configure,shallow,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Input from './components/Input';


configure({ adapter: new Adapter() });



const wrapper = shallow(<App />);

describe('App component', () =>{

  it('renders todolist react-redux', () => {
     expect(wrapper).toBeTruthy()
  });

  it('should render', () => {
    const appComponent = wrapper.find("[data-test='app']").length
    expect(appComponent).toBe(1)
  })

  it('should exist Input', () => {
    const appComponent = wrapper.find("[data-test='input']").length
    expect(appComponent).toBe(1)
  })
  it('should exist TodosList', () => {
    const appComponent = wrapper.find("[data-test='TodosList']").length
    expect(appComponent).toBe(1)
  })

  it('should render one <h1>', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
});

});

  
 
