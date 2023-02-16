import React, { useState } from "react";
import { Row, Form, Card, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";

const ProductLeftPanel = () => {
    const color = useSelector(getThemeColor);
    const [toggle, setToggle] = useState(false);
    const [toggleGame, setToggleGame] = useState(false);
    const [toggleBag, setToggleBag] = useState(false);
    const [toggleFlower, setToggleFlower] = useState(false);
    const [toggleWatch, setToggleWatch] = useState(false);
    const [toggleAccessories, setToggleAccessories] = useState(false);

    const [toggleSize, setToggleSize] = useState(false);
    const [toggleRating, setToggleRating] = useState(false);
    const [togglePrice, setTogglePrice] = useState(false);
    const [toggleColor, setToggleColor] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    return (
        <>
            <Card className="p-3 d-flex my-2">
                <div className="row">
                    <span className="fw-bold ">
                        Filter
                        <Button className="float-end " style={{ backgroundColor: color }}>
                            Reset
                        </Button>
                    </span>
                </div>
            </Card>
            <Card className="p-3 d-flex my-2 ">
                <span className="fw-bold my-2 title-head" onClick={() => setToggle(!toggle)}>
                    Categories
                    {!toggle ? (
                        <FaChevronUp className="float-end fw-bold text-dark" />
                    ) : (
                        <FaChevronDown className="float-end fw-bold text-dark" />
                    )}
                </span>
                {toggle && (
                    <Row>
                        <Form.Control
                            type="search"
                            placeholder="search"
                            className="my-3 "
                            style={{
                                width: "80%",
                            }}
                        />
                        {/*----------------------------  Game Acessories  -----------------------*/}

                        <span
                            className="fw-bold my-2 title-head"
                            onClick={() => setToggleGame(!toggleGame)}
                        >
                            Game Acessories
                            <FaChevronDown className="float-end fw-bold text-dark" />
                        </span>

                        {toggleGame && (
                            <Row className="mx-1 ">
                                <span className="title-head">Lighting Keyboard</span>
                                <span className="title-head">Remote</span>
                                <span className="title-head">Oculus VR</span>
                                <span className="title-head">PLayStation 4</span>
                            </Row>
                        )}
                        {/*----------------------------  Game Acessories  -----------------------*/}

                        {/*---------------------------- Bags Section  -----------------------*/}

                        <span
                            className="fw-bold my-2 title-head"
                            onClick={() => setToggleBag(!toggleBag)}
                        >
                            Bags
                            <FaChevronDown className="float-end fw-bold text-dark" />
                        </span>
                        {toggleBag && (
                            <Row className="mx-1">
                                <span className="title-head">School Bags</span>
                                <span className="title-head">Travelling Bags</span>
                            </Row>
                        )}
                        {/*---------------------------- Bags Section  -----------------------*/}

                        {/*---------------------------- Flower Port  -----------------------*/}

                        <span
                            className="fw-bold my-2 title-head"
                            onClick={() => setToggleFlower(!toggleFlower)}
                        >
                            Flower Port
                            <FaChevronDown className="float-end fw-bold text-dark" />
                        </span>
                        {toggleFlower && (
                            <Row className="mx-1">
                                <span className="title-head">Wooden Port</span>
                                <span className="title-head">Pattern Port</span>
                            </Row>
                        )}
                        {/*---------------------------- Flower Port Section -----------------------*/}

                        {/*----------------------------  Watch Section  -----------------------*/}

                        <span
                            className="fw-bold my-2 title-head"
                            onClick={() => setToggleWatch(!toggleWatch)}
                        >
                            Watch
                            <FaChevronDown className="float-end fw-bold text-dark" />
                        </span>
                        {toggleWatch && (
                            <Row className="mx-1">
                                <span className="title-head">Wall Clock</span>
                                <span className="title-head">Smart Watch</span>
                                <span className="title-head">Rado Watch</span>
                                <span className="title-head">Fast Track Watch</span>
                                <span className="title-head">Noise Watch</span>
                            </Row>
                        )}
                        {/*---------------------------- Watch Section  -----------------------*/}

                        {/*---------------------------- Accessories Section  -----------------------*/}
                        <span
                            className="fw-bold my-2 title-head"
                            onClick={() => setToggleAccessories(!toggleAccessories)}
                        >
                            Accessories
                            <FaChevronDown className="float-end fw-bold text-dark" />
                        </span>
                        {toggleAccessories && (
                            <Row className="mx-1">
                                <span className="title-head">Note Diaries</span>
                                <span className="title-head">Fold Diaries</span>
                            </Row>
                        )}
                        {/*---------------------------- Accessories Section  -----------------------*/}
                    </Row>
                )}
            </Card>

            <Card className="p-3 d-flex my-2 ">
                <span className="fw-bold title-head" onClick={() => setToggleSize(!toggleSize)}>
                    Select Size
                    {!toggleSize ? (
                        <FaChevronUp className="float-end fw-bold text-dark" />
                    ) : (
                        <FaChevronDown className="float-end fw-bold text-dark" />
                    )}
                </span>
                {toggleSize && (
                    <div className="my-2">
                        <Button className="mx-1" style={{ backgroundColor: color }}>
                            XS
                        </Button>

                        <Button className="mx-1" style={{ backgroundColor: color }}>
                            S
                        </Button>

                        <Button className="mx-1" style={{ backgroundColor: color }}>
                            M
                        </Button>

                        <Button className="mx-1" style={{ backgroundColor: color }}>
                            L
                        </Button>

                        <Button className="mx-1" style={{ backgroundColor: color }}>
                            XL
                        </Button>
                    </div>
                )}
            </Card>
            {/*------------------------- Size section----------------------------  */}
            {/* -------------------Color section  ---------------------------------*/}
            <Card className="p-3 d-flex my-2 ">
                <span className="fw-bold title-head" onClick={() => setToggleColor(!toggleColor)}>
                    Select Color
                    {!toggleColor ? (
                        <FaChevronUp className="float-end fw-bold text-dark" />
                    ) : (
                        <FaChevronDown className="float-end fw-bold text-dark" />
                    )}
                </span>
                {toggleColor && (
                    <Row>
                        <div className="d-flex flex-row my-1">
                            <span
                                className="  bg-primary"
                                style={{
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                }}
                            ></span>
                            <span className="mx-4">Blue</span>
                            <div
                                style={{
                                    width: " 84%",
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "end",
                                }}
                            >
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="d-flex flex-row my-1">
                            <span
                                className="  bg-danger"
                                style={{
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                }}
                            ></span>
                            <span className="mx-4">Red</span>
                            <div
                                style={{
                                    width: " 85%",
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "end",
                                }}
                            >
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="d-flex flex-row my-1">
                            <span
                                className="  bg-success"
                                style={{
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                }}
                            ></span>
                            <span className="mx-4">Green</span>
                            <div
                                style={{
                                    width: " 82%",
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "end",
                                }}
                            >
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="d-flex flex-row my-1">
                            <span
                                className="  bg-dark"
                                style={{
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                }}
                            ></span>
                            <span className="mx-4">Dark</span>
                            <div
                                style={{
                                    width: " 84%",
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "end",
                                }}
                            >
                                <input type="checkbox" />
                            </div>
                        </div>
                    </Row>
                )}
            </Card>
            {/* -------------------Color section  ---------------------------------*/}
            <Card className="p-3 d-flex my-2 ">
                <span className="fw-bold title-head" onClick={() => setTogglePrice(!togglePrice)}>
                    Pricing Range
                    {!togglePrice ? (
                        <FaChevronUp className="float-end fw-bold text-dark" />
                    ) : (
                        <FaChevronDown className="float-end fw-bold text-dark" />
                    )}
                </span>
                {togglePrice && (
                    <Row className="my-2">
                        <Row>
                            <div className="col-4">
                                <span>Minimum Price</span>
                                <Form.Control
                                    type="number"
                                    value={min}
                                    onChange={(e) => setMin(e.target.value)}
                                />
                            </div>
                            <div className="col-4"></div>
                            <div className="col-4">
                                <span>Maximum Price</span>
                                <Form.Control
                                    type="number"
                                    value={max}
                                    onChange={(e) => setMax(e.target.value)}
                                />
                            </div>
                        </Row>

                        <input type="range" className="my-2" />
                    </Row>
                )}
            </Card>
            <Card className="p-3 d-flex my-2 ">
                <span
                    className="fw-bold my-2 title-head"
                    onClick={() => setToggleRating(!toggleRating)}
                >
                    Select Rating
                    {!toggleRating ? (
                        <FaChevronUp className="float-end fw-bold text-dark" />
                    ) : (
                        <FaChevronDown className="float-end fw-bold text-dark" />
                    )}
                </span>
                {toggleRating && (
                    <Row>
                        <div className="d-flex flex-row my-1">
                            <input type="checkbox" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                        </div>
                        <div className="d-flex flex-row my-1">
                            <input type="checkbox" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                        </div>
                        <div className="d-flex flex-row  my-1">
                            <input type="checkbox" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                        </div>
                        <div className="d-flex flex-row my-1">
                            <input type="checkbox" />
                            <ImStarFull className="mx-1 text-warning" />
                            <ImStarFull className="mx-1 text-warning" />
                        </div>
                        <div className="d-flex flex-row my-1">
                            <input type="checkbox" />
                            <ImStarFull className="mx-1 text-warning" />
                        </div>
                    </Row>
                )}
            </Card>
        </>
    );
};

export default ProductLeftPanel;
