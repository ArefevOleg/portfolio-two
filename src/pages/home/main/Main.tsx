import React from "react";
import styled from 'styled-components';
import photoP1 from "../../../assets/images/Preview1.webp";
import Gif from "../../../assets/images/gifgivecom.gif";
import { FlexWrapper } from "../../../components/flex/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/slider/Container";
import { Button } from "../../../components/Button";
import Katana from "../../../assets/images/katana.png";

export const MainSection = ( ) => {
  return (
    <div>
      <Styledmain>
        <Container>
          <FlexWrapper>
            <FlexWrapper direction="column">
              <MainTitle>
                Elias is a<MainTitleAccent>web designer</MainTitleAccent>
                and
                <MainTitleAccent>front-end developer</MainTitleAccent>
              </MainTitle>
              <MainText>
                He crafts responsive websites where technologies meet creativity
              </MainText>
              <Button>Contact me !!</Button>
            </FlexWrapper>
            <FlexWrapper direction="column">
              <PhotoWrapper>
                <Photo />
                <div className="katana"></div>
                <div className="fire"></div>
              </PhotoWrapper>
              <SignatureBox>
                <Signature>
                  Currently working on
                  <SignatureAccent>Portfolio</SignatureAccent>
                </Signature>
              </SignatureBox>
            </FlexWrapper>
          </FlexWrapper>
        </Container>
      </Styledmain>
    </div>
  );
};

const Styledmain = styled.section`
height: 100%;
display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;


  .fire {
    display: none;
    width: 402px;
    height: 200px;
  }


  &:hover .fire{
  display: block;
  background-image: url("${Gif}");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 55px;
  bottom: -19px;
  z-index: 6;
  transition: background-color 3s, transform 2.5s;
}
  .katana {
    display: none;
    width: 300px;
    height: 300px;
  }


  &:hover .katana {
  display: block;
  background-image: url("${Katana}");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 106px;
  bottom: -7px;
  z-index: -6;
}

  &::after{
    content: "";
    width: 155px;
    height: 155px;
    background-image: url("./Logo11.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 84px;
    left: -12px;
    z-index: -1;
  }

  &::before{
    content: "";
    width: 84px;
    height: 84px;
    background-image: url("./Dots.svg");
    position: absolute;
    right: 16px;
    bottom: 56px;
    z-index: 2;
  }
`

const Photo = styled.div`
  width: 457px;
  height: 386px;
  background-image: url("${photoP1}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -130px -80px;
  background-size: 650px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  padding-bottom: 32px;
`;

const MainTitleAccent = styled.span`
  padding: 0 15px;
  display: inline-block;
  color: ${theme.colors.accentGreen};

  &:last-child {
    padding-left: 0;
  }
`;

const MainText = styled.p`
margin-bottom: 24px;
width: 463px;
`;

const SignatureBox = styled.div`
  width: 402px;
  height: 37px;
  border: 1px solid ${theme.colors.colorGray};
  position: relative;
  z-index: 0;

`

const Signature = styled.p`
  font-weight: 500;
  padding: 8px;

  &::before {
    content: " ";
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${theme.colors.accentGreen};
    margin-right: 10px;
  }
`;

const SignatureAccent = styled.span`
  display: inline-block;
  padding-left: 10px;
  color: ${theme.colors.accentWhite};
`




