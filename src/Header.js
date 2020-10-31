import React from 'react';
import { logo } from "./media/img";
import {
  HeaderSection,
  Container,
  Nav,
  NavItem,
  InformTitle
} from './styles/styles';

const Header = () => {
  return (
    < HeaderSection className="header" >
      <Container>
        <Nav className="header__nav">
          <NavItem>
            <img src={logo} alt="логотип" />
          </NavItem>
          <NavItem>
            <div className="header__burger">
              <span></span>
            </div>
          </NavItem>
          <NavItem className="header__menu">
            <ul className="header__list">
              <li><a href="/">Main</a></li>
              <li><a href="/">Gallery</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Profile</a></li>
            </ul>
          </NavItem>
          <NavItem>
            <div className="header__phone">+544 3490 00000</div>
            <p className="header__text">Звони скорее!</p>
          </NavItem>
        </Nav>
        <InformTitle>Найдено 349 котов</InformTitle>
      </Container>
    </ HeaderSection >

  );
};

export default Header;