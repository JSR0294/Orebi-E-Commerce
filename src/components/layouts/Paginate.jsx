import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import Flex from "./Flex";
const Paginate = ({ itemsPerPage, data }) => {
  const items = data;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((product) => (
            <Product
              showBadge={true}
              showColorChoice={true}
              productImg={product.thumbnail}
              productName={"Basic Crew Neck Tee"}
              productPrice={`$${product.price}`}
              badgeTitle={"In Stock"}
              colorChoice={product.category}
              className={"left-[-20px]"}
              hoverClassName={"bottom-[88px]"}
            />
          ))}
      </>
    );
  }
  const [itemOffset, setItemOffset] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setLastPage(event.selected === pageCount - 1);
  };
  return (
    <>
      <Flex className={"gap-x-8 flex-wrap gap-y-12 justify-center"}>
        <Items currentItems={currentItems} />
      </Flex>
      <ReactPaginate
        className="flex gap-x-4 mt-[50px] mb-[150px] items-center relative"
        pageLinkClassName="py-2 px-4 inline-block"
        pageClassName="border border-[#F0F0F0]"
        activeClassName="bg-primaryColor text-white px-1"
        breakLabel="..."
        breakClassName="self-end"
        nextLabel={`Products from ${itemOffset === 0 ? 1 : itemOffset} to ${lastPage ? items.length : endOffset} of ${items.length}`}
        nextClassName="absolute right-0"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
