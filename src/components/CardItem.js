import React from 'react';
import { Item, ItemTitle, Price, CardButton, Info } from '../styles/styles';
import { barsic, murka, vasiliy, like } from '../media/img';

export const catsData = [
  {
    id: 1,
    imgSrc: barsic,
    name: "Кот полосатый",
    age: 1,
    price: 30000,
    sale: true
  },
  {
    id: 2,
    imgSrc: murka,
    name: "Кот полосатый",
    age: 3,
    price: 40000,
    sale: false
  },
  {
    id: 3,
    imgSrc: vasiliy,
    name: "Кот полосатый",
    age: 2,
    price: 20000,
    sale: true
  },
  {
    id: 4,
    imgSrc: barsic,
    name: "Кот полосатый",
    age: 5,
    price: 25000,
    sale: true
  },
  {
    id: 5,
    imgSrc: vasiliy,
    name: "Кот полосатый",
    age: 4,
    price: 30000,
    sale: true
  },
  {
    id: 6,
    imgSrc: murka,
    name: "Кот полосатый",
    age: 6,
    price: 10000,
    sale: false
  }
]

const CardItem = ({ name, imgSrc, age, price }) => {

  console.log(price)
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
