import React from "react";
import MiniHero from "../components/MiniHero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg";
import YoutubeEmbed from "../components/YoutubeEmbed";
import MovePillarCard from "../components/PillarCard/Move.js";

function Move() {
  return (
    <div className="mainContainer">
      <MiniHero backgroundImage={heroBackground}>
      <div className="PillarCardHeader">
<MovePillarCard />
</div>
      </MiniHero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          {/* <MovePillarCard /> */}
          <div className="mainBodyText">
          <h1>Your Daily Yoga:</h1>
      <YoutubeEmbed embedId="dlkG7LQJjY0" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Move;