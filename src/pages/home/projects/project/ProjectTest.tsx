import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button';

type PropsType = {
  img: string;
  descriptiontitle: string;
  descriptiontext: string;
  buttonTitle: string;
  skillName: string[];
};


export const ProjectTest = ({ img, skillName, descriptiontitle, descriptiontext, buttonTitle}: PropsType) => {
  return (
    <StyledProject>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <SkillsWrapper>
        <SkillName>{skillName}</SkillName>
      </SkillsWrapper>
      <Description>
        <DescriptionTitle>{descriptiontitle}</DescriptionTitle>
        <DescriptionText>{descriptiontext}</DescriptionText>
        <Button>{buttonTitle}</Button>
        <Button>{buttonTitle}</Button>
      </Description>
    </StyledProject>
  );
};



const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100%;
  border: 1px solid red;
`;


const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;


const SkillsWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;

const SkillName = styled.p`

`;


const Description = styled.div`
  
  border: 1px solid red;

  Button {

  }
`;

const DescriptionTitle = styled.p`

`;

const DescriptionText = styled.p`
  
`

