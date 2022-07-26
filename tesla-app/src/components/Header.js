import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faClose} from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faBars} />
const element2 = <FontAwesomeIcon icon={faClose} />


function Header() {

  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
         <a href="#">Shop</a>
         <a href="#">Account</a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerOpen(true)}> 
        {element}
      </CustomMenu>

    <BurgerNav show={burgerOpen}>
      <CustomClose onClick={() => setBurgerOpen(false)}>
      {element2}
      </CustomClose>
      <li>
        <a href="#">Existing Inventory</a>
      </li>
      <li>
        <a href="#">Used Inventory</a>
      </li>
      <li>
        <a href="#">Trade-in</a>
      </li>
      <li>
        <a href="#">Test Drave</a>
      </li>
      <li>
        <a href="#">Insurance</a>
      </li>
      <li>
        <a href="#">Powerwall</a>
      </li>
      <li>
        <a href="#">Commercial Energy</a>
      </li>
      <li>
        <a href="#">Utilities</a>
      </li>
    </BurgerNav>

    </Container>
  )
}

export default Header;

const Container = styled.div` 
  /* position:fixed; */
  position:fixed;
  min-height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`;

const Menu = styled.div`
  display:flex;
  align-items:center;
  flex:1;
  justify-content:center;
   a { 
    font-weight:600;
    padding:0 10px;
    flex-wrap:nowrap;
    font-size:14px;
    margin:0 8px;
   }
   @media (max-width:768px) { 
    display:none;
   }
`;

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a { 
    font-weight:600;
    margin:0 8px;
    font-size:14px;
   }
`;

const CustomMenu = styled.div`
  cursor:pointer;
  display:none;
  @media (max-width:768px) { 
    display:block ;
  }
`;

const BurgerNav = styled.div` 
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:#9896F0;
  width:300px;
  z-index:16;
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  text-align:start;
  transition:transform 0.35s ease-in ;
  transform:${
  props => props.show ? 'translateX(0)' : 'translateX(100%)'
   };
  li { 
    list-style:none;
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.5)
  }
  a { 
    font-weight:600;
  }
`;

const CustomClose = styled.div` 
  cursor: pointer;
  display:flex;
  justify-content:flex-end;
`;