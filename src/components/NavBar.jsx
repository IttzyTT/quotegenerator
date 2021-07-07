import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/fontawesome-free-solid';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <NavContainer>
      <nav className="nav">
        <ul className="navList">
          <NavLink exact to="/" activeClassName="active">
            <FontAwesomeIcon className="navIcon" icon={faHome} />
          </NavLink>
          <NavLink exact to="/favorite" activeClassName="active">
            <FontAwesomeIcon className="navIcon" icon={faStar} />
          </NavLink>
        </ul>
      </nav>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
  .nav {
    background-color: #2e2e2e;
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 100%;

    color: #5a5959;
  }
  .navList {
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-size: 1.5rem;
  }
  .active {
    color: #4e86fd;
  }
`;
