import { render, screen } from '@testing-library/react';
import App from './App';

test('renders spacestagram', () => {
  render(<App />);
  const text = screen.getByText(/spacestagram/i);
  expect(text).toBeInTheDocument();
});
