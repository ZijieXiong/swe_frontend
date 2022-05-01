import React from 'react'
import renderer from 'react-test-renderer'
import TestRenderer from 'react-test-renderer';

//npm install --save-dev react-test-renderer

import Food_Menu from '../pages/Food_Menu/Food_Menu.jsx'
it('renders correctly', () => {
  const tree = renderer
    .create(<Food_Menu/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
