import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import Gallery from './Gallery';


function PaginatedItems({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Gallery images={currentItems} />
      <div className='PaginationWrapper'>
      <div className='Pagination'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
      </div>
      </div>
    </>
  );
}

export default PaginatedItems;