import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationList = ({ pageNumbers, currentPage, setCurrentPage }) => {
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Pagination size="lg">
            {pageNumbers.map((number) => (
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            ))}
        </Pagination>
    );
};

export default PaginationList;
