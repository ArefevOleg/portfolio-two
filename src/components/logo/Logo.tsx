import React from "react";
import styled from 'styled-components';
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";


export const Logo = () => {
  return (
    <LinkLogo href=" ">
      <Icon iconId={"logoUnion"} />
      <LogoName>Elias</LogoName>
    </LinkLogo>
  );
};

const LogoName = styled.a`
  font-weight: 700;
  padding-left: 8px;
  color: ${theme.colors.accentWhite};
`

const LinkLogo = styled.a`
  display: inline-block;
  padding: 2.5px 0;
  width: 72px;
`;