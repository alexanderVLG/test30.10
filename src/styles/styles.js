import styled from 'styled-components';
import { background, arrow } from "../img";


export const HeaderSection = styled.section`
  width: 100%;
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
    
    ul li a {
      text-decoration: none;
      color: white;
    }
    
    ul li a:hover {
      color: pink;
      transition: all 0.3s ease 0s;
    }

    @media (max-width: 1500px){
      ul {
        padding-right: 170px;
      }
    }
    
    @media (max-width: 1265px) {
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

export const HeaderInfo = styled.div`
  padding-bottom: 66px;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: left;
    @media(max-width: 510px) {
      font-size: 24px;
    }
`;


// Content styles 

export const ContentSection = styled.section`

`;

export const Flex = styled.div`
    display: flex;
`;

export const SortElem = styled(Flex)`
  align-items: center;
  padding: 35px 0;

    div:first-child {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
    }

    div:nth-child(2) {
      margin-left: 45px;
    }

    div:nth-child(3) {
      margin-left: 55px;
    }

    div:nth-child(2):hover, 
    div:nth-child(3):hover,
    div span:hover {
      cursor: pointer;
      color: pink;
      transition: all 0.3s ease 0s;
    }


    div span {
      display: inline-block;
      vertical-align: bottom;
      margin-bottom: -2px;
      margin-left: 14px;
      width: 15px;
      height: 15px;
      background-image: url(${arrow});
      background-repeat: no-repeat;
    }
    div:last-child span {
      margin-left: 24px;
    }

    @media(max-width: 570px) {
      flex-direction: column;
      justifi-content: center;

      div {
        font-size: 14px;
        margin: 5px 0;
      }

      div:nth-child(2),
      div:nth-child(3) {
        margin-left: 20px;
      }

      div span,
      div:last-child span {
        margin-left: 6px;
      }
    }
`;

export const ContentFlex = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
    flex: 0 0 32%;
    background-color: #F3F3F3;
    margin-left: 7px;
    margin-right: 7px;
    margin-bottom: 23px;

      .first__div {
        position: relative;
      }
`;

export const ItemTitle = styled.div`
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

export const CardButton = styled.button`
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
  border: none;
  outline: none;
`;



export const AjaxButton = styled.button`
  margin: 68px  auto 83px ;
  padding: 24px 127px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  border: 1px solid #CACACA;
  border-radius: 10px;
  text-align: center;
  outline: none;
  border: none;
  

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

    @media(max-width: 510px) {
      padding: 20px;
    }
`;

export const FooterFlex = styled(Flex)`
  @media(max-width: 1240px) {
    flex-direction: column;
    align-items: center;
  }
`;
