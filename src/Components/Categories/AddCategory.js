import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";

import CategoryLeftpanel from "./CategoryLeftpanel";

const AddCategory = ({ toggle }) => {
    const color = useSelector(getThemeColor);
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="my-2 d-flex flex-row justify-content-between">
                    <div>
                        <h3>Categories Add</h3>
                    </div>

                    <div>
                        <Button style={{ backgroundColor: color }} >
                            Submit
                        </Button>
                    </div>
                </div>
                <hr />
                <Row>
                    <div className="col-md-4 " style={{ maxHeight: "100vh" }}>
                        <CategoryLeftpanel />
                    </div>
                    <div className="col-md-8 " style={{ maxHeight: "100vh" }}>
                        <Card className="p-2 ">
                            <span className="fw-bold my-2">Basic Information</span>
                            <Row>
                                <div className="col-6 my-2 ">
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="name" type="text" />
                                    </Form.Group>
                                </div>
                                <div className="col-6 my-2 ">
                                    <Form.Group>
                                        <Form.Label>Page Title</Form.Label>
                                        <Form.Control type="text" name="pageTitle" />
                                    </Form.Group>
                                </div>
                            </Row>
                            <div>
                                <span className="fw-bold ">Product Description</span>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Add your Description here"
                                    name="description"
                                    className="my-2"
                                />
                            </div>
                        </Card>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default AddCategory;
