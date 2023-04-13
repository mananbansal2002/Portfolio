import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manan Bansal </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I am a Pre-Final year student pursuing Btech from <span className="purple">Galgotias College of Engineering and Technology</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Poetry Writing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hop on Technologies to do the innovative{" "}
          </p>
          <footer className="blockquote-footer">Manan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
