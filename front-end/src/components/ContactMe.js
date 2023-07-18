import React from 'react';
import {Button, Container, Image, Row, Col, FormLabel, Card, Form, FormControl, Fade} from 'react-bootstrap';
import {useState} from "react";
import ProfilePic from "../resources/ProfilePic.png"

function ContactMe (props){

    // first name, last name, return email, isArecruiter, then the text.

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isRecruiter, setIsRecruiter] = useState(false);
    const [text, setText] = useState("");

    const handleRecruiterChange = (e) =>{
      if (e.target.value === "True"){
        setIsRecruiter(true)
      }
      else{
        setIsRecruiter(false)
      }
    }
    const handleSubmit = (e) =>{

    }



    return (
    <Container style={{ display: "flex", flexDirection: "column", backgroundColor: '#303030', height: '100vh', paddingTop: '3rem', marginLeft: "1rem" }}>
      <Row>
        <Col xs={5} md={5} lg={5}>
          <Image src={ProfilePic} style={{ height: "25vw", width: "20vw" }} />
        </Col>
        <Col xs={5} md={5} lg={5} style={{marginLeft : "10rem"}}>
          <h1 style={{color: "white", marginBottom : "1rem" }}>Send me an Email: </h1>
          <Row>
            <Col xs={4} md={4} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label style={{alignSelf: "left", color : "white", marginLeft : "-3rem"}}>First Name</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Enter your first name"
                  style = {{width : "160%"}}
                  onChange={ e => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={4} md={4} lg={4} style={{marginLeft : "5rem"}}>
              <Form.Group className="mb-3">
                <Form.Label style={{alignSelf: "left", color : "white", marginLeft : "-3rem"}}>Last Name</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Enter your last name"
                  style = {{width : "160%"}}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
             <Col xs={7} md={7} lg={7}>
               <Form.Group className="mb-3" >
                  <Form.Label style={{alignSelf: "left", color : "white", marginLeft : "-7rem", marginBottom : "-2rem"}}>Are you a recruiter</Form.Label>
               </Form.Group>
                <label style={{marginLeft: '0rem', color : "white"}}>Yes </label>
                <input type="radio" name="recruiter" value= "True" onChange={handleRecruiterChange} style={{display: 'inline-block', marginLeft : "1rem"}} />
                <label style={{marginLeft: '9rem', color : "white"}}>No </label>
               <input type="radio" name="recruiter" value= "False" onChange={handleRecruiterChange} style={{display: 'inline-block', marginLeft : "1rem"}} />
             </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h1 style={{color: "white", marginBottom : "1rem" }}>Contact Me!</h1>
        </Col>
      </Row>
    </Container>
  );


}

export default ContactMe