import { LOGO_URL } from '../utils/constants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Title component for display logo
const Title = () => (
  <a href='/'>
    <img className='w-56' src={LOGO_URL} alt='Food Fire Logo' />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='flex justify-between items-center bg-pink-50 shadow-lg p-4'>
      <Title />
      <div className='flex items-center'>
        <ul className='flex'>
          <li className='px-4 '>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='px-4'>
            <i className='fa-solid fa-cart-shopping'></i>
          </li>
          <button
            className='bg-pink-500 text-white px-4 py-2 rounded mb-2 capitalize font-bold'
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Logout' : 'Login'}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
