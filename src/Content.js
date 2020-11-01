import React from 'react';
import { CardItem } from './components';
import { catsData } from './mock';

import {
  ContentSection,
  Container,
  SortElem,
  Flex,
  ContentFlex,
  AjaxButton
} from './styles/styles';


const Content = () => {
  const renderCatList = catsData.map((catItem) => {
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
            <li>Цене</li>
            <li><span></span></li>
            <li>Возрасту</li>
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