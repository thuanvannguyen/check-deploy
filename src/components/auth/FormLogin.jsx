import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url_login } from "../../untils/variable";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormLogin = () => {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const redirect = useNavigate();

    // B1: Lấy được email và mật khẩu của user.
    const user = {
        email: emailUser,
        password: passwordUser,
    };

    // B2: Gửi thông tin user lên sever với API

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const res = await axios.post(url_login, user);
            console.log(res);
            setIsLoading(false);

            // Lưu lại info user localStorage
            localStorage.setItem("USER-INFO", JSON.stringify(res.data.user));

            // Hien thi thong bao dang nhap thanh cong
            toast.success("🦄 Login Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            // Chuyển hướng về Dashboard
            setTimeout(() => {
                redirect("/dashboard");
            },2000)

        } catch (error) {
            setIsLoading(false);
            throw new error();
        }
    };
    
    // Check người dùng đăng nhập hay chưa ?
    useEffect( () => {
        const isAuth = JSON.parse(localStorage.getItem("USER-INFO"));
        console.log(isAuth);
        if (isAuth) return redirect("/dashboard")
    }, [] );

    return (
        <>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="tk là: test@test.com"
                        required=""
                        onChange={(e) => setEmailUser(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••: test"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        autoComplete="on"
                        onChange={(e) => setPasswordUser(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required=""
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="remember"
                                className="text-gray-500 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <Link
                        to="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Forgot password?
                    </Link>
                </div>
                <button
                    type="submit"
                    disabled={isLoading ? true : false}
                    className={`w-full text-white ${
                        isLoading ? "bg-[#000]" : "bg-primary-600"
                    }  hover:bg-primary-700 focus:ring-4 focus:outline-none 
                    focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                >
                    {isLoading ? "Login..." : "Sign in"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                        to="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
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
                transition:Bounce
            />
        </>
    );
};

export default FormLogin;

// axios.post()

// -> 2 phần: url + giá trị người dùng gửi lên
