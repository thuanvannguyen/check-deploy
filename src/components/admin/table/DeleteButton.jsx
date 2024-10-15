import axios from "axios";
import React, { useState } from "react";
import { urlProducts } from "../../../untils/variable";
import { Bounce, toast } from "react-toastify";

const DeleteButtonDashBoard = ({id, removeItem}) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = () => {
        const deleteProduct = async () => {
            try {
                setIsLoading(true); // Chuẩn bị xóa
                const res = await axios.delete(urlProducts + "/" + id);
                setIsLoading(false); // Xóa xong rồi

                // Cập nhật lại dữ liệu data listing
                removeItem(id);

                toast.success("🦄 Xóa thành công!", {
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
            } catch (error) {
                toast.error("🦄 Xóa thất bại", {
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
                throw new error;
            }
        }
        deleteProduct();
    };
    return (
        <button
            disabled={isLoading ? true : false}
            type="button"
            className={`focus:outline-none text-white ${
                isLoading ? "bg-black" : "bg-red-700"
            } hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1`}
            onClick={handleDelete}
        >
            Delete
        </button>
    );
};

export default DeleteButtonDashBoard;
