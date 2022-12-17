import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Pagination = ({pageNumber, setPageNumber, info}) => {

  const [width, setWidth] = useState (window.innerWidth)

  const updateDimension = () => {
      setWidth (window.innerWidth)
  };

  useEffect(() => {
  window.addEventListener ("resize", updateDimension)
  return () => window.removeEventListener ("resize", updateDimension)
  }, [])

  return (
    <>
      <style jsx>
       {`
          @media (max-width: 768px) {
              .next, .prev {
                display: none;
              }

              .pagination {
                font-size: 14px;
              }
          }
          
      `}
      </style>


    <ReactPaginator>
    <ReactPaginate 
  className="pagination justify-content-center gap-4 my-4"
  forcePage={pageNumber === 1? 0 : pageNumber - 1}
  previousLabel="Prev"
  nextLabel="Next"
  previousClassName="btn prev"
  nextClassName="btn next"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"
  marginPagesDisplayed={width < 576 ? 1 : 2}
  pageRangeDisplayed={width < 576 ? 1 : 2}
  onPageChange={(data) => {
    setPageNumber (data.selected + 1)}}
  pageCount={info?.pages
  } />
    </ReactPaginator>
    </>
    )
};

const ReactPaginator = styled.div`
  font-size: 20px;
`

export default Pagination;
