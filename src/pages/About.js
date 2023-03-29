import React from "react";
import MiniHero from "../components/MiniHero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg";
import MindMOT from "../assets/black.png";

function About() {
  return (
    <div className="mainContainer">
      <MiniHero backgroundImage={heroBackground}>
      <h1 className="pillarTitleName">We are MindMOT</h1>
      </MiniHero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <br></br>
            <h1 className="pageTitle">Your daily check-in and wellbeing companion</h1>
          </Col>
        </Row>
<Row>       
<Col size="md-12">           
<div className="mainBodyText mindMOTcontainer">
<img src={MindMOT} alt="Sleeping person" className="MindMOT" />
</div> 
</Col>      
</Row>


<Row>
          <Col size="md-12">
  
<div className="mainBodyText">
          


            <p>
            MindMOT is a comprehensive wellbeing app designed to help you track and monitor your daily wellbeing. The app is based on the four pillars of wellbeing as defined by Dr. Rangan Chaterjee, a leading expert in the field. The four pillars - Relax, Eat, Sleep, Move - are crucial to maintaining a healthy lifestyle and are interdependent, meaning that improvements in one area can positively impact the others. MindMOT uses intuitive gauges to help you visualize and track your progress in each of these areas. By regularly monitoring your wellbeing, you can identify areas for improvement and make positive changes to your daily routine. MindMOT is the perfect companion for anyone looking to prioritize their wellbeing and make positive, lasting changes to their life.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
