import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { theme } from '../../styles/Theme';
import { SkillCard } from '../../components/skillsCard/SkillCard';




export const SmallProjects = () => {
  return (
    <Container>
      <SectionTitleWrapper>
        <SectionTitle title="small-projects" />
      </SectionTitleWrapper>
      <SmallProjectsWrapper>
        <SkillCard
          list="Discord.js TS JS"
          name="Bot boilerplate"
          description="Start creating scalable discord.js bot with typescript in seconds"
        />
        <SkillCard
          list="VUE CSS JS"
          name="My blog"
          description="Front-end of my future blog website written in vue"
        />
        <SkillCard
          list="Figma"
          name="Chess pro"
          description="Figma landing page about service for viewing chess tournaments"
        />
        <SkillCard
          list="Figma"
          name="Crash protect website"
          description="Figma template for website about anti-raid, anti-crash discord bot"
        />
        <SkillCard
          list="HTML CSS"
          name="CSS expirements"
          description="Collection of my different little projects in css"
        />
        <SkillCard
          list="Lua NeoVim"
          name="Web Dev nvim config"
          description="Config for neovim perfect for web developer"
        />
        <SkillCard
          list="Python Quart HTML"
          name="Ooku"
          description="Simple link shortener with auth"
        />
        <SkillCard
          list="Figma"
          name="School website"
          description="Figma template website for my school"
        />
      </SmallProjectsWrapper>
    </Container>
  );
};


const SmallProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 48px;
  padding-bottom: 40px;

  @media screen and (max-width: 1076px) {
    justify-content: center;
    
  }
`;

const SectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1076px) {
    justify-content: center;
    
  }
`