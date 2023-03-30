import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

function Gratitude() {
  const [inputs, setInputs] = useState([]);

  

    let localS = localStorage.getItem("gratitude" ) || [];
  
    localS = localStorage.setItem("gratitude", JSON.stringify(["inner peace"]))
    
    function handleInputChange(event) {
      const { name, value } = event.target;
      setInputs(inputs => ({...inputs, [name]: value}))
      
      console.log(localS)
    }

  function handleClick(e) {
    console.log(e);
    localS = localStorage.setItem("gratitude", JSON.stringify([inputs]));
  }
  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        Take your time to reflect. What are you grateful for today? Add your
        thoughts below
      </h3>

      <Form
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
          marginBottom: "1em",
        }}
        onClick={handleClick}
      >
        <Row className="journal-page">
          <Col>
            <Form.Control
              as="textarea"
              rows={3}
              name="input1"
              placeholder="what are you grateful for?"
              onChange={handleInputChange}
              className="entry"
            />
          </Col>
        </Row>
        <br />
        <Row className="journal-page">
          <Col>
            <Form.Control
              as="textarea"
              rows={3}
              name="input2"
              placeholder="what are you grateful for?"
              onChange={handleInputChange}
              className="entry"
            />
          </Col>
        </Row>
        <br />
        <Row className="journal-page">
          <Col>
            <Form.Control
              className="entry"
              as="textarea"
              rows={3}
              name="input3"
              placeholder="what are you grateful for?"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      </Form>

      <Button
        style={{
          display: "block",
          margin: "auto",
          backgroundColor: "grey",
          border: "grey",
        }}
        onClick={handleClick}
      >
        Save
      </Button>
    </>
  );
}

export default Gratitude;
