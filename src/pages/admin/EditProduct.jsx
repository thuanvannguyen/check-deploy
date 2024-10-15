import React, { useEffect, useState } from "react";
import ProductForm from "../../components/admin/form/ProductForm";
import { Link, useParams } from "react-router-dom";
import useCallApiNoPagination from "../../hooks/useCallApiNoPagination";
import { urlProducts } from "../../untils/variable";

const EditProduct = () => {
    const [oldData, setOldData] = useState([]);
    // Lấy id field cần edit
    const { id } = useParams();

    // id -> DATA
    const URL_DETAIL = urlProducts + `/${id}`;
    const { data, isLoading } = useCallApiNoPagination(URL_DETAIL);
    
    return (
        <>
            <div className="title-group mb-3">
                <h1 className="h2 mb-0">Sửa Sản Phẩm</h1>
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
                        {isLoading && <p>Loading...</p>}
                        {!isLoading && (
                            <ProductForm
                                dataOld={data}
                                URL_DETAIL={URL_DETAIL}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProduct;
