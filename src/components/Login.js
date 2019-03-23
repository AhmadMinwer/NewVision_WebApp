import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


// import './App.css';

class Login extends Component {
    render() {
        return (
            <div className="Login row vertical-center">
                <div className="container col-4">
                    <h1 className="text-center fs-8 mb-4"><Badge variant="secondary">NewVision</Badge></h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                    </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
