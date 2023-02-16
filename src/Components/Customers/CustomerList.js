import React, { useState } from "react";
import { Button, Container, Image, Modal, Form, Row, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { customers } from "../../constants/customers";
import usePagination from "../../custom hooks/usePagination";
import PaginationList from "../../Pages/PaginationList";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";

const CustomerList = ({ toggle, setToggle }) => {
    const navigate = useNavigate();
    const color = useSelector(getThemeColor);
    const [show, setShow] = useState(false);
    const { indexOfFirstItem, currentData, pageNumbers, currentPage, setCurrentPage, pagesCount } =
        usePagination({ data: customers });
    return (
        <Container className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="my-2 d-flex flex-row justify-content-between">
                    <div>
                        <h3>Customers Information</h3>
                    </div>

                    <div>
                        <Button style={{ backgroundColor: color }}>
                            <MdAddCircle className="text-white me-1" />
                            AddCustomer
                        </Button>
                    </div>
                </div>

                <div className="p-2 border">
                    <Row>
                        <div className="col-4 flex-column my-2">
                            {/* <span className="d-flex  "> */}
                            <label className="my-2">Show</label>
                            <Form.Select aria-label="Default select example " className="w-25 mx-2">
                                <option value="1">10</option>
                                <option value="2">25</option>
                                <option value="3">50</option>
                                <option value="4">100</option>
                            </Form.Select>
                            <label className="my-2">entries</label>
                            {/* </span> */}
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
                                <th>CUSTOMERS</th>
                                <th>REGISTER DATE</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>

                                <th>TOTAL ORDER</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((elem, index) => {
                                return (
                                    <tr key={index} className-="p-5">
                                        <td className="fw-bold">{indexOfFirstItem + index + 1}</td>
                                        <td>{elem.id}</td>
                                        <td onClick={() => navigate("/customer/detail")}>
                                            <Image
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                                src={elem.img}
                                                width={30}
                                                height={50}
                                                className="me-2"
                                            />
                                            {elem.customer}
                                        </td>
                                        <td>{elem.orderdate}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>

                                        <td>{elem.order}</td>
                                        <td>
                                            <FaEdit className="text-success mx-1" />
                                            <RiDeleteBin5Line className="text-danger mx-1" />
                                        </td>
                                    </tr>
                                );
                            })}
                            {/* {newCustomer?.name?.length > 0 && (
                                <tr
                                    key={Math.random()
                                        .toString(36)
                                        .substr(2, 9)}
                                    className-="p-5"
                                >
                                    <td>{newCustomer.id}</td>
                                    <td>
                                        <Image
                                            style={{
                                                objectFit: "contain",
                                            }}
                                            src={newCustomer.profileImg}
                                            width={30}
                                            height={50}
                                            className="me-2"
                                        />
                                    </td>
                                    <td>{newCustomer.registerDate}</td>
                                    <td>{newCustomer.email}</td>
                                    <td>{newCustomer.phone}</td>
                                    <td>{newCustomer.country}</td>
                                    <td>{newCustomer.order}</td>
                                    <td>
                                        <FaEdit className="text-success mx-1" />
                                        <RiDeleteBin5Line className="text-danger mx-1" />
                                    </td>
                                </tr>
                            )} */}
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
            {/* <Modal show={show}>
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title className="fw-bold">Add Customers</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light">
                    <div>
                        <span className="fw-bold">Order Id</span>
                        <Form.Control
                            type="number"
                            name="id"
                            className="my-2"
                        />
                    </div>
                    <div>
                        <span className="fw-bold">Customers Name</span>
                        <Form.Control
                            type="text"
                            name="name"
                            className="my-2"
                        />
                    </div>
                    <div>
                        <span className="fw-bold">Customers Profile</span>
                        <Form.Control type="file" className="my-2" />
                    </div>
                    <Row>
                        <div className="col-6">
                            <span className="fw-bold">Country</span>
                            <Form.Control
                                name="country"
                                type="text"
                                className="my-2"
                            />
                        </div>
                        <div className="col-6">
                            <span className="fw-bold">
                                Customers Register Date
                            </span>
                            <Form.Control
                                name="registerDate"
                                type="date"
                                className="my-2"
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-6">
                            <span className="fw-bold">Email</span>
                            <Form.Control
                                name="email"
                                type="email"
                                className="my-2"
                            />
                        </div>
                        <div className="col-6">
                            <span className="fw-bold">Phone</span>
                            <Form.Control
                                name="phone"
                                type="number"
                                className="my-2"
                            />
                        </div>
                    </Row>
                    <div>
                        <span className="fw-bold">Total Orders</span>
                        <Form.Control
                            name="order"
                            type="text"
                            className="my-2"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <Button variant="secondary">Done</Button>
                    <Button variant="primary">Add</Button>
                </Modal.Footer>
            </Modal> */}
        </Container>
    );
};

export default CustomerList;
