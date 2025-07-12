import Contact from '../Contact';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('should load contact us component', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');
  const paragraph = screen.getByText(
    'If you have any questions, feel free to reach out!'
  );

  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
