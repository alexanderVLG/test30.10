import React from 'react';
import { CardItem } from './components';
import { barsic, murka, vasiliy, like } from './media/img';
import {
  ContentSection,
  Container,
  SortElem,
  Flex,
  ContentFlex,
  AjaxButton
} from './styles/styles';

const catsData = [
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
    sale: false
  },
  {
    id: 4,
    imgSrc: barsic,
    name: "Кот полосатый",
    age: 5,
    price: 25000,
    sale: false
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

const Content = () => {

  const sortedDataAge = catsData.sort((a, b) => {
    return (
      a.age - b.age
    )
  })

  const sortedDataPrice = catsData.sort((a, b) => {
    return (
      a.price - b.price
    )
  })

  const handleSortByPrice = () => {

  }

  const handleSortByAge = () => {

  }

  const renderCatList = sortedDataPrice.map((catItem) => {
    return (
      <CardItem {...catItem} />
    )
  })



  return (
    <ContentSection>
      <Container>
        <SortElem>
          <ul>
            <li>Сортировать по:</li>
            <li onClick={handleSortByPrice}>Цене</li>
            <li><span></span></li>
            <li onClick={handleSortByAge}>Возрасту</li>
            <li><span></span></li>
          </ul>
        </SortElem>
        <ContentFlex>
          {renderCatList}
        </ContentFlex>
        <Flex style={{ justifyContent: "center" }}>
          <AjaxButton>Показать еще 20 </AjaxButton>
        </Flex>
      </Container>
    </ContentSection >
  );
};


export default Content;