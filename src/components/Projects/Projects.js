import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snack from "../../Assets/Projects/snack.png";
import noteApp from "../../Assets/Projects/noteApp.png";
import quizApp from "../../Assets/Projects/quizApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mes travaux <strong className="purple"> récents </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snack}
              isBlog={false}
              title="snack"
              description="Jeux de serpent, On peut jouer en mode 2 joueurs : chaque joueur à un serpent qu'il contrôle. Si un des serpents rencontre l'autre, le joueur correspondant perd créé par JavaScript et HTML/CSS."
              ghLink="https://github.com/zakaria2010/Snake"
              // demoLink="https:// /"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteApp}
              isBlog={false}
              title="Notes App"
              description="Note App est une application web simple et rapide pour gérer vos notes. Elle permet d'ajouter, modifier et supprimer des notes via une interface intuitive et réactive, conçue avec HTML, CSS, et JavaScript.."
              ghLink="https://github.com/zakaria2010/Notes-App"
              // demoLink="https:// /"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizApp}
              isBlog={false}
              title="Quiz App"
              description="Quiz App est une application web interactive permettant de tester vos connaissances avec des questions à choix multiple. Développée avec HTML5, CSS3, et JavaScript, elle calcule votre score et vous permet de rejouer pour vous améliorer."
              ghLink="https://github.com/zakaria2010/Quiz-App"
              //demoLink="https:// /"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
