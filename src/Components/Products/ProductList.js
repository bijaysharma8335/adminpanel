import React from "react";
import { Button, ButtonGroup, Container, Row, Table } from "react-bootstrap";
import { FaEdit, FaListUl } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { FiGrid } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import ProductLeftPanel from "./ProductLeftPanel";
import { products } from "../../constants/products";


const ProductList = ({ toggle }) => {
    let navigate = useNavigate();

    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="d-flex flex-row justify-content-between">
                    <div className=" my-2">
                        <h3>Products</h3>
                    </div>
                    <div>
                        <Button onClick={() => navigate("/product/add", {})}>
                            Add
                        </Button>
                    </div>
                    <div>
                        <ButtonGroup size="sm" className="mb-2 border">
                            <Button
                                className="mx-1 "
                                variant="outline-secondary"
                                onClick={() => navigate("/product/list")}
                            >
                                <FaListUl className="my-2 me-1" />
                                List View
                            </Button>
                            <Button
                                className="me-1"
                                variant="outline-secondary"
                                onClick={() => navigate("/product/grid")}
                            >
                                <FiGrid className="my-2 me-1" />
                                Grid View
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
                <Row>
                    <div className="col-md-3 " style={{ maxHeight: "100vh" }}>
                        <ProductLeftPanel />
                    </div>
                    <div className="col-md-9 " style={{ maxHeight: "100vh" }}>
                        <Table hover className=" my-1 border">
                            <tbody>
                                {products.map((elem, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className-="p-3 vertical-align-middle"
                                        >
                                            <td>
                                                <img
                                                    src={elem.img}
                                                    alt=""
                                                    width={80}
                                                    height={80}
                                                />
                                            </td>
                                            <td>
                                                <Row>
                                                    <span
                                                        className="fw-bold title-head"
                                                        onClick={() =>
                                                            navigate(
                                                                "/product/detail"
                                                            )
                                                        }
                                                    >
                                                        {elem.item}
                                                    </span>{" "}
                                                </Row>
                                                <Row>
                                                    <span>
                                                        <span className="me-2">
                                                            Reference
                                                        </span>
                                                        {elem.Reference}
                                                    </span>
                                                </Row>
                                                <Row>
                                                    <span>
                                                        Special priceends
                                                        <Row>
                                                            <span className="fw-bold">
                                                                {`${elem?.priceends?.slice(
                                                                    0,
                                                                    2
                                                                )}h:${elem?.priceends?.slice(
                                                                    3
                                                                )}s`}
                                                            </span>
                                                        </Row>
                                                    </span>
                                                </Row>
                                            </td>
                                            <td>
                                                <Row>
                                                    <span>Offer</span>
                                                </Row>
                                                <Row>
                                                    <span className="fw-bold">
                                                        {elem.offer}
                                                    </span>
                                                </Row>
                                            </td>

                                            <td>
                                                <Row>
                                                    <span>Price</span>
                                                </Row>
                                                <Row>
                                                    <span className="fw-bold">
                                                        &#8377;{elem.price}
                                                    </span>
                                                </Row>
                                            </td>
                                            <td>
                                                <Row>
                                                    <span>Ratings</span>
                                                </Row>
                                                <Row>
                                                    <span className="fw-bold">
                                                        <ImStarFull className="mx-1 text-warning" />
                                                        {elem.ratings}
                                                    </span>
                                                </Row>
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
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default ProductList;
