import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import LandingPage from "./Components/LandingPage/LandingPage";
import Sidebar from "./Components/Sidebar/Sidebar";
import CustomerList from "./Components/Customers/CustomerList";
import CustomerDetail from "./Components/Customers/CustomerDetail";
import OrderList from "./Components/Orders/OrderList";
import OrderDetail from "./Components/Orders/OrderDetail";
import ProductList from "./Components/Products/ProductList";
import ProductGrid from "./Components/Products/ProductGrid";
import ProductDetail from "./Components/Products/ProductDetail";
import AddProduct from "./Components/Products/AddProduct";
import EditProduct from "./Components/Products/EditProduct";

const App = () => {
   
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
                <Route
                    exact
                    path="/customer/list"
                    element={
                        <CustomerList toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/customer/detail"
                    element={
                        <CustomerDetail toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/orders/list"
                    element={
                        <OrderList toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/product/list"
                    element={
                        <ProductList toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/product/add"
                    element={
                        <AddProduct toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/product/edit"
                    element={
                        <EditProduct toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/product/grid"
                    element={
                        <ProductGrid toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/product/detail"
                    element={
                        <ProductDetail toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/orders/detail"
                    element={
                        <OrderDetail toggle={toggle} setToggle={setToggle} />
                    }
                />
            </Routes>
        </>
    );
};

export default App;
