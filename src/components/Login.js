import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux'
import { fakeAuth } from './fakeAuth'
import { logout } from '../actions/authedUser' 
import { setAuthedUser } from '../actions/authedUser'
import { Redirect, withRouter } from 'react-router-dom'

// import './App.css';

class Login extends Component {
    state = {
        redirectToReferrer: false
    }

    componentDidMount() {
        this.props.dispatch(logout())
        fakeAuth.signout()
    }

    handleLogin = (value) => {
        this.props.dispatch(setAuthedUser(value.value))
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
        
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
        return (
            <div className="Login  vertical-center">
                <div className="p-4 shadow  container col-4">
                    <h1 className="text-center fs-8 mb-4"><Badge className="newvision-color">NewVision</Badge></h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={this.handleLogin} variant="primary" type="submit">
                            Login
                    </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    };
}

export default withRouter(connect(mapStateToProps)(Login))
