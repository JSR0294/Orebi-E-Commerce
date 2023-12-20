import React, { useState } from "react";
import Flex from "./Flex";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const SideBarData = ({ title, showDataDrop, color, children }) => {
  const [showSubDataDrop, setShowSubDataDrop] = useState(false);
  return (
   <section>
    {showDataDrop ? (
        <div
          onClick={() => setShowSubDataDrop(!showSubDataDrop)}
          className=" cursor-pointer"
        >
          <Flex className={" items-center justify-between"}>
            <h5 className=" text-base text-secondaryColor mb-5 cursor-pointer">{title}</h5>
            {showSubDataDrop ? (
              <HiMinusSm className="text-primaryColor text-xl mb-5" />
              ) : (
              <HiPlusSm className="text-primaryColor text-xl mb-5" />
            )}
          </Flex>
        </div>
      ) : (
        <div>
          {color ? (
            <Flex className={"items-center"}>
              <span
                style={{
                  background: color,
                  marginBottom: "20px",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  marginRight: "10px",
                }}
              ></span>
              <h5 className=" text-base text-secondaryColor mb-5 capitalize cursor-pointer">
                {title}
              </h5>
            </Flex>
          ) : (
            <h5 className=" text-base text-secondaryColor mb-5 capitalize cursor-pointer">
              {title}
            </h5>
          )}
        </div>
      )}
      {showSubDataDrop && children}
   </section>
  );
};

export default SideBarData;
