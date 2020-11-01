import React, { useState } from 'react';
import { CardItem, ScrollButton } from './components';
import { barsic, murka, vasiliy, like } from './img';
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
  const [isSorted, setIsSorted] = useState(false);

  const setSortedData = (catsData) => {

    const sortedDataPrice = catsData.sort((a, b) => {
      return (
        a.price - b.price
      )
    })

    const sortedDataAge = catsData.sort((a, b) => {
      return (
        a.age - b.age
      )
    })

    const dataOfAge = [...sortedDataAge];
    const dataOfPrice = [...sortedDataPrice];
    console.log(sortedDataPrice)

  }

  const handleSortByPrice = () => {
    console.log("hey")
  }

  const handleSortByAge = () => {
    console.log('buy')
  }

  const renderCatList = catsData.map((catItem) => {
    return (
      <CardItem {...catItem} />
    )
  })

  return (
    <ContentSection>
      <Container>
        <SortElem>
          <div>Сортировать по:</div>
          <div onClick={handleSortByPrice}>Цене<span></span></div>
          <div onClick={handleSortByAge}>Возрасту<span></span></div>
        </SortElem>
        <ContentFlex>
          {renderCatList}
        </ContentFlex>
        <Flex style={{ justifyContent: "center", position: "relative" }}>
          <AjaxButton>Показать еще 20 </AjaxButton>
          <ScrollButton />
        </Flex>
      </Container>
    </ContentSection>
  );
};


export default Content;