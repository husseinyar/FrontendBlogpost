import React from 'react';



import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './style';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
       <h1>Hussein</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Login' activeStyle>
            Login
          </NavLink>
         
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;