/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import MainContext from '@/context/MainContext';
import Items from './Items';
import SearchInput from '../SearchInput';

const left = <AiFillCaretLeft size={'2em'} className="fill-primary-green" />;
const right = <AiFillCaretRight size={'2em'} className="fill-primary-green" />;

function PaginatedItems({ itemsPerPage }) {
  const { api, data, setData, itemOffset, setItemOffset, searchInput } =
    useContext(MainContext);

  const filtered = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log(filtered);

  useEffect(() => {
    if (searchInput === '') {
      setData(api);
    } else {
      const filtered = api.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );

      setData(filtered);
    }
  }, [searchInput]);

  const endOffset = itemOffset + itemsPerPage;
  let currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <SearchInput />
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="flex flex-row items-center justify-center list-none mx-auto text-white absolute bottom-[10px] w-[375px]"
        breakLabel="..."
        nextLabel={right}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        pageClassName="px-[5px] title text-[24px] text-center"
        previousLabel={left}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
