// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Section id="about">
      <h2>About Me</h2>
      <p>
      I am a passionate and detail-oriented UI Developer with 10 years of experience building scalable, high-performance, and user-centric web applications. My expertise lies in crafting seamless, visually appealing, and interactive user interfaces using Angular, React, and modern front-end technologies. I specialize in delivering applications that are not only aesthetically engaging but also optimized for performance, accessibility, and usability.
      </p>
      <br/>
      <h3>My Technical Expertise Includes:</h3>
      <ul>
        <li><b>&#8226; Front-End Development –</b> Proficient in React, Angular, Redux, NGRX, Stencil.js, and Next.js, ensuring modular, maintainable, and scalable applications.</li>
        <li><b>&#8226; State Management & API Integration –</b> Skilled in Redux, GraphQL, WebSockets, Apollo Client, and RESTful APIs to create real-time, data-driven applications.</li>
        <li><b>&#8226; Performance & Optimization –</b> Expertise in Nx Monorepos, lazy loading, memoization, and code-splitting for optimal efficiency and speed.</li>
        <li><b> &#8226;Web Accessibility Compliance (WAC) -</b> Implementing ARIA roles, semantic HTML, color contrast checks, keyboard navigation, and screen reader support to ensure digital inclusivity.</li>
        <li><b>&#8226; UI/UX & Design Systems –</b> Experienced in consuming Figma designs, working with SASS, Tailwind CSS, and Material UI to create responsive and visually cohesive interfaces.</li>
        <li><b>&#8226; Cross-Platform Development –</b> Knowledge of Cordova for hybrid mobile solutions and experience in SaaS applications for cloud-based web platforms.</li>
        </ul>

        <p>
          <br/>
          <h3>Why Work With Me?</h3>
          <p>I believe that great user experiences come from a blend of beautiful design, solid engineering, and accessibility best practices. My approach to UI development is both creative and systematic, ensuring that applications are visually stunning, high-performing, and inclusive for all users. I thrive on solving complex UI challenges, optimizing workflows, and pushing the boundaries of front-end technology.</p>
          <p>As a lifelong learner, I stay ahead of the latest advancements in web development, adopting best practices, modern frameworks, and efficient tooling to build cutting-edge digital solutions. Whether I’m developing from scratch or enhancing existing applications, I focus on delivering intuitive, responsive, and future-proof interfaces.</p>
          <p>I’m always excited to collaborate on impactful projects that drive innovation and enhance user experiences. Let’s build something extraordinary together!</p>
        </p>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 20px;
  background-color: #ecf0f1;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto;
  }
    
`;

export default About;