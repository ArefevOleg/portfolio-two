import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';
import { SkillCard } from './SkillCard';


export const Skills = () => {
  return (
    <Container>
      <SkillsWrapper>
        <TitleWrapper>
          <Hashtag name="#" />
          <SectionTitle title="skills" />
        </TitleWrapper>
        <BoxWrapper>
          <DecorWrapper>
            <CubeDecorOne />
            <CubeDecorTwo />
          </DecorWrapper>
          <CardWrapper>
            <SkillCard
              name="Languages"
              description="TypeScript Lua Python JavaScript"
            />
            <SkillCard 
              name="Databases" 
              description="SQLite PostgreSQL Mongo" />
            <SkillCard
              width={196}
              name="Tools"
              description="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
            />
            <SkillCard
              name="Other"
              description="HTML CSS EJS SCSS REST Jinja"
            />
            <SkillCard
              width={196}
              name="Frameworks"
              description="React Vue Disnake Discord.js Flask Express.js"
            />
          </CardWrapper>
        </BoxWrapper>
      </SkillsWrapper>
    </Container>
  );
};


const SkillsWrapper = styled.div`
  padding-top: 106px;
  padding-bottom: 112px;
  display: flex;
  flex-direction: column;
  gap: 12x;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  span {
    font-size: 32px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-top: 8px;
    margin-left: 16px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 58px;
  width: 100%;
  height: 100%;
  `

const DecorWrapper = styled.div`
  margin-top: 12px;
  width: 350px;
  height: 282px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 63px;
    height: 63px;
    background-image: url("./Dots63svg.svg");
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 12;
  }

  &::after {
    content: "";
    width: 113px;
    height: 113px;
    background-image: url("./Logo11.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 15px;
    bottom: 0;
    z-index: -1;
  }
`;

const CubeDecorOne = styled.div`
width: 86px;
height: 86px;
border: 1px solid ${theme.colors.colorGray};
position: absolute;
top: 0;
right: 36px;

&::after {
  content: "";
  width: 63px;
  height: 63px;
  background-image: url("./Dots63svg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 155px;
  right: 73px;
}
`;


const CubeDecorTwo = styled.div`
width: 52px;
height: 52px;
border: 1px solid ${theme.colors.colorGray};
position: absolute;
right: 0;
bottom: 37px;
`;


const CardWrapper = styled.div`
padding-top: 43px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  width: 584px;
`


