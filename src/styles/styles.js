import styled from 'styled-components';
import { background, arrow } from "../media/img";


export const HeaderSection = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

export const Container = styled.div`
  margin: 0 9.3%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

    ul {
      padding-left: 120px;
      padding-right: 272px;
    }

    ul li {
      display: inline-block;
      margin-right: 50px;
    }

    ul li:last-child {
      margin-right: 0;
    }

    ul li a{
      text-decoration: none;
      color: white;
    }

    ul li a:hover {
      color: pink;
      transition: all 0.3s ease 0s;
    }

    @media(max-width: 1265px) {
      ul {
      padding: 0 20px;
      }
    }
  `;

export const NavItem = styled.div`
  padding-top: 40px;
  padding-bottom: 50px;

    img {
      max-width: 78px;
      height: 50px;
    }
`;

export const InformTitle = styled.p`
padding-bottom: 66px;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: 46px;
letter-spacing: 0em;
text-align: left;
`;


// Content styles 

export const ContentSection = styled.section`

`;

export const SortElem = styled.div`

    ul {
      padding: 35px 0;
    }

    ul li:first-child {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
    }

    ul li {
      display: inline-block;
    }

    ul li:nth-child(2) {
      margin-left: 45px;
    }

    ul li:nth-child(4) {
      margin-left: 55px;
    }

    ul li:nth-child(2):hover, 
    ul li:nth-child(4):hover,
    ul li span:hover {
      cursor: pointer;
      color: pink;
      transition: all 0.3s ease 0s;
    }


    ul li span {
      display: inline-block;
      vertical-align: bottom;
      margin-bottom: -2px;
      margin-left: 14px;
      width: 15px;
      height: 15px;
      background-image: url(${arrow});
      background-repeat: no-repeat;
    }
    ul li:last-child span {
      margin-left: 24px;
    }

`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    flex: 0 0 32%;
    background-color: #F3F3F3;
    margin-bottom: 23px;
`;

export const ItemTitle = styled.h3`
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
text-align: left;

`;

export const Info = styled.div`
  display: flex;
  margin: 25px 0;
  padding-left: 18px;
  border-left: 4px solid #6EBBD3;

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;

    }
`;

export const Price = styled.div`
  margin-bottom: 28px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CardButton = styled.div`
  padding: 22px 0;

  width: 100%;
  color:white;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;

  background-color: #6EBBD3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const AjaxButton = styled.div`
  margin: 68px  auto 83px ;
  max-width: 380px;
  padding: 24px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  border: 1px solid #CACACA;
  border-radius: 10px;
  text-align: center;

  &:hover {
    background-color: pink;
    color: white;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
`;

/* Footer styles */

export const FooterSection = styled.section`
  color: white;
`;

export const FooterContainer = styled(Container)`
  background-color: #1F2021;
  padding: 82px 80px 92px;
`;

export const Form = styled.form`

`;