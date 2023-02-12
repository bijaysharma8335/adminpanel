import React from "react";
import { Container, Form, Row, Table } from "react-bootstrap";
import { suppliers } from "../../constants/stocks";
import usePagination from "../../custom hooks/usePagination";
import PaginationList from "../../Pages/PaginationList";

const Suppliers = ({ toggle }) => {
    const { indexOfFirstItem, currentData, pageNumbers, currentPage, setCurrentPage } =
        usePagination({ data: suppliers });
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Suppliers Information</h3>
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
                                        <Form.Label className="me-1 my-2">Search:</Form.Label>
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
                                <th>#</th>
                                <th>ID</th>
                                <th>ITEMS</th>
                                <th>SUPPLIERS</th>
                                <th>SUPPLIERS REGDATE</th>
                                <th>MAIL</th>
                                <th>PHONE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((elem, index) => {
                                return (
                                    <tr key={index} className-="p-5 vertical-align-middle">
                                        <td className="fw-bold">{indexOfFirstItem + index + 1}</td>
                                        <td>{elem.id}</td>

                                        <td>{elem.item}</td>
                                        <td className="fw-bold">{elem.name}</td>
                                        <td>{elem.regdate}</td>
                                        <td>{elem.mail}</td>
                                        <td>{elem.phone}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <div className="pagination-list">
                        <PaginationList
                            pageNumbers={pageNumbers}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Suppliers;
