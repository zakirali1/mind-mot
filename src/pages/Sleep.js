import React from "react";
import MiniHero from "../components/MiniHero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg";
import SleepPillarCard from "../components/PillarCard/Sleep.js";
import sleepingperson from "../assets/sleepingperson.jpg";

function Sleep() {
  return (
    <div className="mainContainer">
      <MiniHero backgroundImage={heroBackground}>
      <div className="PillarCardHeader">
<SleepPillarCard />
</div>
      </MiniHero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <br></br>
            <h1 className="pageTitle">Your Sleep Advice</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
          <div className="mainBodyText">
          <ol className="animate__animated animate__fadeIn animate__delay-1s">
    <li>Stick to a regular sleep schedule: Going to bed and waking up at the same time every day, including weekends, helps regulate your body's internal clock and improve sleep quality.</li>
    <br></br>
    <li>Create a relaxing sleep environment: Keep your bedroom cool, dark, and quiet. Use comfortable bedding and consider using blackout curtains, earplugs, or a white noise machine if necessary.</li>
    <br></br>
    <li>Limit exposure to screens before bedtime: The blue light emitted by screens can disrupt your body's natural sleep-wake cycle. Avoid using electronic devices at least one hour before bedtime, or use blue light-blocking glasses.</li>
    <br></br>
    <li>Avoid stimulating substances: Nicotine, caffeine, and alcohol can all interfere with sleep quality. Limit or avoid their use, especially before bedtime.</li>
    <br></br>
    <li>Exercise regularly: Regular physical activity can help improve sleep quality and duration. However, avoid exercising too close to bedtime, as it can have a stimulating effect on your body.</li>
    <br></br>
    <li>Practice relaxation techniques: Deep breathing, progressive muscle relaxation, or mindfulness meditation can help you relax and prepare for sleep.</li>
</ol>
            </div>
          </Col>
          <Col size="md-4">
          <div className="mainBodyText">
          <div className="animate__animated animate__fadeIn animate__delay-1s">
          <img src={sleepingperson} alt="Sleeping person" className="sleepingpersonimage" />
</div>
            </div>
          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default Sleep;
