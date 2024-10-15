import React, { useState } from "react";
import ProductLabel from "./ProductLabel";
import { useForm } from "react-hook-form";
import axios from "axios";
import { urlProducts } from "../../../untils/variable";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const classInput = `block py-2.5 px-0 w-full text-sm text-gray-900 
bg-transparent border-1 border-b-2 border-gray-300 appearance-none 
focus:outline-none focus:ring-0 focus:border-blue-600 peer`;

const ProductForm = ({ dataOld, URL_DETAIL }) => {
    const [isLoading, setIsLoading] = useState(false);
    const redirect = useNavigate();

    // Khai báo React hook form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: dataOld ? dataOld.title : "",
            category: dataOld ? dataOld.category : "",
            image: dataOld ? dataOld.image : "",
            price: dataOld ? dataOld.price : "",
            content: dataOld ? dataOld.content : "",
        },
    });

    const onsubmit = async (data) => {
        try {
            // data: bao gồm tất cả dữ liệu người dùng nhập vào (Phải đăng ký trước bằng register với hook form)

            if (!dataOld) {
                setIsLoading(true);
                // Tạo mới sản phẩm
                await axios.post(urlProducts, data);
                setIsLoading(false);
                toast.success("🦄 Thêm thành công!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            if (dataOld) {
                setIsLoading(true);
                await axios.patch(URL_DETAIL, data);
                setIsLoading(false);
                toast.success("🦄 Sửa thành công!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }

            // Chuyển hướng về listing
            setTimeout(() => {
                redirect("/dashboard/product");
            }, 500);
        } catch (error) {
            
            if (!dataOld) {
                toast.error("🦄 Thêm mới thất bại", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            if (dataOld) {
                toast.error("🦄 Sửa thất bại", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            throw new error();
        }
    };

    return (
        <form
            className="max-w-full mx-auto my-10"
            onSubmit={handleSubmit(onsubmit)}
        >
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="title"
                    id="floating_email"
                    className={classInput}
                    placeholder=""
                    {...register("title", { required: true })}
                />
                <ProductLabel
                    htmlFor="floating_email"
                    name="Title"
                    required={true}
                />
                {errors.title && (
                    <span className="text-red-600 text-sm">
                        Trường này không được để trống !!!
                    </span>
                )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="category"
                    id="floating_password"
                    className={classInput}
                    placeholder=""
                    {...register("category")}
                />
                <ProductLabel name="Category" htmlFor="floating_password" />
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="image"
                    id="floating_repeat_password"
                    className={classInput}
                    placeholder=" "
                    {...register("image", { required: true })}
                />
                <ProductLabel
                    name="Image"
                    htmlFor="floating_repeat_password"
                    required={true}
                />
                {errors.image && (
                    <span className="text-red-600 text-sm">
                        Trường này không được để trống !!!
                    </span>
                )}
            </div>
            <div className="grid md:grid-cols-1 md:gap-6">
                <div className="relative z-0 w-full mb-3 group">
                    <input
                        type="number"
                        name="price"
                        id="floating_first_name"
                        className={classInput}
                        placeholder=" "
                        {...register("price", { required: true })}
                    />
                    <ProductLabel
                        name="Price"
                        htmlFor="floating_first_name"
                        required={true}
                    />
                    {errors.price && (
                        <span className="text-red-600 text-sm">
                            Trường này không được để trống !!!
                        </span>
                    )}
                </div>
                <div className="relative z-0 w-full mb-4 group">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Product Content <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="content"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Content..."
                        defaultValue={""}
                        {...register("content", { required: true })}
                    />
                    {errors.content && (
                        <span className="text-red-600 text-sm">
                            Trường này không được để trống !!!
                        </span>
                    )}
                </div>
            </div>
            <button
                disabled={isLoading ? true : false}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Save
            </button>
        </form>
    );
};

export default ProductForm;
