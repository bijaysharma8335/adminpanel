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
import CategoryList from "./Components/Categories/CategoriesList";
import AddCategory from "./Components/Categories/AddCategory";
import EditCategory from "./Components/Categories/EditCategory";
import OrderInvoice from "./Components/Orders/OrderInvoice";
import CouponList from "./Components/Coupons/CouponList";
import AddCoupon from "./Components/Coupons/AddCoupon";
import EditCoupon from "./Components/Coupons/EditCoupon";
import StockList from "./Components/Inventory/StockList";
import StockReturn from "./Components/Inventory/StockReturn";
import Profile from './Components/Profile';

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
                    path="/orders/invoice"
                    element={
                        <OrderInvoice toggle={toggle} setToggle={setToggle} />
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
                <Route
                    exact
                    path="/categories/list"
                    element={
                        <CategoryList toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/category/add"
                    element={
                        <AddCategory toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/category/edit"
                    element={
                        <EditCategory toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/coupon/list"
                    element={
                        <CouponList toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/coupon/add"
                    element={
                        <AddCoupon toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/coupon/edit"
                    element={
                        <EditCoupon toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/stock/list"
                    element={
                        <StockList toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/stock/return"
                    element={
                        <StockReturn toggle={toggle} setToggle={setToggle} />
                    }
                />
                <Route
                    exact
                    path="/profile"
                    element={
                        <Profile toggle={toggle} setToggle={setToggle} />
                    }
                />
            </Routes>
        </>
    );
};

export default App;
