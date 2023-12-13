import React from "react";

const Filter = ({ title, children }) => {
  return (
    <div className=" text-base text-secondaryColor">
      <label htmlFor="">{title}</label>
      <select
        name=""
        id=""
        className=" py-3 px-5 w-[240px] ml-3 bg-transparent border border-[#F0F0F0] cursor-pointer"
      >
        {children}
      </select>
    </div>
  );
};

export default Filter;
