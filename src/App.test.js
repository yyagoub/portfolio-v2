import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders the leader name', () => {
  const { getAllByText } = render(<App />);
  expect(getAllByText(/Yousef Yagoub/i).length).toBeGreaterThan(0);
});
