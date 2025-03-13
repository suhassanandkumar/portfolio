// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Section id="contact">
    <FooterContainer>
      <p>&copy; 2025 Suhas Sanand Kumar. All rights reserved.</p>
      <div>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/suhas-sanand/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </FooterContainer>
    </Section>
  );
};

const Section = styled.section`
`;

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #34495e;
  color: white;
  text-align: center;

  a {
    color: #3498db;
    margin: 0 15px;
    text-decoration: none;
  }
`;

export default Footer;