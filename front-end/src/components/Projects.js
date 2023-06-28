import React from 'react';
import {Button, Container, Image, Row, Col, FormLabel, Card, Form} from 'react-bootstrap';
import {useEffect, useState} from "react";

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
        <Container style={{backgroundColor: '#303030', height: '100vh', paddingTop: '3rem', marginLeft :"1rem" }}>
            <Row>
                 <h1 style={{color : "white"}}>Projects Page</h1>
            </Row>
            <Row>
                {projectData && projectData.map((project, index) => (
                <div key={index} style={{color : "white"}}>
                    <Row>
                        <Col xs = {4} sm = {4} md = {4} lg = {4}>
                            <Image src={project.image} style={{ height : '200px', width: '200px'}} ></Image>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4}>
                             <h4>{project.projectName}</h4>
                             <p>{project.description}</p>
                        </Col>
                    </Row>
                </div>
            ))}
            </Row>
        </Container>
    )
}

export default Projects