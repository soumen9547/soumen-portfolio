import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dosen from "../../Assets/Projects/dosen.PNG";
import Jacs from "../../Assets/Projects/jacs.PNG";
import BanglaStory from "../../Assets/Projects/banglagolpo.PNG";

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
              imgPath={dosen}
              isBlog={false}
              title="Dosen"
              description="Dosen is a skill-enhancing platform where people can find the best advisors according to their needs and talk to them to get advice and learn more. A startup can also connect to more people to grow their business, & also the partners who can provide them best mentors for further enhancements."
              demoLink="https://dosen.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jacs}
              isBlog={false}
              title="JACS"
              description="The course selector is a productivity tool, for students, parents and guardians seeking information on the admission criteria into any higher institution in Nigeria as enumerated by JACS.
              The course selector allows for detailed search of the JACS brochure and gives detailed information based on the users search parameters."
              demoLink="https://jacs.ng/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BanglaStory}
              isBlog={false}
              title="Bengali Story"
              description="
              এখানে ব্যবহারকারীরা তাদের নিজস্ব গল্প লিখতে এবং গল্প প্রকাশ করতে পারেন যদি অ্যাডমিন গল্পটি অনুমোদিত হয়।"
              demoLink="https://onlinebanglagolpo.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
