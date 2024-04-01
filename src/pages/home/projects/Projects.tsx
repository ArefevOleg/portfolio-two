import React from 'react';
import styled from 'styled-components';
import { ProjectOne } from './project/ProjectOne';
import { Container } from '../../../components/slider/Container';
import { SectionTitle } from '../../../components/textComponents/SectionTitle';
import img1 from '../../../assets/images/Banner1.webp'
import img2 from '../../../assets/images/Banner2.webp'
import img3 from '../../../assets/images/Banner3.webp'
import { theme } from '../../../styles/Theme';


export type ProjectType = {
  img: string,
  skills: string[],
  title: string,
  description: string,
  buttons: string[]
}
const porjectsArr:ProjectType[] = [
  {
    img:img1,
    skills: ['HTML', 'SCSS', 'Python', 'Flask'] ,
    title:'ChertNodes',
    description: 'Lorem ipsum dolor sit amet',
    buttons:['Cashed']
  },
  {
    img:img2,
    skills: ['React', 'Express', 'Discord.js', 'Node,js', 'HTML', 'SCSS', 'Python', 'Flask'] ,
    title:'Protect X',
    description: 'Discord anti-crash bot',
    buttons:['Cashed']
  },
  {
    img:img3,
    skills: ['CSS', 'Express', 'Node,js'] ,
    title:'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    buttons:['Cashed']
  }

]

export const Projects = () => {
  return (
    <Container>
      <ProjectsWrapper>
        <TitleBox>
          <TitleWrapper>
            <SectionTitle title="projects" />
          </TitleWrapper>
          <Span>View all ~~&gt;</Span>
        </TitleBox>
        <ProjectWrapper>
          {porjectsArr.map((project, index) => (
            <ProjectOne project={project} cashed={index === 0} />
          ))}
       
        </ProjectWrapper>
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 48px;
  height: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
   span {
    font-size: 32px;
   }

   &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-top: 8px;
    margin-left: 16px;
  }
  `

const Span = styled.a`
font-size: 16px;
color: ${theme.colors.accentWhite};
cursor: pointer;
display: inline-block;

&:hover {
    color: ${theme.colors.accentWhite};
  }

  &:active {
    color: ${theme.colors.accentGreen};
  }
`


const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  `