import React, { useState, useEffect } from "react";
import {
    Button,
    ButtonGroup,
    Card,
    Container,
    Image,
    Row,
} from "react-bootstrap";
import { FaEdit, FaListUl } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";

import { FiGrid } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import ProductLeftPanel from "./ProductLeftPanel";
import { products } from "../../constants/products";
import PaginationList from "../../Pages/PaginationList";
import usePagination from "../../custom hooks/usePagination";

const ProductGrid = ({ toggle }) => {
    let navigate = useNavigate();
    const {
        currentData,
        pageNumbers,
        currentPage,
        setCurrentPage,
    } = usePagination({ data: products });
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="d-flex flex-row justify-content-between">
                    <div className=" my-2">
                        <h3>Products</h3>
                    </div>
                    <div className=" justify-content-end">
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
                    <div className="col-md-3" style={{ maxHeight: "100vh" }}>
                        <ProductLeftPanel />
                    </div>
                    <div className="col-md-9 " style={{ maxHeight: "100vh" }}>
                        <div className="d-flex flex-wrap">
                            {currentData.map((elem, index) => {
                                return (
                                    <div className="me-1" key={index}>
                                        <Card
                                            className="my-2 p-2 "
                                            style={{
                                                minWidth: "80%",
                                                marginRight: "12rem",
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                                src={elem.img}
                                                height={200}
                                            />

                                            <Row className="mt-2 mx-2">
                                                <span className="fw-bold ">
                                                    <ImStarFull className="me-1 text-warning" />
                                                    {elem.ratings}
                                                </span>
                                            </Row>
                                            <Row className=" mx-2">
                                                <span className="fw-bold title-head cursor">
                                                    {elem.item}
                                                </span>
                                            </Row>
                                            <Row className="mx-2">
                                                <span>
                                                    <span className="me-2">
                                                        Reference
                                                    </span>
                                                    {elem.Reference}
                                                </span>
                                            </Row>
                                            <Row className=" mx-2">
                                                <span className="text-warning fw-bold my-2">
                                                    ${elem.price}
                                                </span>
                                            </Row>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="pagination-list">
                            <PaginationList
                                pageNumbers={pageNumbers}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default ProductGrid;
