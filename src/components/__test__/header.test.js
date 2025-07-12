import Header from '../Header';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('should load header component with a login', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button');
  expect(loginButton).toBeInTheDocument();
});

test('should load header component with a add to cart', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const cartItem = screen.getByText('Cart (0 items)');
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

test('should change ob click from login button to logout ', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button', { name: 'Login' });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole('button', { name: 'Logout' });
  expect(loginButton).toBeInTheDocument();
});
