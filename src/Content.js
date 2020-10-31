import React from 'react';
import { barsic, murka, vasiliy } from './media/img';

import {
  ContentSection,
  Container,
  SortElem,
  Flex,
  Item,
  ItemTitle,
  Info,
  CardButton,
  Price
} from './styles/styles';

const MainPage = () => {
  return (
    <ContentSection>
      <Container>
        <SortElem>
          <ul>
            <li>Сортировать по:</li>
            <li>Цене</li>
            <li><span></span></li>
            <li>Возрасту</li>
            <li><span></span></li>
          </ul>
        </SortElem>
        <Flex>
          <Item className="content__item1">
            <div>
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
          <Item className="content__item2">
            <div>
              <img src={murka} alt="Фотография кота" />
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
              <Price>40 000 руб.</Price>
            </div>
            <CardButton>
              Купить
            </CardButton>
          </Item>
          <Item className="content__item3">
            <div>
              <img src={vasiliy} alt="Фотография кота" />
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
              <Price>20 000 руб.</Price>
            </div>
            <CardButton>
              Купить
            </CardButton>
          </Item>
          <Item className="content__item4">
            <div>
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
              <Price>25 000 руб.</Price>
            </div>
            <CardButton>
              Купить
            </CardButton>
          </Item>
          <Item className="content__item5">
            <div>
              <img src={vasiliy} alt="Фотография кота" />
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
          <Item className="content__item6">
            <div>
              <img src={murka} alt="Фотография кота" />
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
              <Price>10 000 руб.</Price>
            </div>
            <CardButton>
              Купить
            </CardButton>
          </Item>
        </Flex>
      </Container>
    </ContentSection>

  );
};


export default MainPage;