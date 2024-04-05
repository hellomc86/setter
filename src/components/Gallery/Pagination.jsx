import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import Gallery from './Gallery';
import ToTop from '../ButtonElements/ToTop';
import handleClick from '../../utils/utils';


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
   
    setItemOffset(newOffset);
  };

  return (
    <>
      <Gallery items={currentItems} />
      <div className='PaginationWrapper'>
      <div className='Pagination' onClick={handleClick}>
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
      <ToTop/>
      </div>
      
    </>
  );
}

export default PaginatedItems;