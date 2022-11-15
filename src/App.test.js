import { render, screen } from '@testing-library/react';
import App from './App';

test('header render with Login text in document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
