import React from "react";
import { Button, Card, Container, Form, Image, Row, Table } from "react-bootstrap";
import { AiOutlineMail, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import { useSelector } from "react-redux";
import usePagination from "../../custom hooks/usePagination";
import PaginationList from "../../Pages/PaginationList";
import { getOrder } from "../../Redux/slice/orderSlice";

import { getThemeColor } from "../../Redux/slice/themeSlice";

const OrderDetail = ({ toggle, setToggle }) => {
    const color = useSelector(getThemeColor);
    const orders = useSelector(getOrder);
    console.log(orders);
    const { indexOfFirstItem, currentData, pageNumbers, currentPage, setCurrentPage, pagesCount } =
        usePagination({ data: orders });
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="my-2 d-flex flex-row justify-content-between">
                    <div>
                        <h3>
                            Orders Details:
                            <span className="fw-bold">#Order-11414</span>
                        </h3>
                    </div>

                    <div>
                        <Form.Select style={{ boxShadow: "unset" }}>
                            <option>Select Order Id</option>
                            {orders.map((x, index) => {
                                return <option key={index}>{x.id}</option>;
                            })}
                        </Form.Select>
                    </div>
                </div>
                <hr />
                <div className=" order-detail-header">
                    <div
                        className=" p-3 me-1   text-success text-center border rounded"
                        style={{ backgroundColor: "#d1e7dd" }}
                    >
                        <AiOutlineShoppingCart
                            size="2em"
                            className="float-start p-1 mt-0 text-white  border bg-success border rounded"
                        />
                        <span className="d-block ms-1">Order Created at</span>
                        <span className="d-block ms-1">16/03/2021 at 04:23 PM</span>
                    </div>
                    <div
                        className=" p-3 mx-1  text-center text-danger border rounded"
                        style={{ backgroundColor: "#f8d7da" }}
                    >
                        <AiOutlineUser
                            size="2em"
                            className="float-start p-1 mt-0 text-white  bg-danger border rounded"
                        />
                        <span className=" ms-2 d-block">Name </span>
                        <span className=" ms-2 d-block ">Gabrielle</span>
                    </div>
                    <div
                        className=" p-3 mx-1  text-center text-warning border rounded"
                        style={{ backgroundColor: "#ffecb5" }}
                    >
                        <AiOutlineMail
                            size="2em"
                            className="float-start mt-0 p-1 text-white bg-warning border rounded"
                        />
                        <span className="d-block ms-1">Email</span>
                        <span className="d-block ms-1">gabrielle.db@gmail.com</span>
                    </div>
                    <div
                        className=" p-3 ms-1  text-center border text-info rounded"
                        style={{ backgroundColor: "#b6effb" }}
                    >
                        <MdOutlineCall
                            size="2em"
                            className="float-start mt-0 p-1 text-white bg-info rounded"
                        />
                        <span className=" mx-2 d-block">Contact No</span>
                        <span className=" mx-2 d-block"> 202-906-12354</span>
                    </div>

                    {/* <div className=" border  my-2  p-2 bg-success rounded d-flex">
                        <div className="p-2 bg-light float-start bg-success ">
                            <AiOutlineShoppingCart className=" my-2 text-white bg-success " />
                        </div>
                        <div>
                            <span className="d-block ms-1">Order Created at</span>
                            <span className="d-block ms-1">16/03/2021 at 04:23 PM</span>
                        </div>
                    </div>
                    <div className=" border  my-2  p-2 bg-danger rounded">
                        <div className="p-2 bg-light float-start bg-danger ">
                            <AiOutlineUser className=" my-2 text-white bg-danger " />
                        </div>
                        <span className=" ms-2 d-block">Name </span>
                        <span className=" ms-2 d-block ">Gabrielle</span>
                    </div>
                    <div className="  border  my-2 p-2  bg-primary rounded">
                        <div className="p-2 bg-light float-start bg-primary">
                            <AiOutlineMail className=" my-2 text-white  bg-primary" />
                        </div>
                        <span className="d-block ms-1">Email</span>
                        <span className="d-block ms-1">gabrielle.db@gmail.com</span>
                    </div>
                    <div className="  border  my-2 p-2  bg-warning rounded">
                        <div className="p-2 bg-light float-start bg-warning  text-white">
                            <MdOutlineCall className=" my-2 text-white  bg-warning " />
                        </div>
                        <span className=" mx-2 d-block">Contact No</span>
                        <span className=" mx-2 d-block"> 202-906-12354</span>
                    </div> */}
                </div>
                <Row>
                    <div className="col-md-4 my-2">
                        <Card>
                            <div className="my-2">
                                <span className="fw-bold  mx-2 ">Delivery Address</span>
                                <span className="float-end  me-2 ">Edit</span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2 ">Block Number:</span>
                                <span className="fw-bold mx-2 ">#1421</span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2 ">Address:</span>
                                <span className="fw-bold mx-2 ">
                                    SahakarNagar,Bangalore ,Karnataka
                                </span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2 ">Pincode:</span>
                                <span className="fw-bold mx-2 ">560092</span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2  ">Phone:</span>
                                <span className="fw-bold mx-2  ">123-4567-890</span>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card>
                            <div className="my-2">
                                <span className="fw-bold  mx-2 ">Billing Address</span>
                                <span className="float-end me-2">Edit</span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2 ">Block Number:</span>
                                <span className="fw-bold mx-2 ">#1421</span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2 ">Address:</span>
                                <span className="fw-bold mx-2 ">
                                    SahakarNagar,Bangalore ,Karnataka
                                </span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2 ">Pincode:</span>
                                <span className="fw-bold mx-2 ">560092</span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2  ">Phone:</span>
                                <span className="fw-bold mx-2  ">123-4567-890</span>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card>
                            <div className="my-2">
                                <span className="fw-bold  mx-2 ">Invoice Detail</span>
                                <span className="float-end  me-2">Download</span>
                            </div>

                            <div className="my-2">
                                <span className="fw-bold mx-2 my-2">Number:</span>
                                <span className="fw-bold mx-2 my-2">XXXX</span>
                            </div>
                            <div className="my-2">
                                <span className="fw-bold mx-2 my-2">Seller GST :</span>
                                <span className="fw-bold mx-2 my-2"> XXXX</span>
                            </div>

                            <div className="my-2">
                                <span className="fw-bold mx-2 my-2">Purchase GST :</span>
                                <span className="fw-bold mx-2 my-2">XXXX</span>
                            </div>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-8">
                        <Card className="my-2">
                            <span className="fw-bold mx-2 my-2">Order Summary</span>
                            <Table className="  my-2 ">
                                <thead className="cursor">
                                    <tr>
                                        <th>#</th>
                                        <th>PRODUCT IMAGE</th>
                                        <th>PRODUCT NAME</th>
                                        <th>QUANTITY </th>
                                        <th>PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map((elem, index) => {
                                        return (
                                            <tr key={index} className-="p-5 vertical-align-middle">
                                                <td className="fw-bold">
                                                    {indexOfFirstItem + index + 1}
                                                </td>
                                                <td>
                                                    <Image
                                                        style={{
                                                            objectFit: "contain",
                                                        }}
                                                        src={elem.img}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </td>

                                                <td>{elem.item}</td>
                                                <td>{elem.quantity}</td>

                                                <td>{elem.price}</td>
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
                            <Row className="p-2 pt-0">
                                <div className=" col-md-9 "></div>
                                <div className=" col-md-3 ">
                                    <div className="border ">
                                        <div className="p-2">
                                            <span>SubTotal Price:</span>
                                            <span className="float-end">$1096.00</span>
                                        </div>
                                        <div className="p-2">
                                            <span>Shipping Cost:</span>
                                            <span className="float-end">$12.00</span>
                                        </div>
                                        <div className="p-2">
                                            <span>Discount:</span>
                                            <span className="float-end">$10.00</span>
                                        </div>
                                        <div className="p-2">
                                            <span>Tax:</span>
                                            <span className="float-end">$198.00</span>
                                        </div>
                                        <hr />
                                        <div className="mx-2 my-2">
                                            <span>Total Payable:</span>
                                            <span className="float-end">$1296.00</span>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="my-2 p-2">
                            <span className="fw-bold mx-2 my-2">Orders Status</span>
                            <div className="p-2">
                                <span className="fw-bold  my-2">Order ID</span>
                                <Form.Control type="text" className=" my-1" />
                            </div>
                            <div className="p-2">
                                <span className="fw-bold  my-2">Order Status</span>
                                <Form.Select>
                                    <option>Progress</option>
                                    <option>Completed</option>
                                    <option>Pending</option>
                                </Form.Select>
                            </div>
                            <div className="p-2">
                                <span className="fw-bold  my-2">Quantity</span>
                                <Form.Control type="number" className=" my-1" />
                            </div>
                            <div className="p-2">
                                <span className="fw-bold  my-2">Order Transaction</span>
                                <Form.Select>
                                    <option>Completed</option>
                                    <option>Fail</option>
                                </Form.Select>
                            </div>
                            <div className="p-2">
                                <span className="fw-bold  my-2">Comments</span>
                                <Form.Control as="textarea" className=" my-1" />
                            </div>
                            <div className=" mx-3 my-2">
                                <Button style={{ backgroundColor: color }}>Submit</Button>
                            </div>
                        </Card>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default OrderDetail;
