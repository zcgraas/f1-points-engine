import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

export default class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">F1 Points Engine</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#how">How It Works</Nav.Link>
                    <Nav.Link href="#data">Data</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}