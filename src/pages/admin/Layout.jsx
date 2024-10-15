import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/admin/common/Header";
import SidebarMenu from "../../components/admin/common/SidebarMenu";
import FooterAdmin from "../../components/admin/common/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const LayoutAdmin = () => {
    return (
        <>
            {/* TOP BAR */}
            <HeaderAdmin />
            <div className="container-fluid">
                <div className="row">
                    {/* SIDEBAR MENU  */}
                    <SidebarMenu />

                    {/* MAIN CONTENT */}
                    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                        {/* <ChartAdmin /> */}
                        <Outlet/>
                        <FooterAdmin />
                    </main>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition: Bounce
                />
            <ToastContainer />
        </>

    );
};

export default LayoutAdmin;
