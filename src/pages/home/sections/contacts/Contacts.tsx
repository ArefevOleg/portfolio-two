import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { Icon } from '../../../../components/icon/Icon';





export const Contacts = () => {
  return (
    <Container>
      <SectionWrapper>
        <MessageWrapper>
          <TitleWrapper>
            <Hashtag name="#" />
            <SectionTitle title="contacts" />
          </TitleWrapper>
          <Message>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Message>
        </MessageWrapper>
        <ContactsWrapper>
          <ContactsTitle>Message me here</ContactsTitle>

          <MediaList>
            <MediaItem>
              <MedialLink>
                <Icon
                  iconId={"github"}
                  width={"32px"}
                  height={"32px"}
                  viewbox={"0 0 32 32"}
                />
                <ContactName>!Elias#3519</ContactName>
              </MedialLink>
            </MediaItem>
            <MediaItem>
              <MedialLink>
                <Icon
                  iconId={"dribble"}
                  width={"32px"}
                  height={"32px"}
                  viewbox={"0 0 32 32"}
                />
                <ContactName>elias@elias.me</ContactName>
              </MedialLink>
            </MediaItem>
          </MediaList>
        </ContactsWrapper>
      </SectionWrapper>
    </Container>
  );
};



const SectionWrapper = styled.div`
  display: flex;
  gap: 314px;
  width: 100%;
  padding-bottom: 145px;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 505px;
  gap: 45px;
`;


const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 317px;
  span {
    font-size: 32px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-left: 16px;
  }
`;

const Message = styled.p`
  
`

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 204px;
  height: 140px;
  outline: 1px solid ${theme.colors.colorGray};
  margin-top: 87px;
  padding: 16px;
`;

const ContactsTitle = styled.p`
  display: inline-block;
  align-self: flex-start;
  font-weight: 600;
  color: ${theme.colors.accentWhite};
`;




const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  `

  const MediaItem = styled.li`
  display: flex;
  align-items: center;
  `

  const MedialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  `

  const ContactName = styled.p`
  display: inline-block;
  font-weight: 600;
  color: ${theme.colors.colorGray};
  `