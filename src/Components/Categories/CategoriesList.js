import React from "react";
import { Container, Form, Row, Table, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
import { categories } from "../../constants/categories";
import usePagination from "../../custom hooks/usePagination";
import PaginationList from "../../Pages/PaginationList";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";

const CategoryList = ({ toggle, setToggle }) => {
    const navigate = useNavigate();
    const color = useSelector(getThemeColor);
    const { indexOfFirstItem, currentData, pageNumbers, currentPage, pagesCount, setCurrentPage } =
        usePagination({ data: categories });
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="my-2 d-flex flex-row justify-content-between">
                    <div>
                        <h3>Categories List</h3>
                    </div>

                    <div>
                        <Button
                            onClick={() => navigate("/category/add")}
                            style={{ backgroundColor: color }}
                        >
                            <MdAddCircle className="text-white me-1" />
                            Add Categories
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
                                        <Form.Label className="me-1 my-2">Search:</Form.Label>
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
                                <th>#</th>
                                <th>ID</th>
                                <th>Category </th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((elem, index) => {
                                return (
                                    <tr key={index} className-="p-5 vertical-align-middle">
                                        <td className="fw-bold">{indexOfFirstItem + index + 1}</td>
                                        <td>{elem.id}</td>

                                        <td>{elem.category}</td>
                                        <td>{elem.date}</td>

                                        <td>
                                            <span
                                                className={
                                                    elem.status === "Published"
                                                        ? " bg-success p-1 text-white rounded fw-bold mx-1"
                                                        : elem.status === "Hidden"
                                                        ? "bg-danger p-1 text-white rounded fw-bold mx-1"
                                                        : "bg-warning p-1  text-white rounded fw-bold mx-1"
                                                }
                                            >
                                                {elem.status}
                                            </span>
                                        </td>
                                        <td>
                                            <FaEdit className="text-success mx-1 border" />
                                            <RiDeleteBin5Line className="text-danger mx-1 border " />
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

export default CategoryList;
