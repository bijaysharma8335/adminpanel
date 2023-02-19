import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getThemeColor } from "../../Redux/slice/themeSlice";

const ProductButtonGroup = ({ type }) => {
    const color = useSelector(getThemeColor);
    
    return (
        <div className=" justify-content-end">
            <div size="sm" className="mb-2 border p-1">
                <Link
                    className="me-1 p-2 text-decoration-none active"
                    activeClassName="active"
                    style={
                        type === "list"
                            ? { backgroundColor: color, color: "white" }
                            : { backgroundColor: "white", color: "black" }
                    }
                    activeStyle={{ color: color }}
                    to="/product/list"
                >
                    <FaListUl className="my-2 me-1" />
                    List View
                </Link>
                <Link
                    className="ms-1 p-2 text-decoration-none"
                    activeClassName="active"
                    style={
                        type === "grid"
                            ? { backgroundColor: color, color: "white" }
                            : { backgroundColor: "white", color: "black" }
                    }
                    activeStyle={{ color: color }}
                    to="/product/grid"
                >
                    <FiGrid className="my-2 me-1" />
                    Grid View
                </Link>
            </div>
        </div>
    );
};
export default ProductButtonGroup;