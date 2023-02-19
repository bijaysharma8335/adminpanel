import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { RiHandbagFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../Redux/slice/themeSlice";

const Summary = () => {
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
        <>
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
            </div>{" "}
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
                    <FaUsers size="2em" className="float-end mt-0 " style={{ color: "magenta" }} />
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
                    <FaUsers
                        size="2em"
                        className="float-end mt-0 "
                        style={{ color: "lightblue" }}
                    />
                </div>
                <div className=" p-3  m-1 text-center border rounded d-flex justify-content-between">
                    <div>
                        <h6>Dealership</h6>
                        <span>32</span>
                    </div>

                    <FaUsers
                        size="2em"
                        className="float-end mt-0"
                        style={{ color: "lightcoral" }}
                    />
                </div>
            </div>
        </>
    );
};

export default Summary;
