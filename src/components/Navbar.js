// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav>
      <NavList>
        <NavItem onClick={() => handleScroll('about')}>About</NavItem>
        <NavItem onClick={() => handleScroll('skills')}>Skills</NavItem>
        <NavItem onClick={() => handleScroll('projects')}>Projects</NavItem>
        <NavItem onClick={() => handleScroll('contact')}>Contact</NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 0;
  text-align: center;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavItem = styled.li`
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 10px 15px;
  transition: 0.3s;

  &:hover {
    color: #2ecc71;
  }
`;

export default Navbar;