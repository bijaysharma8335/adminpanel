import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import LandingPage from "./Components/LandingPage/LandingPage";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

const App = () => {
    // useState
    const [toggle, setToggle] = useState(false);
    const [sidebar, setSidebar] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        if (toggle) setSidebar(false);
        else setSidebar(true);
    }, [toggle]);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            {pathname !== "/" && (
                <Sidebar
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                    toggle={toggle}
                    setToggle={setToggle}
                    showSidebar={showSidebar}
                />
            )}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/landingpage"
                    element={
                        <LandingPage toggle={toggle} setToggle={setToggle} />
                    }
                />
            </Routes>
        </>
    );
};

export default App;
