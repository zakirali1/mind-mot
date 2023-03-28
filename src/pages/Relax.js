import React from "react";
import MiniHero from "../components/MiniHero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg";
import Card from "react-bootstrap/Card";
import "./relax.css";

function Relax() {
  const inputs = JSON.parse(localStorage.getItem("gratitude"));
  console.log(inputs.length);

  const Momento = inputs.map((input) => (
    <>
      <Card className="journalCards">
        <Card.Body>
          <Card.Title>{input.input1}</Card.Title>
        </Card.Body>
      </Card>
      <Card className="journalCards">
        <Card.Body>
          <Card.Title>{input.input2}</Card.Title>
        </Card.Body>
      </Card>
      <Card className="journalCards">
        <Card.Body>
          <Card.Title>{input.input3}</Card.Title>
        </Card.Body>
      </Card>
    </>
  ));

  return (
    <>
      <div className="mainContainer">
        <MiniHero backgroundImage={heroBackground}>
          <h1>Relax</h1>
        </MiniHero>
        <Container style={{ marginTop: 30 }}></Container>
      </div>
      {Momento}
    </>
  );
}

export default Relax;
