import axios from "axios";
import { useState, useEffect } from "react";

const useCallApiNoPagination = ( urlProducts, itemsPerPage = 5) => {
    // const data = products;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [totalPages, setTotalPages] = useState(1); // Tổng số trang

    let params = `?_page=${currentPage}&_limit=${itemsPerPage}`;

    // Call API
    useEffect(() => {
        const getApi = async () => {
            try {
                // Dữ liệu đang được gọi
                setIsLoading(true);
                const res = await axios.get(urlProducts + params);

                // Dữ liệu gọi xong
                setData(res.data);
                setIsLoading(false);

                // Tính tổng số trang
                let totalItems = parseInt(res.headers["x-total-count"]); // Tổng sp trong db
                setTotalPages(Math.ceil(totalItems / itemsPerPage));
            } catch (err) {
                console.log("Lỗi: ", err);
            }
        };
        getApi();
    }, [urlProducts, currentPage]);


    // Logic update lại data khi remove item
    const removeItem = (id) => {
        const newData = data.filter((olData) => {
            return olData.id !==  id;
        });
        return setData(newData);
    };

    return {
        data,
        isLoading,
        removeItem,
        totalPages,
        currentPage,
        setCurrentPage,
    };
};

export default useCallApiNoPagination;
