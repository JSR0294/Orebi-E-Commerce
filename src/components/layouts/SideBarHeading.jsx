import React, { useState } from "react";
import Flex from "./Flex";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SideBarData from "./SideBarData";

const SideBarHeading = ({ title, showDrop }) => {
  const [showSubDrop, setShowSubDrop] = useState(false);

  return (
    <>
      {showDrop ? (
        <div
          onClick={() => setShowSubDrop(!showSubDrop)}
          className=" cursor-pointer"
        >
          <Flex className={" items-center justify-between"}>
            <h4 className=" text-xl text-primaryColor font-bold">{title}</h4>
            {
                showSubDrop ? <MdKeyboardArrowUp className="text-primaryColor text-xl" /> :
                <MdKeyboardArrowDown className="text-primaryColor text-xl" />
            }
          </Flex>
          {showSubDrop && <SideBarData title={'Color 1'} showDataDrop={false}/>}
        </div>
      ) : (
        <div>
          <h4 className=" text-xl text-primaryColor font-bold">{title}</h4>
          <SideBarData title={'Category 1'} showDataDrop={true}/>
        </div>
      )}
    </>
  );
};

export default SideBarHeading;
