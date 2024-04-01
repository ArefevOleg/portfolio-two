import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';


export const ProjectThre = () => {
  return (
    <ProjectWrapper>
      <ImgWrapper>
        <Img src="https://i.postimg.cc/d1snnVZC/Banner3.webp" />
      </ImgWrapper>
      <SkillsWrapper>
        <SkillName>CSS</SkillName>
        <SkillName>Express</SkillName>
        <SkillName>Node.js</SkillName>
      </SkillsWrapper>
      <Description>
        <DescriptionTitle>Kahoot Answers Viewer</DescriptionTitle>
        <DescriptionText>Get answers to your kahoot quiz</DescriptionText>
        <ButtonWrapper>
        <Button>Live &lt;~&gt; </Button>
        </ButtonWrapper>
      </Description>
    </ProjectWrapper>
  );
};


const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100%;
  outline: 1px solid ${theme.colors.colorGray};

  &:hover {
    outline: 3px solid ${theme.colors.accentGreen};

  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid ${theme.colors.colorGray};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SkillsWrapper = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;
`;

const SkillName = styled.p`

`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${theme.colors.colorGray};
  padding: 16px;
  gap: 16px;
`;


const DescriptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;


const DescriptionText = styled.p`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;