import React from 'react';
import {Button, Container, Image, Row, Col, FormLabel, Card, Form} from 'react-bootstrap';
import {useEffect, useState} from "react";
import DJANGOPIC from "../resources/DJANGO.png";

function Projects(props){

    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/projects/")
            .then(response =>{
                if (!response.ok){
                    throw new Error(`Http error! status ${response.status}`);
                }
                return response.json()
            }).then (json => {
                setProjectData(json)
                console.log(json)
        })
            .catch(error =>{
                console.error('Error', error)
            })
    }, [])

    return (
        <Container style={{display : "flex", flexDirection: "column", backgroundColor: '#303030', height: '100vh', paddingTop: '3rem' }}>
            <Row style={{alignItems : "center", justifyContent : "center"}}>
                 <h1 style={{textAlign : "center", color : "white"}}>Projects Page</h1>
            </Row>
            <div style={{ marginTop: "2rem", backgroundColor: "#303030" }}>
              {projectData && projectData.map((project, index) => (
                <div key={index} style={{ color: "white", display: "inline-block", margin: "10px" }}>
                  <Col xs={5} sm={5} md={5} lg={5}>
                    <Card style={{ width: "25rem", border: "none", outline: "none" }}>
                      <Card.Img variant="top" src={project.image} style={{ height: '150px', width: '100%', objectFit: 'cover' }} />
                      <Card.Body style={{ backgroundColor: '#232222', color: "white" }}>
                        <Card.Title style={{ fontSize: "20px", color: "white" }}>{project.projectName}</Card.Title>
                        <Card.Subtitle style={{ fontSize: "12px", color: "gray" }}>About the project</Card.Subtitle>
                        <Card.Text style={{ fontSize: "15px", color: "white", paddingTop: "10px" }}>
                          {project.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
             ))}
            </div>
        </Container>
    )
}

export default Projects