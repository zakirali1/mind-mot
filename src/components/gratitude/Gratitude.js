import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function Gratitude() {

    const [inputs, setInputs] = useState([])

    let localS = localStorage.getItem("gratitude" ) || [];
    
    function handleInputChange(event) {
      const { name, value } = event.target;
      setInputs(inputs => ({...inputs, [name]: value}))
      
      console.log(inputs)
    }

function handleClick(e) {
    console.log(e)
    localS = localStorage.setItem("gratitude",JSON.stringify([inputs]))

  
}
  return (
    <>
    <Form onClick={handleClick}>
      <Row>
        <Col>
          <Form.Control type="text" name="input1" placeholder="what are you grateful for?" onChange={handleInputChange}/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control type="text" name="input2" placeholder="what are you grateful for?" onChange={handleInputChange}/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control type="text" name="input3" placeholder="what are you grateful for?" onChange={handleInputChange}/>
        </Col>
      </Row>
      <Button onClick={handleClick}>Save</Button>
      
      </Form>
    </>
  )
}

export default Gratitude