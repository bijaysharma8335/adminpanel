import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { categories, couponStatus, typeArray } from "../../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";
import { getNewCoupon, setCoupon, setNewCoupon } from "../../Redux/slice/couponSlice";
import { useNavigate } from "react-router-dom";

const AddCoupon = ({ toggle }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const color = useSelector(getThemeColor);
    const coupon = useSelector(getNewCoupon);

    const onChangeHandler = (e) => {
        dispatch(setNewCoupon({ ...coupon, [e.target.name]: e.target.value }));
    };

    const dateHandler = (e) => {
        let splitArray = e.target.value.split("-");
        dispatch(
            setNewCoupon({
                ...coupon,
                [e.target.name]: `${splitArray[2]}/${splitArray[1]}/${splitArray[0]}`,
            })
        );
    };

    const addProductHandler = () => {
        dispatch(setNewCoupon(coupon));
    };
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Coupons Add</h3>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Card className="p-3 d-flex my-2">
                            <span className="fw-bold">Coupon status</span>
                            <Form.Group onChange={(e) => onChangeHandler(e, "status")}>
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
                                <Form.Control
                                    type="date"
                                    name="startDate"
                                    className="my-2"
                                    onChange={dateHandler}
                                />
                            </div>
                            <div>
                                <span className="fw-bold">End Date</span>
                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    className="my-2"
                                    onChange={dateHandler}
                                />
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-8">
                        <Card className="p-1">
                            <Card.Body>
                                <h3>Coupon Information</h3>
                                <Form>
                                    <Row>
                                        <div className="col-6 my-2">
                                            <div>
                                                <span className="fw-bold">Coupon Code</span>
                                                <Form.Control
                                                    type="text"
                                                    value={coupon.code}
                                                    name="code"
                                                    onChange={onChangeHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6 my-2">
                                            <div>
                                                <span className="fw-bold">Discounts Products</span>
                                                <Form.Select
                                                    name="discountProduct"
                                                    aria-label="Default select example"
                                                    onChange={onChangeHandler}
                                                >
                                                    <option>Open this Select Category </option>
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
                                        <span className="fw-bold my-2">Coupon Types</span>
                                        <Form.Group onChange={(e) => onChangeHandler(e, "type")}>
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
                                            value={coupon.discount}
                                            type="text"
                                            name="discount"
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                    <Button
                                        className="my-2 text-white"
                                        style={{ backgroundColor: color }}
                                        onClick={() => {
                                            addProductHandler();
                                            navigate("/coupon/list");
                                        }}
                                    >
                                        Submit
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

export default AddCoupon;
