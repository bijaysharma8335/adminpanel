import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Redux/slice/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const handleSubmit = () => {
        if (!email || !password) {
            setMessage("Please fill out the fields");
        } else {
            dispatch(setUser({ email, password }));
            navigate("/landingPage");
        }
    };
    return (
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Card className="m-5 card-content pt-0">
                        <Card.Header className="login-header pb-0">
                            <Card.Title>
                                <h2 className="text-center text-dark">
                                    {" "}
                                    Admin Login
                                </h2>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="pt-0">
                            <p className="text-danger">{message}</p>
                            <Form
                                autoComplete="off"
                                className="p-2"
                                onSubmit={handleSubmit}
                            >
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter your E-mail"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <div className="pass-wrapper ">
                                        <div
                                            className="position-absolute mt-1 cursor "
                                            style={{
                                                right: "2rem",
                                            }}
                                            onClick={togglePasswordVisiblity}
                                        >
                                            {password !== "" ? (
                                                passwordShown ? (
                                                    <AiFillEye size="1.5em" />
                                                ) : (
                                                    <AiFillEyeInvisible size="1.5em" />
                                                )
                                            ) : null}
                                        </div>
                                        <Form.Control
                                            type={
                                                passwordShown
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                </Form.Group>

                                <Col sm={12}>
                                    <Button
                                        variant="secondary"
                                        className="mt-2 btn btn-lg py-1 w-100 login-button"
                                        type="submit"
                                    >
                                        Sign in
                                    </Button>
                                </Col>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default Login;
