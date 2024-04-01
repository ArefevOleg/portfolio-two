import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { Button } from '../../../../components/Button';
import imgPreview2 from '../../../../assets/images/Preview2.webp';


export const AboutMe = () => {
  return (
    <Container>
      <AboutMeWrapper>
        <DescriptionWrapper>
          <TitleWrapper>
          <Hashtag name="#" />
          <SectionTitle title="aboutme" />
          </TitleWrapper>
          <DescriptionTitle>
          Hello, i’m Elias!
          </DescriptionTitle>
          <DescriptionText>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </DescriptionText>
          <DescriptionText>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.{" "}
          </DescriptionText>
            <Button>Read more --- </Button> 
        </DescriptionWrapper>
        <ImgWrapper></ImgWrapper>
      </AboutMeWrapper>
    </Container>
  );
};


const AboutMeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 165px;
  height: 100%;
  padding-bottom: 112px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 516px;
  span {
    font-size: 32px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-left: 16px;
  }
`


const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
 max-width: 516px;
`;


const DescriptionTitle = styled.h3`
  color: ${theme.colors.colorGray};
  font-weight: 500;
`

const DescriptionText = styled.p`
  color: currentColor;
`


const ImgWrapper = styled.div`
  display: flex;
  width: 343px;
  height: 508px;
  background-image: url(${imgPreview2});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;


  &::before {
    content: "";
    width: 84px;
    height: 84px;
    background-image: url("./Dots84.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 59px;
    left: -4px;
    z-index: 1;
  }
  

  &::after {
    content: "";
    width: 104px;
    height: 56px;
    background-image: url("./Dots104.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 16px;
    bottom: 172px;
    z-index: 1;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`


