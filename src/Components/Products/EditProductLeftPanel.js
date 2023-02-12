import React from "react";
import { Card, Form } from "react-bootstrap";

import { categories, sizes } from "./../../constants/constant";

const EditProductLeftPanel = ({ product, editProduct, setEditProduct }) => {
    return (
        <>
            <Card className="p-2">
                <span className="fw-bold my-2">Pricing Info</span>
                <div>
                    <span className="fw-bold my-2">Product Price Old</span>
                    <Form.Control type="number" name="productPriceOld" className="my-2" />
                </div>
                <div>
                    <span className="fw-bold my-2">Product Price New</span>
                    <Form.Control
                        required={true}
                        type="number"
                        name="productPriceNew"
                        className="my-2"
                    />
                </div>
                <div>
                    <span className="fw-bold my-2">Coupon</span>
                    <Form.Control type="text" name="coupon" className="my-2" />
                </div>
            </Card>
            <Card className="p-3 d-flex my-2">
                <span className="fw-bold">Visibility Status</span>
                <Form.Group style={{ fontSize: "14px", margin: "unset" }}>
                    <div className="d-flex flex-row mt-4">
                        <Form.Check
                            type="radio"
                            value="published"
                            className="ms-1 me-2"
                            label={`Published`}
                            name="status"
                        />
                        <Form.Check
                            type="radio"
                            value="scheduled"
                            className="ms-1 me-2"
                            label={`Scheduled`}
                            name="status"
                        />
                        <Form.Check
                            type="radio"
                            value="hidden"
                            className="ms-1 me-2"
                            label={`Hidden`}
                            name="status"
                        />
                    </div>
                </Form.Group>
            </Card>
            <Card className="my-2 p-2">
                <span className="fw-bold my-2">Size</span>
                <Form.Group className="mb-3">
                    {sizes.map((value, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            name="sizes"
                            value={value}
                            label={value}
                        />
                    ))}
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
            <Card className="my-2 p-2">
                <span className="fw-bold my-2">Tags</span>
                <Form.Control type="text" name="tag" className="my-3" />
            </Card>
            <Card className=" d-flex my-2 ">
                <span className="fw-bold my-2 mx-1">Categories</span>

                <Form.Group style={{ fontSize: "14px", margin: "unset" }}>
                    <div
                        className="d-flex flex-column mt-2"
                        style={{ maxHeight: "100px", overflowY: "scroll" }}
                    >
                        {categories.map((elem, index) => {
                            return (
                                <Form.Check
                                    key={index}
                                    type="radio"
                                    value={elem}
                                    className="ms-1"
                                    label={elem}
                                    checked={elem}
                                    name="category"
                                />
                            );
                        })}
                    </div>
                </Form.Group>
            </Card>
            <Card className="my-2 p-2">
                <span className="fw-bold my-3">Inventory Info</span>
                <span className="fw-bold my-1">Total Stock Quantity</span>
                <Form.Control type="text" name="totalStockQty" className="my-2" />
            </Card>
        </>
    );
};

export default EditProductLeftPanel;
