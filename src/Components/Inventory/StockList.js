import React from "react";
import { Container, Form, Image, Row, Table } from "react-bootstrap";

import { products } from "../../constants/products";
import usePagination from "../../custom hooks/usePagination";
import PaginationList from "../../Pages/PaginationList";

const StockList = ({ toggle }) => {
    const { indexOfFirstItem, currentData, pageNumbers, currentPage, setCurrentPage, pagesCount } =
        usePagination({ data: products });
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Stock Inventory List</h3>
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

                                <th>PRODUCTS</th>
                                <th>CATEGORY</th>
                                <th>STOCKS</th>
                                <th>IN STOCK</th>
                                <th>DATE ADDED</th>
                                <th>PRICE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((elem, index) => {
                                return (
                                    <tr key={index} className-="p-5 vertical-align-middle">
                                        <td className="fw-bold">{indexOfFirstItem + index + 1}</td>

                                        <td>
                                            <Image
                                                style={{ objectFit: "contain" }}
                                                src={elem.img}
                                                width={50}
                                                height={50}
                                            />
                                            {elem.item}
                                        </td>
                                        <td>{elem.category}</td>
                                        <td>{elem.totalStockQty}</td>
                                        <td>{elem.instock}</td>
                                        <td>{elem.date}</td>
                                        <td>{elem.price}</td>
                                        <td>
                                            <span
                                                className={
                                                    elem?.status === "sell"
                                                        ? " bg-success p-2 text-white rounded fw-bold mx-1 "
                                                        : elem?.status === "out of stock"
                                                        ? "bg-danger p-2 text-white rounded fw-bold mx-1 text-center"
                                                        : "bg-warning p-2  text-white rounded fw-bold mx-1 text-center"
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
                    <div className="pagination-list">
                        <PaginationList
                            pageNumbers={pageNumbers}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagesCount={pagesCount}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default StockList;
