// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <SkillsGrid>
        <Skill>React</Skill>
        <Skill>Redux</Skill>
        <Skill>Angular</Skill>
        <Skill>NgRx</Skill>
        <Skill>Typescript</Skill>
        <Skill>JavaScript</Skill>
        <Skill>HTML5</Skill>
        <Skill>CSS3</Skill>
        <Skill>Bootstrap</Skill>
        <Skill>MaterialUI</Skill>
        <Skill>Node.js</Skill>
        <Skill>AWS</Skill>
        <Skill>Git</Skill>
      </SkillsGrid>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f1c40f;

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Skill = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default Skills;