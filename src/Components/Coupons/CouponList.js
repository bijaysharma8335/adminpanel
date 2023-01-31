import React from "react";
import { Container, Row, Form, Table, Button } from "react-bootstrap";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md";
import { Coupons } from "../../constants/Coupons";
import { useNavigate } from "react-router-dom";

const CouponList = ({ toggle }) => {
    const navigate = useNavigate();
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="my-2 d-flex flex-row justify-content-between">
                    <div>
                        <h3>Coupons List</h3>
                    </div>
                    <div>
                        <Button onClick={() => navigate("/coupon/add")}>
                            <MdAddCircle className="text-white me-1" />
                            AddCoupon
                        </Button>
                    </div>
                </div>
                <div className="p-2 border">
                    <Row>
                        <div className="col-4 flex-column my-2">
                            <span className="d-flex  ">
                                <label className="my-2">Show</label>
                                <Form.Select
                                    aria-label="Default select example "
                                    className="w-25 mx-2"
                                >
                                    <option value="1">10</option>
                                    <option value="2">25</option>
                                    <option value="3">50</option>
                                    <option value="4">100</option>
                                </Form.Select>
                                <label className="my-2">entries</label>
                            </span>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-3 p-2">
                            <Row>
                                <Form>
                                    <Form.Group className="d-flex flew-column my-2 ">
                                        <Form.Label className="me-1 my-2">
                                            Search:
                                        </Form.Label>
                                        <Form.Control type="search" />
                                    </Form.Group>
                                </Form>
                            </Row>
                        </div>
                    </Row>
                    <Row>
                        <Table responsive hover className="my-1">
                            <thead className="cursor">
                                <tr>
                                    <th>S.N.</th>
                                    <th>Coupon Code</th>
                                    <th>Type</th>
                                    <th>Discount</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Coupon Limit</th>
                                    <th>Status</th>
                                    <th>Discount Country</th>
                                    <th>Discount Products</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Coupons.map((elem, index) => (
                                    <tr key={index} className="p-5">
                                        <td>{index + 1}</td>
                                        <td>{elem?.code}</td>
                                        <td>{elem?.type}</td>
                                        <td>{elem?.discount}</td>
                                        <td>{elem?.startDate}</td>
                                        <td>{elem?.endDate}</td>
                                        <td>{elem?.couponLimit}</td>
                                        <td>
                                            <span
                                                className={
                                                    elem?.status === "Active"
                                                        ? " bg-success p-1 text-white rounded fw-bold mx-1"
                                                        : elem?.status ===
                                                          "In Active"
                                                        ? "bg-danger p-1 text-white rounded fw-bold mx-1"
                                                        : "bg-warning p-1  text-white rounded fw-bold mx-1"
                                                }
                                            >
                                                {elem?.status}
                                            </span>
                                        </td>
                                        <td>{elem?.discountCountry}</td>
                                        <td>{elem?.discountProduct}</td>
                                        <td>
                                            <FaEdit className="text-success mx-1" />
                                            <RiDeleteBin5Line className="text-danger mx-1" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default CouponList;
