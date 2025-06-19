import { render, screen } from '@testing-library/react';
import Main from './components/Main';

test('heading of the page', () => {
  render(<Main />);
  const headingElement = screen.getByText(/Extensions List/i);
  expect(headingElement).toBeInTheDocument();
});
