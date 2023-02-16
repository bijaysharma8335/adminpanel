import React, { useState, useEffect } from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import { ImStarFull } from "react-icons/im";
import ProductLeftPanel from "./ProductLeftPanel";
import { products } from "../../constants/products";
import PaginationList from "../../Pages/PaginationList";
import usePagination from "../../custom hooks/usePagination";
import ProductButtonGroup from "./ProductButtonGroup";

const ProductGrid = ({ toggle }) => {
    const [type, setType] = useState("grid");
    const { currentData, pageNumbers, currentPage, setCurrentPage, pagesCount } = usePagination({
        data: products,
    });
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="d-flex flex-row justify-content-between">
                    <div className=" my-2">
                        <h3>Products</h3>
                    </div>
                    <ProductButtonGroup type={type} />
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
                                                    <span className="me-2">Reference</span>
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
                                pagesCount={pagesCount}
                            />
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default ProductGrid;
