import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("submit");
    };
    return (
        <FormContainer>
            <h1>Sign</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="password">
                    <Form.Label>password Address</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button className="mt-3" type="submit" variant="primary">
                    Sign In
                </Button>
                <Row className="py-3">
                    <Col>
                        Need Account ? <Link to="/register">Register</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    );
};

export default LoginScreen;
