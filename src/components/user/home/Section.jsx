// import { products } from "../../../untils/mockup";
import ProductCard from "../common/ProductCard";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { urlProducts} from "../../../untils/variable";
import useCallApiNoPagination from "../../../hooks/useCallApiNoPagination";

const Section = () => {
    
    // // const data = products;
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // // Call API
    // useEffect(() => {
    //     const getApi = async() => {
    //         try {
    //             // Dữ liệu đang được gọi
    //             setIsLoading(true);
    //             const res = await axios.get(urlProducts);
                
    //             // Dữ liệu gọi xong
    //             setData(res.data);
    //             setIsLoading(false);
    //         }
    //         catch (err) {
    //             console.log("Lỗi: ", err);
    //         }
    //     }
    //     getApi();
    // },[]);

    const { data, isLoading } = useCallApiNoPagination(urlProducts);
    
    
    // Check API call xong chưa ?
    if (isLoading === true ) return <p>Loading...</p>

    if (data.length < 0) return <h2>Không tồn tại sản phẩm</h2>

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {data.map((product) => {
                        return (
                            <div key={product.id} className="col mb-5">
                                <ProductCard product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Section;


// Dependencies
// TH1 -> Không có giá trị gì: Logic useEffect sẽ được call liên tục.
// Gây ra tình trạng vòng lặp vô tận (call API)

// TH2 -> Nhận vào mảng rỗng []: Thực hiện logic useEffect duy nhất
// 1 lần khi load lại trình duyệt.

// TH3 -> Trong mảng tồn tại 1 giá trị: Thực hiện logic khi giá trị
// thay đổi