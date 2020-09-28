import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders finance spa text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/finance SPA/i);
  expect(linkElement).toBeInTheDocument();
});
