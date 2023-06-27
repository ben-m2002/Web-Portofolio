import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';

function MainBar (props){

    let nav = useNavigate();

    return (
        <Navbar bg = "dark">
            <Container>
                <Navbar.Brand style = {{color : 'white'}}> My Portfolio </Navbar.Brand>
                <Nav className="me-auto" style={{paddingLeft: '1rem'}}>
                    <Button class = "btn" style={{marginLeft: '0px', backgroundColor : '#484848', boxShadow : "none", outline : "none", color : "white"}} onClick = {() => nav("/",{replace : true})}>Home</Button>
                     <Button class = "btn" style={{marginLeft: '30px',  backgroundColor : '#484848', boxShadow : "none", outline : "none", color : "white"}} onClick={() => nav("/projects",{replace : false})}>Projects</Button>
                    <Button class = "btn" style={{marginLeft: '30px',  backgroundColor : '#484848', boxShadow : "none", outline : "none", color : "white"}} onClick={() => nav("/contact")}>Contact Me</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainBar;

