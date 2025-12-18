import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Heet Patel name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Heet Patel/i);
  expect(nameElement).toBeInTheDocument();
});
