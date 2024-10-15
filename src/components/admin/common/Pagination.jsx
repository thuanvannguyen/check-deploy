import React from "react";

const PaginationDashboard = ({ totalPages, currentPage, setCurrentPage }) => {
    
    // Biến tổng trang thành 1 mảng các số [1,2,3]
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers);
    

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                    <button
                        className="page-link"
                        aria-label="Prev"
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <span aria-hidden="true">Prev</span>
                    </button>
                </li>

                {/* Dùng vòng lặp */}
                {pageNumbers.map((value) => {
                    return (
                        <li
                            className={`page-item ${
                                value === currentPage ? "active" : ""
                            }`}
                            key={value}
                        >
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(value)}
                            >
                                {value}
                            </button>
                        </li>
                    );
                })}

                <li className="page-item">
                    <button
                        className="page-link"
                        aria-label="Next"
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <span aria-hidden="true">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default PaginationDashboard;
