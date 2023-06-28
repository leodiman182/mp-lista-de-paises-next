import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import MainContext from '@/context/MainContext';
import Items from './Items';

const left = <AiFillCaretLeft size={'2em'} className="left-arrow" />;
const right = <AiFillCaretRight size={'2em'} className="left-arrow" />;

function PaginatedItems({ itemsPerPage }) {
  const { api, itemOffset, setItemOffset } = useContext(MainContext);

  console.log(api);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = api.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(api.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % api.length;
    setItemOffset(newOffset);
  };

  console.log(currentItems);

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="flex flex-row items-center justify-center p-0 list-none mx-auto"
        breakLabel="..."
        nextLabel={right}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={left}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
