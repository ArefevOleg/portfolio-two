import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Hashtag } from '../../components/hashtag/Hashtag';
import { SkillCardHome } from '../../pages/home/skills/SkillCardHome';


export const SkillsAboutPage = () => {
  return (
    <Container>
      <SectionTitle title="skills" />
      <CardWrapper>
            <SkillCardHome
              name="Languages"
              description="TypeScript Lua Python JavaScript"
            />
            <SkillCardHome
              name="Databases" 
              description="SQLite PostgreSQL Mongo" />
            <SkillCardHome
              width={196}
              name="Tools"
              description="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
            />
            <SkillCardHome
              name="Other"
              description="HTML CSS EJS SCSS REST Jinja"
            />
            <SkillCardHome
              width={196}
              name="Frameworks"
              description="React Vue Disnake Discord.js Flask Express.js"
            />
          </CardWrapper>
    </Container>
  );
};


const CardWrapper = styled.div`
  padding-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
`;