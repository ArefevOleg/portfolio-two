import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

type PropsCardtype = {
  name: string;
  description: string;
  width?: number;
};



export const SkillCard = ( { name, description, width=178}: PropsCardtype) => {
  return (
    <CardWrapper width={width}>
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
    </CardWrapper>
  );
};


const CardWrapper = styled.div<{width: number}>`
  display: flex;
  flex-direction: column;
  outline: 1px solid ${theme.colors.colorGray};
  width: ${(props) => `${props.width}px`};
`;

const CardTitle = styled.h3`
  padding: 8px;
  color: ${theme.colors.accentWhite};
  border-bottom: 1px solid ${theme.colors.colorGray};
`;

const CardText = styled.p`
  padding: 8px;
`