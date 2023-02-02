import React from "react";
import { Card, Container, Form, Image, Row, Table } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaAddressBook, FaBirthdayCake } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { customers } from "../../constants/customers";

const CustomerDetail = ({ toggle }) => {
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Customer Detail</h3>
                <hr />

                <Row>
                    <div className="col-md-4">
                        <Card className="my-2 p-2">
                            <span className="fw-bold mx-2 my-2">Profile</span>
                            <div className="text-center  my-2">
                                <Image
                                    src={
                                        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                                    }
                                    width={50}
                                    height={50}
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                                <Row>
                                    <span>ID : #CS-00002</span>
                                </Row>
                                <Row>
                                    <span className="fw-bold">Joan Dyer</span>
                                </Row>

                                <span>24 years, California</span>
                            </div>
                            <p className=" mx-2 my-2">
                                Duis felis ligula, pharetra at nisl sit amet,
                                ullamcorper fringilla mi. Cras luctus metus non
                                enim porttitor sagittis. Sed tristique
                                scelerisque arcu id dignissim.
                            </p>
                            <div>
                                <GoDeviceMobile className="mx-2 my-2" />
                                <span className="mx-2 my-2">123-4567-890</span>
                            </div>
                            <div>
                                <AiOutlineMail className="mx-2 my-2" />
                                <span className="mx-2 my-2">xyz@gmail.com</span>
                            </div>
                            <div>
                                <FaBirthdayCake className="mx-2 my-2" />
                                <span className="mx-2 my-2">23/06/1996</span>
                            </div>
                            <div>
                                <FaAddressBook className="mx-2 my-2" />
                                <span className="mx-2 my-2">
                                    1421 SahakarNagar,Bangalore,Karnataka,560092
                                </span>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-8">
                        <Row>
                            <div className="col-md-6">
                                <Card>
                                    <div className="my-2">
                                        <span className="fw-bold  mx-2 ">
                                            Delivery Address
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2 ">
                                            Block Number:
                                        </span>
                                        <span className="fw-bold mx-2 ">
                                            #1421
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2 ">
                                            Address:
                                        </span>
                                        <span className="fw-bold mx-2 ">
                                            SahakarNagar,Bangalore ,Karnataka
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2 ">
                                            Pincode:
                                        </span>
                                        <span className="fw-bold mx-2 ">
                                            560092
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2  ">
                                            Phone:
                                        </span>
                                        <span className="fw-bold mx-2  ">
                                            123-4567-890
                                        </span>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <Card>
                                    <div className="my-2">
                                        <span className="fw-bold  mx-2 ">
                                            Billing Address
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2 ">
                                            Block Number:
                                        </span>
                                        <span className="fw-bold mx-2 ">
                                            #1421
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2 ">
                                            Address:
                                        </span>
                                        <span className="fw-bold mx-2 ">
                                            SahakarNagar,Bangalore ,Karnataka
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2 ">
                                            Pincode:
                                        </span>
                                        <span className="fw-bold mx-2 ">
                                            560092
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <span className="fw-bold mx-2  ">
                                            Phone:
                                        </span>
                                        <span className="fw-bold mx-2  ">
                                            123-4567-890
                                        </span>
                                    </div>
                                </Card>
                            </div>
                        </Row>
                        <Card className="my-2 p-2">
                            <Row>
                                <span className="fw-bold mx-1 my-2">
                                    Customer Order
                                </span>
                            </Row>
                            <Row>
                                <div className="col-4 flex-column my-2">
                                    <span className="d-flex  ">
                                        <span className="my-2 mx-1">Show</span>
                                        <Form.Select
                                            aria-label="Default select example "
                                            className="w-25 mx-2"
                                        >
                                            <option value="1">10</option>
                                            <option value="2">25</option>
                                            <option value="3">50</option>
                                            <option value="4">100</option>
                                        </Form.Select>
                                        <span className="my-2">entries</span>
                                    </span>
                                </div>
                                <div className="col-5"></div>
                                <div className="col-3 p-2">
                                    <Row>
                                        <div className="d-flex flex-row ">
                                            <span className="me-2 my-2">
                                                Search:
                                            </span>
                                            <Form.Control
                                                type="search"
                                                style={{
                                                    width: "80%",
                                                }}
                                            />
                                        </div>
                                    </Row>
                                </div>
                            </Row>
                            <Table hover className="  my-2 ">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>ITEM</th>
                                        <th>PAYMENT INFO.</th>
                                        <th>ORDER DATE</th>
                                        <th>PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map((elem, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className-="p-5 vertical-align-middle"
                                            >
                                                <td className="fw-bold">
                                                    {elem.id}
                                                </td>

                                                <td>
                                                    <Image
                                                        style={{
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                        src={elem.img}
                                                        width={50}
                                                        height={50}
                                                    />{" "}
                                                    {elem.item}
                                                </td>
                                                <td>{elem.paymentinfo}</td>

                                                <td>{elem.orderdate}</td>
                                                <td>{elem.price}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default CustomerDetail;
