import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <NavLink exact className="option" to="/shop">
        Shop
      </NavLink>
      <NavLink exact className="option" to="/pages/contact">
        Contact
      </NavLink>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <NavLink exact className="option" to="/signin">
          SignIn
        </NavLink>
      )}
    </div>
  </div>
);

export default Header;
