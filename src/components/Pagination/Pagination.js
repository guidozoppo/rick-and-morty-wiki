import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const Pagination = ( { info, setCurrenPage } ) => {
    const [width, setWidth] = useState(window.innerWidth);
    const pages = Math.ceil(info?.info?.pages);
    
    const changePage = (data) => {
        setCurrenPage( () => data.selected + 1 );
    }

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    
    return (
        <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        pageCount={pages}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={changePage}
        /*forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        */
        />
    );
};

export default Pagination;