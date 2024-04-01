import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { theme } from '../../styles/Theme';
import Imgots from '../../assets/images/Dots37.svg';
import ImgLogo from '../../assets/images/logo113.svg';

export const MyFunFacts = () => {
  return (
    <Container>
      <SectionTitle title="my-fun-facts" />
      <FactsSectionWrapper>
        <FactsWrapper>
          <FactsItem>I like winter more than summer</FactsItem>
          <FactsItem>I often bike with my friends</FactsItem>
          <FactsItem>I like pizza and pasta</FactsItem>
          <FactsItem>I was in Egypt, Poland and Turkey</FactsItem>
          <FactsItem>My favorite movie is The Green Mile</FactsItem>
          <FactsItem>I am still in school</FactsItem>
          <FactsItem>I don’t have any siblings</FactsItem>
        </FactsWrapper>
        <DecoreWraper></DecoreWraper>
      </FactsSectionWrapper>
    </Container>
  );
};


const FactsSectionWrapper = styled.div`
padding-top: 83px;
padding-bottom: 162px;
  display: flex;
  justify-content: space-between;
  width: 939px;
`;

const FactsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 605px;
`;

const FactsItem = styled.p`
  padding: 8px;
  outline: 1px solid ${theme.colors.colorGray};
`;


const DecoreWraper = styled.div`
width: 178px;
height: 169px;
position: relative;


&::before {
    content: "";
    width: 16px;
    height: 64px;
    background-image: url(${Imgots});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    width: 113px;
    height: 113px;
    background-image: url(${ImgLogo});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    bottom: 0;
  }
 `