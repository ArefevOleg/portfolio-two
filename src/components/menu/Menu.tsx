import React from "react";
import styled from 'styled-components';
import { theme } from "../../styles/Theme";
import { Hashtag } from '../hashtag/Hashtag';

export const Menu = () => {
  return (
    <StyledMenu>
        <ul>
          <li>
            
              <Link href="/"><Hashtag name="#" />home</Link>
              </li>
          <li>
              <Link href="/about"><Hashtag name="#"/>works</Link>
              </li>
          <li>
              <Link href="/contact"><Hashtag name="#"/>about-me</Link>
              </li>
          <li>
              <Link href="/contact"><Hashtag name="#"/>contacts</Link>
          </li>
        </ul>
    </StyledMenu>
  );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
    justify-content: center;
  }

`
const Link = styled.a`
  display: inline-block;
  
  &:hover {
    color: ${theme.colors.accentWhite};
  }

  &:active {
    color: ${theme.colors.accentGreen};
  }
  
`

