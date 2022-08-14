import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumen Rakshit </span>
            from <span className="purple"> Bankura, India.</span>
            <br />I am a Softwere Developer .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗱𝗲𝘀𝘁𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝘀𝘂𝗰𝗰𝗲𝘀𝘀 𝗶𝘀 𝗮 𝗷𝗼𝘂𝗿𝗻𝗲𝘆❤️🥀"{" "}
          </p>
          <footer className="blockquote-footer">Soumen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
