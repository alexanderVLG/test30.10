import React from 'react';
import { CardItem } from './component';
import { barsic, murka, vasiliy, like, likesold } from './media/img';

import {
  ContentSection,
  Container,
  SortElem,
  Flex,
  ContentFlex,
  Item,
  ItemTitle,
  Info,
  CardButton,
  Price,
  AjaxButton
} from './styles/styles';

const Content = () => {
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
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </ContentFlex>
        <Flex style={{ justifyContent: "center" }}>
          <AjaxButton>Показать еще 20 </AjaxButton>
        </Flex>
      </Container>
    </ContentSection >

  );
};


export default Content;