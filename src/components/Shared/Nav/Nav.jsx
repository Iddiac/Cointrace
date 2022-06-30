import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../../Auth/LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Cointrace from '../../App/Cointrace graphics/CoinTraceLogo.svg'

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/user">
        <img src={Cointrace} className="nav-title"></img>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>


            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
