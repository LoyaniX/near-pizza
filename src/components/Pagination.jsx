import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setPageCount } from '../redux/slices/filterSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector((state) => state.filter.pageCount);

  const onChangePage = (page) => {
    dispatch(setPageCount(page));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={pageCount - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
