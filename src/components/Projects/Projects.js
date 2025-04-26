import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import mmpranjal from '../../Assets/Projects/mmpranjal.png';
import extensions from '../../Assets/Projects/extensions.png';
import roadmap from '../../Assets/Projects/roadmap.png';
import CF from '../../Assets/Projects/consistent-code.png';
import bhagwatibazaar from '../../Assets/Projects/bhagwatibazaar.png';
import webcrawler from '../../Assets/Projects/web_crawler.png';

import figma1 from '../../Assets/Projects/figma1.png';
import figma2 from '../../Assets/Projects/figma2.png';

function Projects() {
  return (
    <Container
      fluid
      className='project-section'
    >
      <Particle />
      <Container>
        {/* Web Projects Section */}
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Projects</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few coding projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {/* All your website/app projects */}

          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={roadmap}
              isBlog={false}
              title='GPTMapper'
              description='Create stunning topic roadmaps using Mistral AI with GPTMapper.'
              ghLink='https://github.com/mananbansal2002/GPTMap'
              demoLink='https://gptmapper.netlify.app'
            />
          </Col>

          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={webcrawler}
              isBlog={false}
              title='General E-Commerce Web Scraper'
              description='Built a configurable crawler with Node.js, Puppeteer, and Cheerio, scraping 1.8M+ product URLs from Flipkart, Nykaa, TataCliq, Westside, and Virgio. Used depth-based BFS for accurate extraction and added headful fallback for edge cases. Modular design for easy site-specific configurations.'
              ghLink='https://github.com/mananbansal2002/General-E-commerce-Crawler/'
              demoLink='https://github.com/mananbansal2002/General-E-commerce-Crawler/tree/main/results'
            />
          </Col>

          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={CF}
              isBlog={false}
              title='Consistent Code'
              description='Consistent Code is a platform leveraging Codeforces API for Problem of the Day...'
              ghLink='https://github.com/mananbansal2002/Codeforces-extension'
              demoLink='http://consistent-code.netlify.com/'
            />
          </Col>

          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={extensions}
              isBlog={false}
              title='Browser Extensions'
              description='Dark Mode and Nature Sounds browser extensions for enhanced productivity...'
              ghLink='https://github.com/mananbansal2002/3-Browser-Extensions'
              demoLink='https://microsoftedge.microsoft.com/addons/search?developer=Manan%20Bansal'
            />
          </Col>

          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={mmpranjal}
              isBlog={false}
              title='MM Pranjal Industries'
              description='A customizable landing page built for MM Pranjal Industries to highlight their brand and services.'
              ghLink='https://github.com/mananbansal2002/mmpranjal'
              demoLink='https://mmpranjal.com/'
            />
          </Col>

          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={bhagwatibazaar}
              isBlog={false}
              title='Bhagwati Bazaar'
              description='An online presence platform built for Bhagwati Bazaar using React hydration.'
              ghLink='https://github.com/mananbansal2002/bhagwati-bazaar'
              demoLink='https://bhagwatibazaar.com/'
            />
          </Col>
        </Row>

        {/* Figma Designs Section */}
        <h1
          className='project-heading'
          style={{ marginTop: '60px' }}
        >
          My Recent <strong className='purple'>Figma Designs</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Some UI/UX and prototype designs I created on Figma.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {/* All your Figma designs */}
          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={figma1}
              isBlog={false}
              title='Starting Out Copmany Landing Page Design'
              // description='A minimalistic landing page design focused on modern UI, smooth scroll, and clear call-to-actions.'
              // ghLink='https://www.figma.com/file/yourfigmalink1'
              demoLink='https://www.figma.com/design/s0r0T0pTuCpa7HU02zDhy1/starting-core-website?node-id=0-1&p=f&t=CtorubcVGxl4WCtR-0'
            />
          </Col>

          <Col
            md={4}
            className='project-card'
          >
            <ProjectCard
              imgPath={figma2}
              isBlog={false}
              title='Portfolio Design'
              // description='A mobile app interface built around maximizing productivity with clean navigation and intuitive UX flows.'
              // ghLink='https://www.figma.com/file/yourfigmalink2'
              demoLink='https://www.figma.com/design/e6jjJ3ltuqXbDcbKUIzMpU/Untitled?node-id=0-1&p=f&t=5L14wLEXYEBjRCEW-0'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
