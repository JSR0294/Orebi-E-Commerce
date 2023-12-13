import React from "react";
import Img from "./Img";
import Flex from "./Flex";
import { BiSolidHeart, BiGitCompare, BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Product = ({
  className,
  hoverClassName,
  showBadge,
  showColorChoice,
  productImg,
  badgeTitle,
  productName,
  productPrice,
  colorChoice,
}) => {
  return (
    <div className={`${className} font-dm relative group overflow-hidden cursor-pointer`}>
      {showBadge && (
        <div className="bg-black absolute top-5 left-6 font-dm text-white py-2 px-8 text-base z-10">
          {badgeTitle}
        </div>
      )}
      <Img src={productImg} imgClassName={"w-[370px] h-[370px]"} />
      <div className={`${hoverClassName} w-full absolute scale-0 group-hover:scale-100 transition-all bg-white px-8 py-6`}>
        <Link to ={""} className="block">
          <Flex className={"items-center justify-end gap-x-4"}>
            <h5 className="font-dm text-secondaryColor font-normal text-base hover:text-primaryColor hover:font-semibold transition-all">
              Add to Wish List
            </h5>
            <BiSolidHeart />
          </Flex>
        </Link>
        <Link to ={""} className="block">
          <Flex className={"items-center justify-end gap-x-4 my-5"}>
            <h5 className="font-dm text-secondaryColor font-normal text-base hover:text-primaryColor hover:font-semibold transition-all">
              Compare
            </h5>
            <BiGitCompare />
          </Flex>
        </Link>
        <Link to ={""} className="block">
          <Flex className={"items-center justify-end gap-x-4"}>
            <h5 className="font-dm text-secondaryColor font-normal text-base hover:text-primaryColor hover:font-semibold transition-all">
              Add to Cart
            </h5>
            <BiCartAlt />
          </Flex>
        </Link>
      </div>
      <Flex className={"items-center justify-between mt-5"}>
        <h3 className="font-bold text-xl text-primaryColor">{productName}</h3>
        <h6 className="font-regular text-base text-secondaryColor">
          {productPrice}
        </h6>
      </Flex>
      {showColorChoice && (
        <h6 className="text-base text-secondaryColor capitalize mt-4">
          {colorChoice}
        </h6>
      )}
    </div>
  );
};

export default Product;
