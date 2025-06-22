import { LOGO_URL } from '../utils/constants';
import React, { useState } from 'react';
// Title component for display logo
const Title = () => (
  <a href='/'>
    <img className='logo' src={LOGO_URL} alt='Food Fire Logo' />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className='fa-solid fa-cart-shopping'></i>
          </li>
          <button className='login-button' onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Logout' : 'Login'}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
