import React from 'react';
import { Item, ItemTitle, Price, CardButton, Info } from '../styles/styles';
import { like } from '../img';

const CardItem = ({ name, imgSrc, age, price }) => {

  return (
    <Item>
      <div className="first__div">
        <div className="sale">-40%</div>
        <img className="like__image" src={like} alt="лайк" />
        <img src={imgSrc} alt="Фотография кота" />
      </div>
      <div className="card__description">
        <ItemTitle>
          {name}
        </ItemTitle>
        <Info>
          <p>Коричневый окрас</p>
          <p><span>{age}</span>Возраст</p>
          <p><span>4</span>Кол-во лап</p>
        </Info>
        <Price>{price} руб.</Price>
      </div>
      <CardButton>
        Купить
    </CardButton>
    </Item>
  );
};

export default CardItem;
