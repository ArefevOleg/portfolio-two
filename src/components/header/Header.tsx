import React from "react";
import styled from 'styled-components';
import { Logo } from "../logo/Logo";
import { Menu } from "../menu/Menu";
import { FlexWrapper } from "../flex/FlexWrapper";
import { Container } from "../slider/Container";
import { Language } from "../Language";
import { theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <FlexWrapper justify="flex-end" gap="32px">
          <Menu />
          <Language />
        </FlexWrapper>
      </StyledHeader>
    </Container>
  );
};


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 8px;
  align-items: center;
  width: 100%;
`;
