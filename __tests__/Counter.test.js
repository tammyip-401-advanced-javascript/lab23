import React from 'react';
import Counter from '../components/Counter.js';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Enzyme from 'enzyme';

configure({ adapter: new Adapter() });

describe('couter state change works as expected', () => {
  it('lets you add', () => {
    let component = shallow(<Counter />);

    //simulate a user clicking +
    component.find('span.up.clicker').simulate('click', {});

    expect(component.state('count')).toBe(1);
    expect(component.state('polarity')).toBe('positive');
  });
  it('lets you add', () => {
    let component = shallow(<Counter />);

    //simulate a user clicking -
    component.find('span.down.clicker').simulate('click', {});

    expect(component.state('count')).toBe(-1);
    expect(component.state('polarity')).toBe('negative');
  });
});

// template
// describe('My component', () => {
//   it('correctly changes the state variable *count* on button click', () => {
//     let component = mount(<MyComponent />);
//     let btn = component.find('button#my-btn');

//     btn.simulate('click');
//     expect(component.state('count')).toBe(1);
//   });
// });