import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Button } from '../Button';

type PropsCardtype = {
  name: string;
  description: string;
  width?: number;
  list?: string;
};



export const SkillCard = ( { name, list, description, width=330}: PropsCardtype) => {
  return (
    <CardWrapperMain width={width}>
      <TechnologyList>{list}</TechnologyList>
      <CardWrapper>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button>Read more -&gt; </Button>
      </CardWrapper>
    </CardWrapperMain>
  );
};


const CardWrapperMain = styled.div<{width: number}>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  outline: 1px solid ${theme.colors.colorGray};
  width: ${(props) => `${props.width}px`};

  &:hover {
    outline: 3px solid ${theme.colors.accentGreen};
  }
`;

const TechnologyList = styled.span`
  padding: 8px;
`


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  border-top: 1px solid ${theme.colors.colorGray};
  padding: 16px;


`;

const CardTitle = styled.h3`
font-size: 24px;
  color: ${theme.colors.accentWhite};
 
`;

const CardText = styled.p`
`