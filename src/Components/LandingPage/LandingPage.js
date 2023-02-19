import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import { FaShoppingBag, FaUsers } from "react-icons/fa";
import { BiDollar, BiUser, BiCreditCard, BiSmile } from "react-icons/bi";
import { RiHandbagFill } from "react-icons/ri";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Transactions from "./Transactions";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";

const LandingPage = ({ toggle, setToggle }) => {
    const color = useSelector(getThemeColor);
    const [hoverButton, setHoverButton] = useState({
        today: false,
        week: false,
        month: false,
        year: false,
    });

    const [toggleButton, settoggleButton] = useState({
        today: true,
        week: false,
        month: false,
        year: false,
    });
    const { today, week, month, year } = toggleButton;
    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <div className="topbar-landingpage4">
                    <div
                        className=" p-3  m-1 text-success text-center border rounded"
                        style={{ backgroundColor: "#d1e7dd" }}
                    >
                        <BiDollar
                            size="2em"
                            className="float-start p-1 mt-0 text-white  border bg-success border rounded"
                        />
                        <h6>Revenue</h6>
                        <span>500</span>
                    </div>
                    <div
                        className=" p-3  m-1 text-center text-danger border rounded"
                        style={{ backgroundColor: "#f8d7da" }}
                    >
                        <BiCreditCard
                            size="2em"
                            className="float-start p-1 mt-0 text-white  bg-danger border rounded"
                        />
                        <h6>Expenses</h6>
                        <span>50</span>
                    </div>
                    <div
                        className=" p-3  m-1 text-center text-warning border rounded"
                        style={{ backgroundColor: "#ffecb5" }}
                    >
                        <BiSmile
                            size="2em"
                            className="float-start mt-0 p-1 text-white bg-warning border rounded"
                        />
                        <h6>Clients</h6>
                        <span>$1770</span>
                    </div>
                    <div
                        className=" p-3  m-1 text-center border text-info rounded"
                        style={{ backgroundColor: "#b6effb" }}
                    >
                        <HiOutlineShoppingBag
                            size="2em"
                            className="float-start mt-0 p-1 text-white bg-info rounded"
                        />
                        <h6>Store</h6>
                        <span>$1770</span>
                    </div>
                </div>
                <div>
                    <ButtonGroup size="md" className="my-2 border ms-1">
                        <Button
                            style={
                                today
                                    ? { backgroundColor: color, color: "white" }
                                    : hoverButton.today
                                    ? { backgroundColor: "white", color: color }
                                    : { color: "black", backgroundColor: "white" }
                            }
                            onClick={() => settoggleButton({ today: true })}
                            onMouseEnter={() => setHoverButton({ today: true })}
                            onMouseLeave={() => setHoverButton(false)}
                        >
                            Today
                        </Button>
                        <Button
                            style={
                                week
                                    ? { backgroundColor: color, color: "white" }
                                    : hoverButton.week
                                    ? { backgroundColor: "white", color: color }
                                    : { color: "black", backgroundColor: "white" }
                            }
                            onClick={() => settoggleButton({ week: true })}
                            onMouseEnter={() => setHoverButton({ week: true })}
                            onMouseLeave={() => setHoverButton(false)}
                        >
                            Week
                        </Button>
                        <Button
                            style={
                                month
                                    ? { backgroundColor: color, color: "white" }
                                    : hoverButton.month
                                    ? { backgroundColor: "white", color: color }
                                    : { color: "black", backgroundColor: "white" }
                            }
                            onClick={() => settoggleButton({ month: true })}
                            onMouseEnter={() => setHoverButton({ month: true })}
                            onMouseLeave={() => setHoverButton(false)}
                        >
                            Month
                        </Button>
                        <Button
                            style={
                                year
                                    ? { backgroundColor: color, color: "white" }
                                    : hoverButton.year
                                    ? { backgroundColor: "white", color: color }
                                    : { color: "black", backgroundColor: "white" }
                            }
                            onClick={() => settoggleButton({ year: true })}
                            onMouseEnter={() => setHoverButton({ year: true })}
                            onMouseLeave={() => setHoverButton(false)}
                        >
                            Year
                        </Button>
                    </ButtonGroup>
                </div>
                {/* <div style={{ marginLeft: "10rem" }}>
                    <ButtonGroup size="lg" className="mb-2 border">
                        <Button variant="outline-secondary">Today</Button>
                        <Button variant="outline-secondary">Week</Button>
                        <Button variant="outline-secondary">Month</Button>
                        <Button variant="outline-secondary">Year</Button>
                    </ButtonGroup>
                </div> */}
                <div className="topbar-landingpage3">
                    <div className=" p-3  m-1 text-center border rounded d-flex justify-content-between">
                        <div>
                            <h6>Customers</h6>
                            <span>500</span>
                        </div>

                        <BiUser size="2em" className="float-end mt-0 text-warning" />
                    </div>
                    <div className=" p-3  m-1 text-center border rounded d-flex justify-content-between">
                        <div>
                            <h6>Orders</h6>
                            <span>50</span>
                        </div>
                        <CgShoppingCart size="2em" className="float-end mt-0  text-primary" />
                    </div>
                    <div className=" p-3  m-1 text-center border  rounded d-flex justify-content-between">
                        <div>
                            <h6>Avg Sale</h6>
                            <span>$1770</span>
                        </div>
                        <FaUsers size="2em" className="float-end mt-0 text-success" />
                    </div>
                    <div className=" p-3  m-1 text-center border  rounded d-flex justify-content-between">
                        <div>
                            <h6>Avg Item Sale</h6>
                            <span>570</span>
                        </div>
                        <RiHandbagFill size="2em" className="float-end mt-0 text-info" />
                    </div>
                    <div className=" p-3  m-1 text-center border rounded d-flex justify-content-between">
                        <div>
                            <h6>Total Sale</h6>
                            <span>$35000</span>
                        </div>
                        <HiUser size="2em" className="float-end mt-0 text-danger" />
                    </div>
                    <div className=" p-3  m-1 text-center border rounded d-flex justify-content-between">
                        <div>
                            <h6> Visitors</h6>
                            <span>1000</span>
                        </div>
                        <FaUsers size="2em" className="float-end mt-0 text-danger" />
                    </div>
                    <div className=" p-3  m-1 text-center border  rounded d-flex justify-content-between">
                        <div>
                            <h6> Total Products</h6>
                            <span>150000</span>
                        </div>
                        <FaUsers size="2em" className="float-end mt-0" />
                    </div>
                    <div className=" p-3  m-1 text-center border rounded d-flex justify-content-between ">
                        <div>
                            <h6> Top Selling Item</h6>
                            <span>234</span>
                        </div>
                        <FaUsers size="2em" className="float-end mt-0 text-warning" />
                    </div>
                    <div className=" p-3  m-1 text-center border rounded d-flex justify-content-between">
                        <div>
                            <h6>Dealership</h6>
                            <span>32</span>
                        </div>

                        <FaUsers size="2em" className="float-end mt-0 text-black" />
                    </div>
                </div>

                <div style={{ width: "62%", margin: "auto" }}>
                    <LineChart />
                </div>

                <div>
                    <PieChart />
                </div>
                <div>
                    <Transactions />
                </div>
            </div>
        </Container>
    );
};

export default LandingPage;
