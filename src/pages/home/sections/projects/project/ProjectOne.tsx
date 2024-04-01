import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../components/Button';
import { theme } from '../../../../../styles/Theme';
import { ProjectType } from '../Projects';
type PropsType = {
  project: ProjectType,
  cashed: boolean
}
export const ProjectOne = ({project, cashed}: PropsType) => { // orops: PropsType => props.project
  const skillsLength = project.skills.length;
  const isShowSecondSkillWrapper = skillsLength>4;

  return (
    <ProjectWrapper>
      <ImgWrapper>
        <Img src={project.img} />
      </ImgWrapper>
      <SkillsWrapper>
        {project.skills.slice(0,3).map((skill)=><SkillName>{skill}</SkillName>)}
      </SkillsWrapper>
      {isShowSecondSkillWrapper && 
        <SkillsWrapper>
        {project.skills.slice(3).map((skill)=><SkillName>{skill}</SkillName>)}
      </SkillsWrapper>
      }
      <Description>
        <DescriptionTitle>{project.title}</DescriptionTitle>
        <DescriptionText>{project.description}</DescriptionText>
        <ButtonWrapper>
        <Button>Live</Button>
       {cashed && <Button>Cached</Button>}
        </ButtonWrapper>
      </Description>
    </ProjectWrapper>
  );
};


const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100%;
  border: 1px solid ${theme.colors.colorGray};
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid ${theme.colors.colorGray};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SkillsWrapper = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;
`;

const SkillName = styled.p`

  font-weight: 500;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${theme.colors.colorGray};
  padding: 16px;
  gap: 16px;
`;


const DescriptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;


const DescriptionText = styled.p`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;