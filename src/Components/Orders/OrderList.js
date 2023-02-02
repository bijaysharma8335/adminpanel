import React from "react";
import { Container, Form, Image, Row, Table } from "react-bootstrap";
import { orders } from "../../constants/orders";

const OrderList = ({ toggle }) => {
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Orders List</h3>

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
                                        <Form.Control
                                            type="search"
                                            style={{
                                                width: "80%",
                                            }}
                                        />
                                    </Form.Group>
                                </Form>
                            </Row>
                        </div>
                    </Row>

                    <Table hover className=" mx-1 my-1">
                        <thead className="cursor">
                            <tr>
                                <th>ID</th>
                                <th>Item </th>
                                <th>Customer Name</th>
                                <th>Payment Info</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((elem, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className-="p-5 vertical-align-middle"
                                    >
                                        <td>{elem.id}</td>
                                        <td>
                                            <Image
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                                src={elem.img}
                                                width={30}
                                                height={50}
                                            />
                                            {elem.item}
                                        </td>
                                        <td>{elem.customer}</td>
                                        <td>{elem.payment}</td>
                                        <td>{elem.price}</td>
                                        <td>
                                            <span
                                                className={
                                                    elem.status === "delivered"
                                                        ? " bg-success p-1 text-white rounded fw-bold"
                                                        : "bg-warning p-1  text-white rounded fw-bold"
                                                }
                                            >
                                                {elem.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    );
};

export default OrderList;
