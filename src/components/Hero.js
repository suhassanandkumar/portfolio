// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/profile.jpg'; // Add your profile picture in src/assets

const Hero = () => {
  return (
    <HeroSection>
      <Content>
      <ProfileImage src={profilePic} alt="Profile" />
        <h1>Hi, I'm Suhas Sanand Kumar</h1>
        <p>A passionate web developer skilled in React, Redux, Angular, NgRx, JavaScript</p>
        <Button href="#projects">View My Projects</Button>
      </Content>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #3498db, #8e44ad);
  color: white;
  text-align: center;
  flex-direction: column;
`;

const Content = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
`;

const Button = styled.a`
  background-color: #2ecc71;
  color: white;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #27ae60;
  }
`;

export default Hero;