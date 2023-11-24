import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // To get user data
    // 'userInfo' comes from 'authSlice.js'
    // 'auth' from '(state) => state.auth' also comes from 'authSlice.js'
    const { userInfo } = useSelector((state) => state.auth);

    // const [justNameOfFunctionToCall, {isLoading}] = useLoginMutation();
    // {isLoading} is there by default
    const [register, { isLoading }] = useRegisterMutation();

    // If user is logged in
    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords are not match");
        } else {
            try {
                // calling 'register'
                // 'unwrap()' will return 'promise'
                const res = await register({ name, email, password }).unwrap();
                // setting user to 'state' and 'local storage'
                dispatch(setCredentials({ ...res }));
                // navigate to home screen
                navigate("/");
            } catch (error) {
                // console.error(error?.data?.message || error.error);
                toast.error(error?.data?.message || error.error);
            }
        }
    };
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit={submitHandler}>
                {/* Name */}
                <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                {/* Email */}
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                {/* Password */}
                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                {/* Confirm Password */}
                <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                {isLoading && <Loader />}

                <Button className="mt-3" type="submit" variant="primary">
                    Sign Up
                </Button>
                <Row className="py-3">
                    <Col>
                        Already have an account ?{" "}
                        <Link to="/register">Login</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    );
};

export default RegisterScreen;
