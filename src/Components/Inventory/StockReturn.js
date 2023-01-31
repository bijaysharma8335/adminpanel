import React from "react";
import { Button, Container, Form, Row, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Products } from "../../constants/Products";
const StockReturn = ({ toggle }) => {
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="my-2 d-flex flex-row justify-content-between">
                    <div>
                        <h3>Returns Items</h3>
                    </div>
                    <div>
                        <Button>
                            <MdAddCircle className="text-white me-1" />
                            Add Return Item
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

                    <Table hover className=" my-1">
                        <thead className="cursor">
                            <tr>
                                <th>ID</th>
                                <th>ITEMS</th>
                                <th>CUSTOMERS</th>
                                <th>RETURN DATE</th>
                                <th>TOTAL </th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Products.map((elem, index) => (
                                <tr key={index} className-="p-5">
                                    <th scope="row">{elem.id}</th>
                                    <td>{elem.item}</td>
                                    <td>{elem.customer}</td>
                                    <td>{elem.orderdate}</td>
                                    <td>{elem.order}</td>
                                    <td>
                                        <FaEdit className="text-success mx-1" />
                                        <RiDeleteBin5Line className="text-danger mx-1" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    );
};

export default StockReturn;