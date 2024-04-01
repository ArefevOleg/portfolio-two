import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from './textComponents/SectionTitle';
import { Container } from './slider/Container';
import { ProjectOne } from '../pages/home/projects/project/ProjectOne';
import img1 from '../assets/images/Banner1.webp'
import img2 from '../assets/images/Banner2.webp'
import img3 from '../assets/images/Banner3.webp'
import img4 from '../assets/images/BotCat.webp'
import img5 from '../assets/images/Banner5.webp'
import { ProjectType } from '../pages/home/projects/Projects';




const porjectsArr:ProjectType[] = [
  {
    img:img1,
    skills: ['HTML', 'SCSS', 'Python', 'Flask'] ,
    title:'ChertNodes',
    description: 'Lorem ipsum dolor sit amet',
    buttons:['Cashed']
  },
  {
    img:img3,
    skills: ['CSS', 'Express', 'Node,js'] ,
    title:'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    buttons:['GitHub']
  },
  {
    img:img2,
    skills: ['React', 'Express', 'Discord.js', 'Node,js', 'HTML', 'SCSS', 'Python', 'Flask'] ,
    title:'Protect X',
    description: 'Discord anti-crash bot',
    buttons:['Cashed']
  },
  

  {
    img:img4,
    skills: ['HTML', 'SCSS', 'JS'] ,
    title:'Kotik Bot',
    description: 'Multi-functional discord bot',
    buttons:['Cashed']
  },

  {
    img:img5,
    skills: ['Vue', 'TS', 'Less'] ,
    title:'Portfolio',
    description: 'You’re using it rn',
    buttons:['gitHub']
  }

]

export const CompletApps = () => {
  return (
    <Container>
      <SectionTitle title="complete-apps" />
      <SectionWrapper>
        {porjectsArr.map((project, index) => (
          <ProjectOne project={project} cashed={index === 0} 
          />
        ))}
      </SectionWrapper>
    </Container>
  );
};


const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 48px;
  padding-bottom: 81px;
  `
