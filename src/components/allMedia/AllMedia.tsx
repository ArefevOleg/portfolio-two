import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../slider/Container';
import { Twitter } from'../media/Twitter';
import { SectionTitle } from '../textComponents/SectionTitle';

export const AllMedia = () => {
  return (
    <Container>
      <AllMediaWrapper>
        <SectionTitle title={"all-media"} />
        <TwitterWrapper>
          <Twitter />
          <Twitter />
        </TwitterWrapper>
      </AllMediaWrapper>
    </Container>
  );
};


const AllMediaWrapper = styled.div`
margin-bottom: 84px;
`;


const TwitterWrapper = styled.div`
  display: flex;
  gap: 22px;
  padding-top: 22px;
`