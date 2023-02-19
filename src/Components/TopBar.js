import React, { useState } from "react";
import { Form, Row, Image, Modal } from "react-bootstrap";
import { MdSettings } from "react-icons/md";
import { IoMdNotifications, IoMdHelpCircle } from "react-icons/io";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useSelector } from "react-redux";

import { getProfile } from "../Redux/slice/profileSlice";

const TopBar = ({theme,setTheme}) => {
    const profile = useSelector(getProfile);
    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {show && (
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        background: "rgba(0, 0, 0, 0.2)",
                        height: "100vh",
                        width: "100vw",
                        zIndex: 2,
                    }}
                    onClick={handleClose}
                ></div>
            )}
            <Form.Control type="search" placeholder="search" style={{ width: "30%" }} />
            <div
                style={{ gap: "2rem" }}
                className=" text-center d-flex flex-row justify-content-end align-items-center position-relative"
            >
                <IoMdHelpCircle className="cursor my-2" size="2em" />
                <IoMdNotifications className="cursor my-2" size="2em" />
                <div onClick={() => handleShow()}>
                    <span className=" text-white fw-bold cursor" style={{ letterSpacing: "1px" }}>
                        Bijay <small>{show ? <HiChevronUp /> : <HiChevronDown />}</small>
                    </span>
                </div>
                {show && (
                    <div
                        className="justify-content-end position-absolute px-4 py-2"
                        size="sm"
                        style={{
                            top: "103%",
                            zIndex: 3,
                            background: "#fff",
                            right: "3%",
                            borderRadius: "5%",
                            boxShadow: "3px 3px 3px rgb(141 141 141)",
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleShow();
                        }}
                    >
                        <div className="d-flex flex-column">
                            <div>
                                <Image
                                    src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                                    className=" mx-4 my-2 "
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="my-2">
                                <Row>
                                    <span className="cursor">{profile.name}</span>
                                </Row>
                                <Row>
                                    <span>{profile.email}</span>
                                </Row>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-start ms-2">
                            <span
                                className="  my-1 cursor"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/profile");
                                    handleClose();
                                }}
                            >
                                <FaUser className="text-dark my-2 me-2" size="1em" />
                                Profile Page
                            </span>
                        </div>
                        <div className="d-flex justify-content-start ms-2">
                            <span
                                className="my-1 cursor"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/orders/invoice");
                                    handleClose();
                                }}
                            >
                                <BiNotepad className="text-dark my-2 me-2" size="1em" />
                                Order Invoices
                            </span>
                        </div>
                        <div className="d-flex justify-content-start ms-2">
                            <span
                                className=" my-1 cursor"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/");
                                    handleClose();
                                }}
                            >
                                <FaSignOutAlt className="text-dark my-2 me-2" size="1em" />
                                Signout
                            </span>
                        </div>
                    </div>
                )}
                <MdSettings
                    className=" my-2 me-2 cursor settings-icon"
                    size="2em"
                    onClick={() => setTheme(!theme)}
                />
            </div>
        </>
    );
};

export default TopBar;
