import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationList = ({ pageNumbers, currentPage, setCurrentPage,pagesCount }) => {
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Pagination size="lg">
            <Pagination.First
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
            />
            <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {pageNumbers.map((number) => (
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            ))}
            <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pagesCount}
            />
            <Pagination.Last
                onClick={() => setCurrentPage(pagesCount)}
                disabled={currentPage === pagesCount}
            />
        </Pagination>
    );
};

export default PaginationList;
