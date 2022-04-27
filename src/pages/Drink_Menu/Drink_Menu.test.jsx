import React from 'react'
import renderer from 'react-test-renderer'
import TestRenderer from 'react-test-renderer';

//npm install --save-dev react-test-renderer

import Drink_Menu from './pages/Drink_Menu/Drink_Menu.jsx'
test('renders', async () => {
    
    let component;
    await act(async () => {
      component = TestRenderer.create(<Drink_Menu />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });


