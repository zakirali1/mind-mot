import React from "react";
import MiniHero from "../components/MiniHero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg";
import Card from "react-bootstrap/Card";
import "./relax.css";
import "animate.css";
import YoutubeEmbed from "../components/YoutubeEmbed";
import RelaxPillarCard from "../components/PillarCard/Relax.js";

function Relax() {
  const inputs = JSON.parse(localStorage.getItem("gratitude"));
  console.log(inputs.length);

  const Momento = inputs.map((input) => (
    <>
      <Card className="journalCards journalCard1 animate__animated animate__fadeInRight animate__delay-1s">
          <Card.Title className="gratefulCardTitle">Firstly:</Card.Title>
          <Card.Body className="gratefulCardBody">
                 {input.input1}
        </Card.Body>
      </Card>
      <Card className="journalCards journalCard2 animate__animated animate__fadeInRight animate__delay-2s">
          <Card.Title className="gratefulCardTitle">Secondly:</Card.Title>
          <Card.Body className="gratefulCardBody">
        {input.input2}
        </Card.Body>
      </Card>
      <Card className="journalCards journalCard3 animate__animated animate__fadeInRight animate__delay-3s">
          <Card.Title className="gratefulCardTitle">Thirdly:</Card.Title>
        <Card.Body className="gratefulCardBody">
        {input.input3}
        </Card.Body>
      </Card>
    </>
    
  ));

  return (

    <>

      {/* <div className="mainContainer"> */}
      <div className="mainContainer">
      <MiniHero backgroundImage={heroBackground}>
      <div className="PillarCardHeader">
<RelaxPillarCard />
</div>
      </MiniHero>
              <Container style={{ marginTop: 30 }}>        

      {/* </div> */}
      <Col size="md-12">
          <br></br>
            <h1 className="pageTitle">Your 3 Gratitudes for Today:</h1>
          </Col>
      {Momento}
      <Container style={{ marginTop: 30 }}>
    <Row>
          <Col size="md-12">
          <br></br>
            <h1 className="pageTitle">Your Daily 10 Minutes of Mindfulness:</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <div className="mainBodyText">
          <YoutubeEmbed embedId="lVx3mFxML80" />
            </div>
          </Col>
        </Row>
        </Container>      
        </Container>
    </div>
    </>

  );
}

export default Relax;
