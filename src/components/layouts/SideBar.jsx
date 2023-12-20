import React from "react";
import SideBarHeading from "./SideBarHeading";
import { category, colors, brands, price } from "../../fakedata/data";

const SideBar = () => {
  return (
    <div className="w-[370px]">
      <SideBarHeading
        titleClassName={" mb-8"}
        title={"Shop By Category"}
        showDrop={false}
        data={category}
      />
      <SideBarHeading
        titleClassName={" my-8"}
        title={"Shop By Color"}
        showDrop={true}
        data={colors}
      />
      <SideBarHeading
        titleClassName={" my-8"}
        title={"Shop By Brand"}
        showDrop={true}
        data={brands}
      />
      <SideBarHeading
        titleClassName={" my-8"}
        title={"Shop By Price"}
        showDrop={false}
        data={price}
      />
    </div>
  );
};

export default SideBar;
