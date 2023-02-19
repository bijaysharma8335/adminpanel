import React, { useState } from "react";
import "./ThemeSettings.css";
import { MdOutlineCancel } from "react-icons/md";

import { BsCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "react-bootstrap";
import {
    getBackgroundColor,
    getThemeColor,
    setBackgroundColor,
    setThemeColor,
} from "../Redux/slice/themeSlice";
import { themeColors } from "../constants/constant";

const ThemeSettings = ({ theme, setTheme }) => {
    const dispatch = useDispatch();
    const color = useSelector(getThemeColor);

    const background = useSelector(getBackgroundColor);

    return (
        <div
            className="theme-container "
            style={background === "dark" ? { background: "black" } : { background: "white" }}
        >
            <div className="theme-header my-2">
                <h5>Settings</h5>
                <MdOutlineCancel size="2em" className="cursor " onClick={() => setTheme(!theme)} />
            </div>
            <hr />
            <div className=" my-2">
                <h5>Theme Option</h5>
                <div class="d-flex justify-space-evenly">
                    <Form onChange={(e) => dispatch(setBackgroundColor(e.target.value))}>
                        <Form.Check
                            type="radio"
                            value="light"
                            className="m-2"
                            id={`default-radio`}
                            label={`Light`}
                            name="background"
                            checked={background === "light"}
                        />
                        <Form.Check
                            type="radio"
                            value="dark"
                            className="m-2"
                            id={`default-radio`}
                            label={`Dark`}
                            name="background"
                            checked={background === "dark"}
                        />
                    </Form>
                </div>
            </div>
            <hr />
            <div className=" my-2">
                <h5>Theme Colors</h5>
                <div className="color-container">
                    {themeColors.map((item, index) => (
                        <div className=" color-name " key={item.name}>
                            <button
                                type="button"
                                style={{ backgroundColor: item.color, borderRadius: "50%" }}
                                className=" theme-color-btn"
                                onClick={() => dispatch(setThemeColor(item.color))}
                            >
                                <BsCheck
                                    size="3em"
                                    className="text-white fw-bold"
                                    style={
                                        item.color === color
                                            ? { display: "block" }
                                            : { display: "none" }
                                    }
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;
