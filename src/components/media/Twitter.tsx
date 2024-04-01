import React from 'react';
import styled from 'styled-components';
import {  theme } from '../../styles/Theme';
import { Icon } from '../icon/Icon';

export const Twitter = () => {
  return (
      <LogoWrapper>
      <Icon iconId={"twitter"}  width='32px' height='32px' viewbox='0 0 32 32'/>
      <LogoName>@elias</LogoName>
      </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.accentWhite};

    &:active {
    color: ${theme.colors.accentGreen};
  }
  }
`

const LogoName = styled.span`
  display: inline-block;
  color: ${theme.colors.colorGray};

  &:hover {
    color: ${theme.colors.accentWhite};
  }

  &:active {
    color: ${theme.colors.accentGreen};
  }
`;

