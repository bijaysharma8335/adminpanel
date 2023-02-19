import React from "react";
import { Container } from "react-bootstrap";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { BiDollar, BiCreditCard, BiSmile } from "react-icons/bi";

import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Transactions from "./Transactions";
import Summary from "./Summary";

const LandingPage = ({ toggle, setToggle }) => {
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

                <Summary />
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
