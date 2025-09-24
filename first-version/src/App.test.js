import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const header = screen.getByText(/upcoming events/i);
  expect(header).toBeInTheDocument();
});
