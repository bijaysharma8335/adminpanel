import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { MdCategory, MdInventory2 } from "react-icons/md";
import { BiNotepad, BiDetail, BiPurchaseTag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbDiscount, TbFileInvoice, TbTruckReturn } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { BsCalculatorFill, BsList } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FcDepartment } from "react-icons/fc";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/landingpage",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Products",
        path: "#",
        icon: <FaIcons.FaShuttleVan />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Products Grid",
                path: "/product/grid",
                icon: <HiOutlineViewGrid />,
                cName: "sub-nav",
            },
            {
                title: "Products List",
                path: "/product/list",
                icon: <BsList />,
                cName: "sub-nav",
            },
            {
                title: "Products Details",
                path: "/product/detail",
                icon: <BiDetail />,
            },
            {
                title: "Add Product",
                path: "/product/add",
                icon: <IoIosAddCircle />,
            },
            {
                title: "Edit Product",
                path: "/product/edit",
                icon: <AiFillEdit />,
            },
        ],
    },
    {
        title: "Categories",
        path: "#",
        icon: <MdCategory />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Categories List",
                path: "/categories/list",
                icon: <BsList />,
                cName: "sub-nav",
            },
            {
                title: "Add Category",
                path: "/category/add",
                icon: <IoIosAddCircle />,
                cName: "sub-nav",
            },
            {
                title: "Edit Category",
                path: "/category/edit",
                icon: <AiFillEdit />,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Orders",
        path: "#",
        icon: <BiNotepad />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Orders List",
                path: "/orders/list",
                icon: <BsList />,
                cName: "sub-nav",
            },
            {
                title: "Orders Details",
                path: "/orders/detail",
                icon: <BiDetail />,
                cName: "sub-nav",
            },
            {
                title: "Order Invoice",
                path: "/orders/invoice",
                icon: <BiNotepad />,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Customers",
        path: "#",
        icon: <FaIcons.FaUserAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Customers List",
                path: "/customer/list",
                icon: <BsList />,
                cName: "sub-nav",
            },
            {
                title: "Customers Details",
                path: "/customer/detail",
                icon: <BiDetail />,
                cName: "sub-nav",
            },
        ],
    },

    {
        title: "Sales Promotion",
        path: "#",
        icon: <TbDiscount />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Coupons List",
                path: "/coupon/list",
                icon: <BsList />,
            },
            {
                title: "Coupons Edit",
                path: "/coupon/edit",
                icon: <AiFillEdit />,
            },
            {
                title: "Coupons Add",
                path: "/coupon/add",
                icon: <IoIosAddCircle />,
            },
        ],
    },
    {
        title: "Inventory",
        path: "#",
        icon: <MdInventory2 />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Stock List",
                path: "/stock/list",
                icon: <BsList />,
            },
            {
                title: "Stock Return",
                path: "/stock/return",
                icon: <TbTruckReturn />,
            },
            {
                title: "Suppliers",
                path: "/stock/suppliers",
                icon: <FaIcons.FaWarehouse />,
            },
            {
                title: "Purchase",
                path: "/stock/purchase",
                icon: <BiPurchaseTag />,
            },
            {
                title: "Department",
                path: "/stock/department",
                icon: <FcDepartment />,
            },
        ],
    },

    {
        title: "Accounts",
        path: "#",
        icon: <BsCalculatorFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Expenses",
                path: "/stock/list",
                icon: <BsList />,
            },
            {
                title: "Invoices",
                path: "/stock/return",
                icon: <TbFileInvoice />,
            },
        ],
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <CgProfile />,
    },
    {
        title: "Support",
        path: "#",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];
