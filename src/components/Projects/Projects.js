import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imagify from "../../Assets/Projects/imagify.png";
import extensions from "../../Assets/Projects/extensions.png";
import roadmap from "../../Assets/Projects/roadmap.png";
import CF from "../../Assets/Projects/consistent-code.png";
import Blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blogify"
              description="Dynamic React JS blog website with an advanced filtering feature for effortless browsing. Sleek and intuitive user interface that's fully responsive and optimized for search engines. Utilizes HTML, CSS, and JavaScript, as well as Redux and React Router libraries for seamless functionality. A valuable resource for staying informed on the latest news and trends."
              ghLink="https://github.com/mananbansal2002/Blogify"
              demoLink="https://myblogify.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CF}
              isBlog={false}
              title="Consistent Code"
              description="Consistent Code is a powerful platform that leverages Codeforces API to offer a personalized Problem of the Day experience. With advanced filtering options based on difficulty levels and ratings, our sleek and modern website caters to programmers of all levels. Our growing community of over 29,000 active users provides ample opportunities for networking and collaboration. Built using cutting-edge technology, Consistent Code is constantly updated with fresh and relevant content, making it an essential tool for improving your programming skills."
              ghLink="https://github.com/mananbansal2002/Codeforces-extension"
              demoLink="http://consistent-code.netlify.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extensions}
              isBlog={false}
              title="Browser Extensions"
              description="Experience a better browsing experience with Dark Mode and Nature Sounds extensions, designed to enhance your productivity and relaxation. The Dark Mode extension minimizes eye strain and maximizes focus, while the Nature Sounds extension brings the calming effects of nature to your browser. Both extensions have sleek and intuitive interfaces, making it easy to customize and personalize your browsing experience. Elevate your browsing experience today and try the Dark Mode and Nature Sounds extensions."
              ghLink="https://github.com/mananbansal2002/3-Browser-Extensions"
              demoLink="https://microsoftedge.microsoft.com/addons/search?developer=Manan%20Bansal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagify}
              isBlog={false}
              title="Imagify"
              description="Discover stunning photography from around the world on our platform where photographers of all levels can showcase their work. Our website provides a space where anyone can view and enjoy an array of photos, ranging from landscapes to portraits. With a user-friendly interface, it's easy to navigate and explore the various collections. Join our community of photographers and enthusiasts today and discover the beauty of the world through the lens."
              ghLink="https://github.com/mananbansal2002/imagify"
              demoLink="https://imagify2002.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roadmap}
              isBlog={false}
              title="PlanGenie"
              description="PlanGenie is a platform that allows you to create stunning roadmaps on any topic. With GPT technology, you can easily turn your ideas into a beautiful and informative roadmap. Our user-friendly interface and innovative features make planning and organizing easier and more efficient for individuals and teams. Join PlanGenie today and bring your ideas to life with modern, visually stunning roadmaps."
              ghLink="https://github.com/mananbansal2002/Roadmap-IT"
              demoLink="https://mananbansal2002.github.io/Roadmap-IT/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
