import React from "react";
import { Card, Form } from "react-bootstrap";


import { Status, categories } from "../../constants/constant";
const CategoryLeftpanel = () => {
    return (
        <>
            <Card className="p-3 d-flex my-2">
                <span className="fw-bold">Visibility Status</span>
                <Form.Group style={{ fontSize: "14px", margin: "unset" }}>
                    <div className="d-flex flex-row mt-4">
                        {Status.map((state, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                className="ms-1 me-2"
                                value={state}
                                name="status"
                                label={state}
                            />
                        ))}
                    </div>
                </Form.Group>
            </Card>
            <Card className="my-2 p-2">
                <span className="fw-bold my-2">Publish Schedule</span>
                <Form.Group>
                    <Form.Label>Publish Date</Form.Label>
                    <Form.Control type="date" name="pubDate" className="my-2" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Publish Time</Form.Label>
                    <Form.Control type="time" name="pubTime" className="my-2" />
                </Form.Group>
            </Card>

            <Card className=" d-flex my-2 ">
                <span className="fw-bold my-2 mx-1">Categories</span>
                <Form.Group style={{ fontSize: "14px", margin: "unset" }}>
                    <div
                        className="d-flex flex-column mt-2"
                        style={{ maxHeight: "100px", overflowY: "scroll" }}
                    >
                        {categories.map((category, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                name="category"
                                className="ms-1"
                                value={category}
                                label={category}
                            />
                        ))}
                    </div>
                </Form.Group>
            </Card>
        </>
    );
};

export default CategoryLeftpanel;
