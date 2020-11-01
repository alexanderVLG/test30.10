import React from 'react';
import {
  FooterSection,
  FooterContainer,
  FooterFlex,
  Flex
} from './styles/styles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterFlex>
          <div>
            <div className="footer__title">Успей купить!</div>
            <div className="footer__text">Подпишись и успей словить все акции</div>
          </div>
          <form>
            <Flex style={{ marginBottom: "24px" }} className="form__item">
              <input className="input__email" type="email" placeholder="Email" />
              <button className="form__button">Подписаться</button>
            </Flex>
            <p>
              <label className="checkbox__text">
                <input className="form__checkbox" type="checkbox" />
                  Подписаться на новости
                </label>
            </p>
          </form>
        </FooterFlex>
      </FooterContainer>
    </FooterSection>

  );
};

export default Footer;