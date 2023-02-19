import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

import { categories, couponStatus, typeArray } from "../../constants/constant";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";

const EditCoupon = ({ toggle, setToggle }) => {
    const color = useSelector(getThemeColor);
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Coupons Edit</h3>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Card className="p-2 d-flex">
                            <span className="fw-bold">Coupon status</span>
                            <Form.Group>
                                <div className="d-flex flex-row mt-4">
                                    {couponStatus.map((elem, index) => (
                                        <Form.Check
                                            key={index}
                                            type="radio"
                                            value={elem}
                                            className="ms-1 me-2"
                                            label={elem}
                                            name="status"
                                        />
                                    ))}
                                </div>
                            </Form.Group>
                        </Card>
                        <Card className="my-2 p-2">
                            <span className="fw-bold">Date Schedule</span>
                            <div>
                                <span className="fw-bold">Start Date</span>
                                <Form.Control type="date" name="startDate" className="my-2" />
                            </div>
                            <div>
                                <span className="fw-bold">End Date</span>
                                <Form.Control type="date" name="endDate" className="my-2" />
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-8">
                        <Card className="p-2">
                            <Card.Body>
                                <h3>Coupon Information</h3>
                                <Form>
                                    <Row>
                                        <div className="col-6 my-2">
                                            <div>
                                                <span className="fw-bold">Coupon Code</span>
                                                <Form.Control type="text" name="code" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div>
                                                <span className="fw-bold">Discounts Products </span>
                                                <Form.Select
                                                    name="discountProduct"
                                                    aria-label="Default select example"
                                                >
                                                    <option>Open this Select Category</option>
                                                    {categories.map((elem, index) => {
                                                        return (
                                                            <option
                                                                name="discountProduct"
                                                                key={index}
                                                                value={elem}
                                                            >
                                                                {elem}
                                                            </option>
                                                        );
                                                    })}
                                                </Form.Select>
                                            </div>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className=" my-2">
                                            <div>
                                                <span className="fw-bold">Coupon Limits</span>
                                                <Form.Control
                                                    name="couponLimit"
                                                    type="number"
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                    </Row>
                                    <Card className="p-3 d-flex my-2">
                                        <span className="fw-bold my-2"> Coupon Types </span>
                                        <Form.Group>
                                            <div className="d-flex flex-row mt-2">
                                                {typeArray.map((elem, index) => {
                                                    return (
                                                        <Form.Check
                                                            key={index}
                                                            type="radio"
                                                            value={elem}
                                                            className="ms-1 me-2"
                                                            label={elem}
                                                            name="type"
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </Form.Group>
                                    </Card>
                                    <div className="my-2">
                                        <span className="fw-bold">Discount Value</span>
                                        <Form.Control
                                            className="mt-2"
                                            type="text"
                                            name="discount"
                                        />
                                    </div>
                                    <Button className="my-2" style={{ backgroundColor: color }}>
                                        Update
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default EditCoupon;
