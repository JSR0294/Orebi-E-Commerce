import React from "react";
import SideBarHeading from "./SideBarHeading";

const SideBar = () => {
  return (
    <div className="w-[370px]">
      <SideBarHeading title={"Shop By Category"} showDrop={false}/>
      <SideBarHeading title={"Shop By Color"} showDrop={true}/>
      <SideBarHeading title={"Shop By Brand"} showDrop={true}/>
      <SideBarHeading title={"Shop By Price"} showDrop={false}/>
    </div>
  );
};

export default SideBar;
