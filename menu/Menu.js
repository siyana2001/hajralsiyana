import React from "react";
import { Container,Nav,Navbar } from "react-bootstrap";

export default function Menu() {
    return (
      <>
        <div className="bodys">

        <Navbar bg="primary" data-bs-theme="light">
          
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
          
              <Nav.Link href="/congrats" style={{marginRight:`10px`}}>congrats</Nav.Link>
              <Nav.Link href="/noti" style={{marginRight:`10px`}}>Notification</Nav.Link>
              <Nav.Link href="/social" style={{marginRight:`10px`}}>Social</Nav.Link>
              <Nav.Link href="/super"  style={{marginRight:`10px`}}>Super</Nav.Link> 
              <Nav.Link href="/login"  style={{marginRight:`10px`}}>Login</Nav.Link> 
              <Nav.Link href="/tech"  style={{marginRight:`10px`}}>Technology</Nav.Link>
             
            
          
        </Navbar>
        </div>
            </>
    
    )};