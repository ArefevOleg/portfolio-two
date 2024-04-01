import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';


type PropsType = {
  title: string;
}


export const SectionTitle = ({ title }: PropsType ) => {
  return (
  <Title>{ title }</Title>
  );
};


const Title = styled.h2`
display: inline-block;
  font-size: 32px;
  color: ${theme.colors.accentWhite};
  align-self: end; 
  font-weight: 500;
  

  &::before {
    content: "#";
    color: ${theme.colors.accentGreen};
  }

  `
