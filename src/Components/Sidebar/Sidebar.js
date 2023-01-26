import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import TopBar from "../TopBar";

import { useEffect } from "react";

const Nav = styled.div`
    background: #15171c;
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 18em;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 56px;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
    max-height: 100vh;
    overflow-y: scroll;
    transition: "margin-left 1s cubic-bezier(.47,.45,.46,.45);";
`;

const SidebarWrap = styled.div`
    width: 100%;
    min-height: 100vh;
`;
const Sidebar = ({ toggle, setToggle, sidebar, setSidebar, showSidebar }) => {
    useEffect(() => {
        if (toggle) setSidebar(false);
        else setSidebar(true);
    }, [toggle]);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff", size: 20 }}>
                <Nav style={{ position: "sticky", top: "0", zIndex: "999" }}>
                    <NavIcon to="#">
                        <FaIcons.FaBars
                            onClick={() => {
                                showSidebar();
                                setToggle(!toggle);
                            }}
                        />
                        {/* <Image
                            src=""
                            width={43}
                            height={43}
                            className=" ms-5 "
                        /> */}
                    </NavIcon>
                    <TopBar />
                </Nav>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        {SidebarData.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
