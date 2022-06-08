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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faArrowRightFromBracket, faBell, faChartPie, faCompass, faEnvelope, faFile, faGear, faHouse } from '@fortawesome/free-solid-svg-icons';

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
            <NavLink to='/' className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <FontAwesomeIcon className="nav__icon" icon={faHouse} />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='notifi' className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <FontAwesomeIcon className="nav__icon" icon={faCompass} />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='pie' className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <FontAwesomeIcon className="nav__icon" icon={faChartPie} />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='message' className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <FontAwesomeIcon className="nav__icon" icon={faEnvelope} />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='bell' className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <FontAwesomeIcon className="nav__icon" icon={faBell} />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/setting'className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <FontAwesomeIcon className="nav__icon" icon={faGear} />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/login' className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <FontAwesomeIcon className="nav__icon" icon={faArrowRightFromBracket} />
            </NavLink>
          </li>
        </ul>
     </nav>
    </>
  );
}

export default Nav;