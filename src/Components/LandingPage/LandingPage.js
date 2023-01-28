import React from "react";
import { Container, Row } from "react-bootstrap";
import { HiUser } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { FaUsers } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { RiHandbagFill } from "react-icons/ri";
import Transactions from "./Transactions";

const LandingPage = ({ toggle, setToggle }) => {
    console.log(toggle);
    return (
        <Container className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-80vw"}>
                <Row style={{ marginLeft: "10rem" }}>
                    <div className="col-md-4 p-3 bg-light m-1 text-center border">
                        <h6>Customers</h6>
                        <span>500</span>
                        <BiUser size="2em" className="float-end mt-0" />
                    </div>
                    <div className="col-md-3 p-3 bg-light m-1 text-center border">
                        <h6>Orders</h6>
                        <span>50</span>
                        <CgShoppingCart size="2em" className="float-end mt-0" />
                    </div>
                    <div className="col-md-4 p-3 bg-light m-1 text-center border">
                        <h6>Visitors</h6>
                        <span>40</span>
                        <FaUsers size="2em" className="float-end mt-0" />
                    </div>
                    <div className="col-md-4 p-3 bg-light m-1 text-center border">
                        <h6>Total Products</h6>
                        <span>570</span>
                        <RiHandbagFill size="2em" className="float-end mt-0" />
                    </div>
                    <div className="col-md-3 p-3 bg-light m-1 text-center border">
                        <h6>Active Customers</h6>
                        <span>1000</span>
                        <HiUser size="2em" className="float-end mt-0" />
                    </div>
                    <div className="col-md-4 p-3 bg-light m-1 text-center border">
                        <h6> Visitors</h6>
                        <span>100</span>
                        <FaUsers size="2em" className="float-end mt-0" />
                    </div>
                </Row>

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
