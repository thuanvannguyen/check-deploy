import React from "react";
import { Link } from "react-router-dom";
import ProductForm from "../../components/admin/form/ProductForm";

const CreateProduct = () => {
    return (
        <>
            <div className="title-group mb-3">
                <h1 className="h2 mb-0">Thêm Sản Phẩm</h1>
            </div>
            <div className="row my-4">
                <div className="col-lg-12 col-12">
                    <div className="custom-block bg-white">
                        <button className="bg-teal-500 px-4 py-2 mb-3 rounded-xl">
                            <Link
                                to={"/dashboard/product"}
                                className="text-white"
                            >
                                Quay lại
                            </Link>
                        </button>
                        <ProductForm/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateProduct;
