import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js';


describe('snapshot test for the app', () => {
  it('mataches the snapshot', () => {
    const currentHTML = renderer.create(<App />).toJSON();
    expect(currentHTML).toMatchSnapshot();
  });
});
