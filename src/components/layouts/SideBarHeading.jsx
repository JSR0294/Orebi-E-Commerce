import React, { useState } from "react";
import Flex from "./Flex";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SideBarData from "./SideBarData";

const SideBarHeading = ({ title, showDrop, data, titleClassName }) => {
  const [showSubDrop, setShowSubDrop] = useState(false);

  return (
    <>
      {showDrop ? (
        <div
          onClick={() => setShowSubDrop(!showSubDrop)}
          className=" cursor-pointer"
        >
          <Flex className={" items-center justify-between"}>
            <h4
              className={` text-xl text-primaryColor font-bold ${titleClassName}`}
            >
              {title}
            </h4>
            {showSubDrop ? (
              <MdKeyboardArrowUp className="text-primaryColor text-xl" />
            ) : (
              <MdKeyboardArrowDown className="text-primaryColor text-xl" />
            )}
          </Flex>
          {showSubDrop &&
            data.map((value) => (
              <SideBarData
                title={value.name}
                showDataDrop={false}
                color={
                  value.hasOwnProperty("colorCode") ? value.colorCode : false
                }
              />
            ))}
        </div>
      ) : (
        <div>
          <h4
            className={` text-xl text-primaryColor font-bold ${titleClassName}`}
          >
            {title}
          </h4>
          {data.map((value) => (
            <SideBarData
              title={value.name}
              showDataDrop={value.hasOwnProperty("subCategory") ? true : false}
            >
              {value.hasOwnProperty("subCategory") &&
                value.subCategory.map((item) => <h5 className=" text-base text-secondaryColor mb-5 capitalize cursor-pointer">{item.name}</h5>)}
            </SideBarData>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarHeading;
