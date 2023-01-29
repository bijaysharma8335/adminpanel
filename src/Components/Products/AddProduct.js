import React from "react";
import { Container, Row, Button, Form, Card, Badge } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import AddProductLeftPanel from "./AddProductLeftPanel";

const AddProduct = ({ toggle }) => {
    const navigate = useNavigate();

   

    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="my-2 d-flex flex-row justify-content-between">
                    <div>
                        <h3>Products Add</h3>
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                navigate("/product/list");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
                <hr />
                <Row>
                    <div className="col-md-4 ">
                        <AddProductLeftPanel />
                    </div>
                    <div className="col-md-8 ">
                        <Card className="p-2">
                            <span className="fw-bold my-2">
                                Basic Information
                            </span>
                            <Row>
                                <div className="col-6 my-2 ">
                                    <Form.Group>
                                        <span className="fw-bold ">Name</span>
                                        <Form.Control type="text" name="name" />
                                    </Form.Group>
                                </div>
                                <div className="col-6 my-2 ">
                                    <Form.Group>
                                        <span className="fw-bold ">
                                            Page Title
                                        </span>
                                        <Form.Control
                                            type="text"
                                            name="pageTitle"
                                        />
                                    </Form.Group>
                                </div>
                            </Row>
                            <Row>
                                <div className="col-6 my-2 ">
                                    <Form.Group>
                                        <span className="fw-bold ">
                                            Offers Ends
                                        </span>
                                        <Form.Control
                                            required={true}
                                            type="time"
                                            name="priceends"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-6 my-2 ">
                                    <Form.Group>
                                        <span className="fw-bold ">Rating</span>
                                        <Form.Control
                                            required={true}
                                            type="text"
                                            name="ratings"
                                        />
                                    </Form.Group>
                                </div>
                            </Row>
                            <Row className="align-items-center">
                                <div className="col-4 my-2 ">
                                    <Form.Group>
                                        <span className="fw-bold ">
                                            Reference
                                        </span>
                                        <Form.Control
                                            required={true}
                                            type="text"
                                            name="Reference"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-4 my-2 ">
                                    <Form.Group>
                                        <span className="fw-bold ">
                                            Payment
                                        </span>
                                        <Form.Control
                                            required={true}
                                            type="text"
                                            name="payment"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-4 my-2 ">
                                    <span className="fw-bold "> Offer </span>
                                    <Form.Select
                                        required={true}
                                        aria-label="Default select example"
                                        name="offer"
                                    >
                                        <option value="">
                                            Select Your Offer
                                        </option>
                                        <option value="Bank Offer">
                                            Bank Offer
                                        </option>
                                    </Form.Select>
                                </div>
                            </Row>

                            <div>
                                <span className="fw-bold ">
                                    Product Description
                                </span>
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    placeholder="Add your Description here"
                                    className="my-2"
                                />
                            </div>
                        </Card>

                        <div className="container">
                            <div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <Badge className="fw-bold d-inline-block mt-4 fs-5">
                                            Upload Files
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                            {/* Product_Image Upload Starts */}
                            <div className="row align-items-center justify-content-start">
                                <div className="col">
                                    <span className="fw-bold my-2  d-inline-block  me-5">
                                        Image Upload
                                    </span>
                                </div>
                                <div className="col">
                                    <Form.Control
                                        className="d-none"
                                        id="myProductImage"
                                        type="file"
                                        max="4"
                                        multiple
                                        accept=".png,.jpg"
                                    />
                                    <label
                                        htmlFor="myProductImage"
                                        className="me-2"
                                    >
                                        Click to upload image &nbsp;
                                        <FaUpload />
                                    </label>
                                    <div className="flex-column justify-content-center align-items-center"></div>
                                </div>
                                <div className="d-flex flex-row flex-wrap"></div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default AddProduct;
