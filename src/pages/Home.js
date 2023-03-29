import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg"
import PillarCard from "../components/PillarCard/PillarCard";
import 'animate.css';
import Zenapi from "../components/Zenapi/Zenapi";
import Gratitude from "../components/gratitude/Gratitude";


function Home() {
  return (
    <div className="mainContainer">
      <Hero backgroundImage={heroBackground}>
      <Zenapi/>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="d-flex justify-content-center pageTitle">Your Daily Dashboard</h1>
          </Col>
        </Row>


        {/* 4 PILLAR CARD */}

        <Row>
         <PillarCard/>
        </Row>
      </Container>
      <Container style={{ marginTop: 30 }}>
      
        <Gratitude />
      </Container>
    </div>
  );
}

export default Home;
