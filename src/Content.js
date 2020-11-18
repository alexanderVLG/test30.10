import React, { useState, useEffect } from 'react';
import { CardItem, ScrollButton } from './components';
import { catsData } from './mock';
import { sortByKeyValue } from './util';
import {
  ContentSection,
  Container,
  SortElem,
  Flex,
  ContentFlex,
  AjaxButton
} from './styles/styles';

const Content = () => {
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState(catsData);

  useEffect(() => {
    const sortedData = sortByKeyValue(data, filter)
    setData(sortedData)
  }, [filter])


  const renderCatList = data.map((catItem, index) => {
    return (
      <CardItem key={index} {...catItem} />
    )
  })

  const handleSortCats = (keyName) => {
    setFilter(keyName)
  }

  return (

    <ContentSection>
      <Container>
        <SortElem>
          <div>Сортировать по:</div>
          <div onClick={() => handleSortCats("price")}>Цене<span></span></div>
          <div onClick={() => handleSortCats("age")}>Возрасту<span></span></div>
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