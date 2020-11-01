import React, { useState } from 'react';
import { logo } from "./media/img";
import {
  HeaderSection,
  Container,
  Nav,
  NavItem,
  HeaderInfo
} from './styles/styles';


const Header = () => {

  const [toggleState, setToggleState] = useState(false);

  const HandleBurgerClick = () => {
    setToggleState(!toggleState);
  };

  return (
    <HeaderSection className="header">
      <Container>
        <Nav className="header__nav">
          <NavItem>
            <img src={logo} alt="логотип" />
          </NavItem>
          <NavItem
            className={`header__menu ${toggleState ? 'active' : ''}`}
          >
            <ul className="header__list">
              <li><a href="/" className="header__link">Main</a></li>
              <li><a href="/" className="header__link">Gallery</a></li>
              <li><a href="/" className="header__link">News</a></li>
              <li><a href="/" className="header__link">Profile</a></li>
            </ul>
          </NavItem>
          <NavItem>
            <div
              className={`header__burger ${toggleState ? 'active' : ''}`}
              onClick={HandleBurgerClick}
            >
              <span></span>
            </div>
          </NavItem>
          <NavItem>
            <div className="header__phone">+544 3490 00000</div>
            <p className="header__text">Звони скорее!</p>
          </NavItem>
        </Nav>
        <HeaderInfo>Найдено 349 котов</HeaderInfo>
      </Container>
    </ HeaderSection >

  );
};

export default Header;
