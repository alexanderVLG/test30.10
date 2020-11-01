import React from 'react';
import { Item, ItemTitle, Price, CardButton, Info } from '../styles/styles';
import { barsic, murka, vasiliy, like, likesold } from '../media/img';



const CardItem = () => {
  return (
    <Item>
      <div className="first__div">
        <div className="sale">-40%</div>
        <img className="like__image" src={like} alt="лайк" />
        <img src={barsic} alt="Фотография кота" />
      </div>
      <div className="card__description">
        <ItemTitle>
          Кот полосатый
        </ItemTitle>
        <Info>
          <p>Коричневый окрас</p>
          <p><span>2 мес.</span>Возраст</p>
          <p><span>4</span>Кол-во лап</p>
        </Info>
        <Price>30 000 руб.</Price>
      </div>
      <CardButton>
        Купить
    </CardButton>
    </Item>
  );
};

export default CardItem;
