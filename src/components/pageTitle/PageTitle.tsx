import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Button } from '../Button';
import { Container } from '../slider/Container';


type PropsTitletype = {
  name: string;
  description: string;
};


export const PageTitle = ({ name, description}: PropsTitletype) => {
  return (
    <Container>
      <Wrapper>
      <ProjectsTitle>{name}</ProjectsTitle>
      <Description>{description}</Description>
      </Wrapper>
      
    </Container>
  );
};


const Wrapper = styled.div`
 padding-top: 53px;
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ProjectsTitle = styled.h3`
  font-size: 32px;
  color: ${theme.colors.accentWhite};

  &::before {
    content: "/";
    display: inline-block;
    color: ${theme.colors.accentGreen};
  }
`;


const Description = styled.p`

`