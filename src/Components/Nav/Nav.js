import React from 'react';
import logo from '../../assets/Image/main-logo.svg';
import home from '../../assets/Image/home-img.svg';
import menu from '../../assets/Image/menu.svg';
import contacts from '../../assets/Image/contacts.svg';
import message from '../../assets/Image/messege.svg';
import bell from '../../assets/Image/bell.svg';
import settings from '../../assets/Image/settings.svg';
import enter from '../../assets/Image/enter-icon.svg';
import logos from '../../assets/Image/logo-home.svg';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink to="/">
              <img className='nav__img' src={logo} alt="site-logo" />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              <img className='nav__img' src={home} alt="home-icon" />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              <img className='nav__img' src={menu} alt="home-icon" />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              <img className='nav__img' src={contacts} alt="home-icon" />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              <img className='nav__img' src={message} alt="home-icon" />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              <img className='nav__img' src={bell} alt="home-icon" />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              <img className='nav__img' src={settings} alt="home-icon" />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' className='nav__link'>
              <img className='nav__img' src={enter} alt="home-icon" />
            </NavLink>
          </li>
        </ul>
     </nav>
    </>
  );
}

export default Nav;