import React from 'react'
import renderer from 'react-test-renderer'
import TestRenderer from 'react-test-renderer';

//npm install --save-dev react-test-renderer

import Drink_Menu from '../pages/Drink_Menu/Drink_Menu.jsx'
it('renders correctly', () => {
  const tree = renderer
    .create(<Drink_Menu/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
