import React, { useState } from "react";
import Flex from "./Flex";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const SideBarData = ({ title, showDataDrop }) => {
  const [showSubDataDrop, setShowSubDataDrop] = useState(true);
  return (
    <>
      {showDataDrop ? (
        <div
          onClick={() => setShowSubDataDrop(!showSubDataDrop)}
          className=" cursor-pointer"
        >
          <Flex className={" items-center justify-between"}>
            <h5 className=" text-base text-secondaryColor">{title}</h5>
            {showSubDataDrop ? (
              <HiPlusSm className="text-primaryColor text-xl" />
            ) : (
              <HiMinusSm className="text-primaryColor text-xl" />
            )}
          </Flex>
        </div>
      ) : (
        <div>
          <h5 className=" text-base text-secondaryColor">{title}</h5>
        </div>
      )}
    </>
  );
};

export default SideBarData;
