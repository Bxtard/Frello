import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='header__nav'>
      <NavLink to='/' className='header__a'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png'
          alt=''
          className='header__logo'
        />
      </NavLink>
      <label htmlFor='check' className='header__checkbtn'>
        <input type='checkbox' className='header__check' id='check' />
        <i className='fa-solid fa-bars' />
      </label>
      <ul className='header__ul'>
        <li className='header__li'>
          <NavLink to='/manage_board' className='header__a'>
            Manage board
          </NavLink>
        </li>
        <li className='header__li'>
          <NavLink to='/login' className='header__a'>
            Login
          </NavLink>
        </li>
        <li className='header__li'>
          <NavLink to='/signup' className='header__a'>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
