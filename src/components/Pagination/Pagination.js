import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Pagination = ({pageNumber, setPageNumber, info}) => {
  return (<ReactPaginator>
    <ReactPaginate 
  className="pagination justify-content-center gap-4 my-4"
  forcePage={pageNumber === 1? 0 : pageNumber - 1}
  previousLabel="Prev"
  nextLabel="Next"
  previousClassName="btn"
  nextClassName="btn"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"
  onPageChange={(data) => {
    setPageNumber (data.selected + 1)}}
  pageCount={info?.pages
  } />
    </ReactPaginator>)
};

const ReactPaginator = styled.div`
  font-size: 20px;
`

export default Pagination;
