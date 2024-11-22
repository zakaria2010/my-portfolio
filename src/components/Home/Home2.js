import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
            Passionné par la programmation, j’ai eu la chance de me plonger dans cet univers fascinant et d’y acquérir des compétences solides. 💻
              <br />
              <br />Je maîtrise des langages classiques tels que 
              <i>
                <b className="purple"> Javascript et Java. </b>
              </i>
              <br />
              <br />
              Mes intérêts s’orientent vers la création de  &nbsp;
              <i>
                <b className="purple">nouvelles technologies </b> et <b className="purple"> le développement de produits Web innovants </b>
                 ainsi que les solutions basées sur la{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Dans la mesure du possible, j'applique également ma passion au développement de produits avec 
               <b className="purple"> Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                   la bibliothèque Javascript moderne
                </b> et  
                   <b className="purple"> 
                   {" "}des frameworks 
                   </b>
                
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
            N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zakaria2010"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zakaria-samlali-b8539616b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:samlali.zakaria@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMailBulk />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
