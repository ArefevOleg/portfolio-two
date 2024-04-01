import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/slider/Container';
import { SectionTitle } from '../../../components/textComponents/SectionTitle';
import { Button } from '../../../components/Button';
import imgPreview2 from '../../../assets/images/Preview2.webp';
import Gif from '../../../assets/images/gifgivecom.gif';




type AboutMeProps = {
  isShowTitle?: boolean;
  button?: boolean;
}

export const AboutMe = ({isShowTitle = true, button = true}: AboutMeProps) => {
  return (
    <Container>
      <AboutMeWrapper>
        <DescriptionWrapper>
        <TitleWrapper>
        {isShowTitle && <SectionTitle title="about-me" />}
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
          {button && <Button>Read more -&gt; </Button>}
             
        </DescriptionWrapper>
        <ImgWrapper><div className="fire"></div></ImgWrapper>
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
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  border-bottom: 1px solid ${theme.colors.accentGreen};

  .fire {
    display: none;
    width: 345px;
    height: 200px;
  }


  &:hover .fire{
  display: block;
  background-image: url("${Gif}");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: -43px;
  z-index: 6;
}

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




