import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/header/Header';
import { Media } from '../../components/media/Media';
import { Footer } from '../../components/footer/Footer';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { Container } from '../../components/slider/Container';
import { theme } from '../../styles/Theme'; 
import { MediaBox } from '../../components/media/MediaBox';
import { AllMedia } from '../../components/allMedia/AllMedia';

export const ContactsPage = () => {
  return (
    <div>
      <Header />
      <PageTitle name="contacts" description="Who am i?" />
      <Container>
        <ContactWrapper>
          <Message>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Message>
          <MediaWrapper>
            <SupportWrapper>
              <SupportTitle>Support me here</SupportTitle>
              <Card>4149500120690030</Card>
            </SupportWrapper>
            <MediaBox />
          </MediaWrapper>
        </ContactWrapper>
      </Container>
      <Media />
      <AllMedia />
      <Footer />
    </div>
  );
};


const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Message = styled.p`
  line-height: 26px;
  width: 500px;
`;


const MediaWrapper = styled.div`
  display: flex;
  gap: 11px;
`;

const SupportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 186px;
  height: 82px;
  outline: 1px solid ${theme.colors.colorGray};
  padding: 16px;
  gap: 8px;
`;

const SupportTitle = styled.p`
  font-weight: 500;
  color: ${theme.colors.accentWhite};
`;

const Card = styled.p`
  `