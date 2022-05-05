import { render, screen } from '@testing-library/react';
import App from '../App';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  render(
    <MemoryRouter>
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  </MemoryRouter>
  
  )
});