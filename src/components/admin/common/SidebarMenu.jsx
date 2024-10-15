import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarMenu = () => {

    const redirect = useNavigate();
    const isActive = useLocation(); // Current path
    

    const handleLogOut = () => {
        localStorage.clear();
        redirect("/login");
    }

    // Check url 
    const menuActive = (path) => {
        return isActive.pathname == path ? "nav-link active" : "nav-link";
    }

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar">
            <div className="position-sticky py-4 px-3 sidebar-sticky">
                <ul className="nav flex-column h-100">
                    <li className="nav-item">
                        <Link
                            className={menuActive("/dashboard")}
                            to="/dashboard"
                        >
                            <i className="bi-house-fill me-2" />
                            Tổng quan
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={menuActive("/dashboard/product")}
                            to="/dashboard/product"
                        >
                            <i className="bi-house-fill me-2" />
                            Sản phẩm
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={menuActive("/dashboard/setting")}
                            to="/dashboard/setting"
                        >
                            <i className="bi-house-fill me-2" />
                            Cài đặt
                        </Link>
                    </li>
                    <li className="nav-item border-top mt-auto pt-2">
                        <div className="nav-link" onClick={handleLogOut}>
                            <i className="bi-box-arrow-left me-2" />
                            Logout
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SidebarMenu;
