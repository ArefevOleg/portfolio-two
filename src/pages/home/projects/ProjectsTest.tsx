import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/slider/Container';
import {  ProjectTest } from './project/ProjectTest';




export const ProjectsTest = () => {
  return (
    <Container>
      <ProjectsWrapper>
        <ProjectTest img="../../../../assets/images/Banner1.webp"
                skillName={["HTML", "CSS"]}
                descriptiontitle="Responsive Web Design"
                descriptiontext="Lorem ipsum dolor sit amet"
                buttonTitle="Learn More"
        />
        <ProjectTest 
        img="../../../../assets/images/Banner1.webp"
        skillName={["HTML", "CSS"]}
        descriptiontitle="Responsive Web Design"
        descriptiontext="Lorem ipsum dolor sit amet"
        buttonTitle="Learn More"
        />
        <ProjectTest 
        img="../../../../assets/images/Banner1.webp"
        skillName={["HTML", "CSS"]}
        descriptiontitle="Responsive Web Design"
        descriptiontext="Lorem ipsum dolor sit amet"
        buttonTitle="Learn More"
        />
      </ProjectsWrapper>
    </Container>
  );
};


const ProjectsWrapper = styled.div`
  display: flex;
  gap: 16px;
  height: 100vh;
`