import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getThemeColor } from "../../Redux/slice/themeSlice";


const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        /* background-color: ${(props) => props.color}; */
        color: ${(props) => props.color};
        border-left: 4px solid ${(props) => props.color};
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #252831;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background-color: ${(props) => props.color};
        color: #fff;
        cursor: pointer;
    }
`;

const SubMenu = ({ item }) => {
    const color = useSelector(getThemeColor);
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav} color={color}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div style={{ color: "red" }}>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index} color={color}>
                            <div className="d-flex align-items-center justify-content-center">
                                <span> {item.icon}</span>
                                <SidebarLabel>{item.title}</SidebarLabel>
                            </div>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;
