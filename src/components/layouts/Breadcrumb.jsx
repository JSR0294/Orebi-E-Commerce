import React, { useState } from "react";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = ({ pageTitle, path, pathName }) => {
  const [showProductPath, setShowProductPath] = useState(false);
  return (
    <div className="py-[125px] capitalize">
      <h2 className="text-5xl font-bold text-primaryColor mb-4">{pageTitle}</h2>
      <Flex className={"items-center gap-x-2"}>
        <Link to={"/"} className="font-normal text-xs text-secondaryColor">
          Home
        </Link>
        <IoIosArrowForward className=" text-xs text-secondaryColor" />
        <Link to={path} className="font-normal text-xs text-secondaryColor">{pathName}</Link>
        {showProductPath && (
          <Flex className={"items-center gap-x-2"}>
            <IoIosArrowForward className=" text-xs text-secondaryColor"/>
            <Link to={"/shop"} className="font-normal text-xs text-secondaryColor">Product</Link>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default Breadcrumb;
