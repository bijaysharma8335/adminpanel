import React from "react";
import { Container, Form, Row, Table } from "react-bootstrap";
import { purchase } from "../../constants/stocks";

const Purchase = ({ toggle }) => {
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Purchase Items</h3>
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
                                            className="ps-2 pt-0 pb-0 pe-0"
                                            style={{ width: "80%" }}
                                        />
                                    </Form.Group>
                                </Form>
                            </Row>
                        </div>
                    </Row>

                    <Table hover className="  my-2 ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ITEMS</th>
                                <th>ORDER BY</th>
                                <th>DATE</th>
                                <th>SUPPLIER</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>BALANCE</th>
                                <th>CREDIT</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchase.map((elem, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className-="p-5 vertical-align-middle"
                                    >
                                        <td className="fw-bold">{elem.id}</td>
                                        <td>{elem.item}</td>
                                        <td className="fw-bold">{elem.name}</td>
                                        <td>{elem.date}</td>
                                        <td>{elem.supplier}</td>
                                        <td>{elem.total}</td>
                                        <td>{elem.paid}</td>
                                        <td>{elem.balance}</td>
                                        <td>{elem.credit}</td>
                                       
                                        <td>
                                            <span
                                                className={
                                                    elem?.status ===
                                                    "Item Received"
                                                        ? " bg-success p-1 text-white rounded fw-bold mx-1 "
                                                        : "bg-warning p-1  text-white rounded fw-bold mx-1 text-center"
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

export default Purchase;
