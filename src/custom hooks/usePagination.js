import { useState } from "react";

const usePagination = ({ data }) => {
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const pagesCount = Math.ceil(data.length / itemsPerPage);
    return {
        indexOfFirstItem,
        currentData,
        pageNumbers,
        currentPage,
        pagesCount,
        setCurrentPage,
    };
};

export default usePagination;
