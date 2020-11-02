import React from 'react';
import { BackTop } from 'antd';
import { ScrollUp } from '../img';

const ScrollButton = () => {
  return (
    <div>
      <BackTop
        duration={1000}
        visibilityHeight={1220}
      >
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} className="scroll__button">
          <img src={ScrollUp} alt="Кнопка прокрутки наверх" />
        </div>
      </BackTop>
    </div>
  )
}

export default ScrollButton;
