import React, { useState } from "react";
import { Row, Form, Card, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";

const ProductLeftPanel = () => {
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
                        <Button className="float-end ">Reset</Button>
                    </span>
                </div>
            </Card>
            <Card className="p-3 d-flex my-2 ">
                <span className="fw-bold my-2">
                    Categories
                    {!toggle ? (
                        <FaChevronUp
                            className="float-end fw-bold"
                            onClick={() => setToggle(!toggle)}
                        />
                    ) : (
                        <FaChevronDown
                            className="float-end fw-bold"
                            onClick={() => setToggle(!toggle)}
                        />
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

                        <span className="fw-bold my-2 cursor">
                            Game Acessories
                            {!toggleGame ? (
                                <FaChevronUp
                                    className="float-end fw-bold"
                                    onClick={() => setToggleGame(!toggleGame)}
                                />
                            ) : (
                                <FaChevronDown
                                    className="float-end fw-bold"
                                    onClick={() => setToggleGame(!toggleGame)}
                                />
                            )}
                        </span>

                        {toggleGame && (
                            <Row className="mx-1 cursor">
                                <span>Lighting Keyboard</span>
                                <span>Remote</span>
                                <span>Oculus VR</span>
                                <span>PLayStation 4</span>
                            </Row>
                        )}
                        {/*----------------------------  Game Acessories  -----------------------*/}

                        {/*---------------------------- Bags Section  -----------------------*/}

                        <span className="fw-bold my-2">
                            Bags
                            {!toggleBag ? (
                                <FaChevronUp
                                    className="float-end fw-bold"
                                    onClick={() => setToggleBag(!toggleBag)}
                                />
                            ) : (
                                <FaChevronDown
                                    className="float-end fw-bold"
                                    onClick={() => setToggleBag(!toggleBag)}
                                />
                            )}
                        </span>
                        {toggleBag && (
                            <Row className="mx-1">
                                <span>School Bags</span>
                                <span>Travelling Bags</span>
                            </Row>
                        )}
                        {/*---------------------------- Bags Section  -----------------------*/}

                        {/*---------------------------- Flower Port  -----------------------*/}

                        <span className="fw-bold my-2">
                            Flower Port
                            {!toggleFlower ? (
                                <FaChevronUp
                                    className="float-end fw-bold"
                                    onClick={() =>
                                        setToggleFlower(!toggleFlower)
                                    }
                                />
                            ) : (
                                <FaChevronDown
                                    className="float-end fw-bold"
                                    onClick={() =>
                                        setToggleFlower(!toggleFlower)
                                    }
                                />
                            )}
                        </span>
                        {toggleFlower && (
                            <Row className="mx-1">
                                <span>Wooden Port</span>
                                <span>Pattern Port</span>
                            </Row>
                        )}
                        {/*---------------------------- Flower Port Section -----------------------*/}

                        {/*----------------------------  Watch Section  -----------------------*/}

                        <span className="fw-bold my-2">
                            Watch
                            {!toggleWatch ? (
                                <FaChevronUp
                                    className="float-end fw-bold"
                                    onClick={() => setToggleWatch(!toggleWatch)}
                                />
                            ) : (
                                <FaChevronDown
                                    className="float-end fw-bold"
                                    onClick={() => setToggleWatch(!toggleWatch)}
                                />
                            )}
                        </span>
                        {toggleWatch && (
                            <Row className="mx-1">
                                <span>Wall Clock</span>
                                <span>Smart Watch</span>
                                <span>Rado Watch</span>
                                <span>Fast Track Watch</span>
                                <span>Noise Watch</span>
                            </Row>
                        )}
                        {/*---------------------------- Lehenga Section  -----------------------*/}

                        {/*---------------------------- Midies Section  -----------------------*/}
                        <span className="fw-bold my-2">
                            Accessories
                            {!toggleAccessories ? (
                                <FaChevronUp
                                    className="float-end fw-bold"
                                    onClick={() =>
                                        setToggleAccessories(!toggleAccessories)
                                    }
                                />
                            ) : (
                                <FaChevronDown
                                    className="float-end fw-bold"
                                    onClick={() =>
                                        setToggleAccessories(!toggleAccessories)
                                    }
                                />
                            )}
                        </span>
                        {toggleAccessories && (
                            <Row className="mx-1">
                                <span>Note Diaries</span>
                                <span>Fold Diaries</span>
                            </Row>
                        )}
                        {/*---------------------------- Midies Section  -----------------------*/}
                    </Row>
                )}
            </Card>
            {/*------------------------- Bralets section----------------------------  */}
            {/*------------------------- Size section----------------------------  */}
            <Card className="p-3 d-flex my-2 ">
                <span className="fw-bold">
                    Select Size
                    {!toggleSize ? (
                        <FaChevronUp
                            className="float-end fw-bold"
                            onClick={() => setToggleSize(!toggleSize)}
                        />
                    ) : (
                        <FaChevronDown
                            className="float-end fw-bold"
                            onClick={() => setToggleSize(!toggleSize)}
                        />
                    )}
                </span>
                {toggleSize && (
                    <div className="my-2">
                        <Button className="mx-1" variant="outline-primary">
                            XS
                        </Button>

                        <Button className="mx-1" variant="outline-primary">
                            S
                        </Button>

                        <Button className="mx-1" variant="outline-primary">
                            M
                        </Button>

                        <Button className="mx-1" variant="outline-primary">
                            L
                        </Button>

                        <Button className="mx-1" variant="outline-primary">
                            XL
                        </Button>
                    </div>
                )}
            </Card>
            {/*------------------------- Size section----------------------------  */}
            {/* -------------------Color section  ---------------------------------*/}
            <Card className="p-3 d-flex my-2 ">
                <span className="fw-bold">
                    Select Color
                    {!toggleColor ? (
                        <FaChevronUp
                            className="float-end fw-bold"
                            onClick={() => setToggleColor(!toggleColor)}
                        />
                    ) : (
                        <FaChevronDown
                            className="float-end fw-bold"
                            onClick={() => setToggleColor(!toggleColor)}
                        />
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
                <span className="fw-bold">
                    Pricing Range
                    {!togglePrice ? (
                        <FaChevronUp
                            className="float-end fw-bold"
                            onClick={() => setTogglePrice(!togglePrice)}
                        />
                    ) : (
                        <FaChevronDown
                            className="float-end fw-bold"
                            onClick={() => setTogglePrice(!togglePrice)}
                        />
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
                <span className="fw-bold my-2">
                    Select Rating
                    {!toggleRating ? (
                        <FaChevronUp
                            className="float-end fw-bold"
                            onClick={() => setToggleRating(!toggleRating)}
                        />
                    ) : (
                        <FaChevronDown
                            className="float-end fw-bold"
                            onClick={() => setToggleRating(!toggleRating)}
                        />
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
