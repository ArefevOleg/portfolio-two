import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

export const MediaBox = () => {
  return (
      <ContactsWrapper>
        <ContactsTitle>Message me here</ContactsTitle>
        <MediaList>
          <MediaItem>
            <MedialLink>
              <Icon
                iconId={"discord"}
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
                iconId={"email"}
                width={"32px"}
                height={"32px"}
                viewbox={"0 0 32 32"}
              />
              <ContactName>elias@elias.me</ContactName>
            </MedialLink>
          </MediaItem>
        </MediaList>
      </ContactsWrapper>
  );
};


const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 204px;
  height: 140px;
  outline: 1px solid ${theme.colors.colorGray};
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

  &:hover {
    color: ${theme.colors.accentWhite};
  }

  &:active {
    color: ${theme.colors.accentGreen};
  }
  `

  const ContactName = styled.p`
  display: inline-block;
  font-weight: 600;
  color: ${theme.colors.colorGray};

  &:hover {
    color: ${theme.colors.accentWhite};
  }

  &:active {
    color: ${theme.colors.accentGreen};
  }
  `

