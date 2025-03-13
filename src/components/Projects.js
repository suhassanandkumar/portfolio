// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Section id="projects">
      <h2>My Projects</h2>
      <ProjectsGrid>
        <Project>
          <h2>Project 1</h2>
          <p>In my recent project for a financial client, I developed a high-performance, data-driven dashboard using React, Redux, and D3.js to provide real-time insights into market trends, portfolio performance, and risk analysis. The goal was to create an intuitive, fast, and visually rich interface that allows financial analysts to make informed decisions effortlessly.</p>
          <br/>
          <h3>Key Highlights of the Project:</h3>
          <ul>
        <li><b>&#8226; Built with React & Redux –</b> Leveraged React’s component-based architecture with Redux for state management, ensuring seamless data flow and scalability for complex financial data.</li>
        <li><b>&#8226; Optimized Performance with Lazy Loading –</b> Implemented code-splitting and lazy loading to enhance performance, ensuring faster load times and smooth user experience, even with large datasets</li>
        <li><b>&#8226; Data Visualization with D3.js –</b> Designed interactive charts and graphs using D3.js to visualize financial data trends, market fluctuations, and risk assessments in an engaging and insightful way.</li>
        <li><b>&#8226; Robust API Integrations –</b>Integrated with multiple RESTful and GraphQL APIs, fetching real-time stock market data, portfolio updates, and financial reports, ensuring high accuracy and up-to-date information.</li>
        <li><b>&#8226; End-to-End Testing with Jest –</b> Implemented unit and integration tests using Jest, ensuring reliability, stability, and regression-free deployments in a high-stakes financial environment.</li>
        <li><b>&#8226; Seamless Deployment & CI/CD –</b> Automated build and deployment pipelines using AWS and Azure, enabling smooth, zero-downtime rollouts and secure cloud hosting.</li>
        <br/><p>This project was a perfect blend of cutting-edge technology, performance optimization, and user-centric design, delivering a scalable, intuitive, and visually powerful financial analytics platform.</p>
        </ul>
        </Project>
        <Project>
          <h2>Project 2</h2>
          <p>I developed a high-performance financial analytics platform using Angular, NgRx, and RxJS, designed to handle real-time data, complex calculations, and interactive visualizations. The goal was to provide financial analysts and traders with an intuitive, fast, and scalable platform for making data-driven investment decisions.</p>
          <br/>
          <h3>Key Aspects of the Project:</h3>
          <ul>
        <li><b>&#8226; Scalable Architecture with Angular & NgRx –</b> Leveraged Angular’s modular structure with NgRx for state management, ensuring seamless handling of large-scale financial data while keeping the app highly maintainable.</li>
        <li><b>&#8226; Reactive Programming with RxJS –</b> Used RxJS for real-time data streams, efficiently managing API responses, WebSocket connections, and user interactions without performance bottlenecks.</li>
        <li><b>&#8226; Optimized Performance with Lazy Loading –</b> Implemented lazy loading and route-based code-splitting, reducing initial load times and improving user experience by dynamically loading only what’s needed.</li>
        <li><b>&#8226; Advanced Data Visualization with D3.js –</b> Developed interactive financial charts, stock trends, and risk analysis tools using D3.js, turning raw data into actionable insights.</li>
        <li><b>&#8226; Robust API Integrations –</b> Integrated with multiple RESTful and GraphQL APIs to fetch live market data, trading insights, and financial reports, ensuring accuracy and real-time updates.</li>
        <li><b>&#8226; Comprehensive Testing with Jasmine & Karma –</b> Implemented unit, integration, and end-to-end tests using Jasmine and Karma, ensuring a stable, bug-free, and regression-proof application.</li>
        <li><b>&#8226; Seamless Deployment & CI/CD –</b> Automated builds and deployments using Azure and AWS pipelines, ensuring smooth updates, high availability, and secure cloud hosting.</li>
        <br/><p>This project was a perfect blend of performance optimization, real-time interactivity, and financial-grade security, delivering a cutting-edge, data-driven experience for professionals in the financial sector.</p>
        </ul>
        </Project>
      </ProjectsGrid>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 20px;
  background-color: #2c3e50;
  color: white;
  text-align: center;

  h2, h3 {
  color: white;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Project = styled.div`
  background-color: #34495e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export default Projects;