import React, { useEffect, useRef, useState } from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import DropDown from "./layouts/DropDown";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import CartImg from "../assets/cartImg.png";
import Img from "./layouts/Img";

const NavHeader = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const category = useRef();
  const cart = useRef();
  const user = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (category.current.contains(e.target)) {
        setShowCategory(!showCategory);
      } else {
        setShowCategory(false);
      }
      if (cart.current.contains(e.target)) {
        setShowCart(!showCart);
      } else {
        setShowCart(false);
      }
      if (user.current.contains(e.target)) {
        setShowUser(!showUser);
      } else {
        setShowUser(false);
      }
    });
  }, [showCategory, showUser, showCart]);
  return (
    <section className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className={"justify-between items-center"}>
          <DropDown
            className={"w-[11%] cursor-pointer relative z-10"}
            ref2={category}
          >
            <Flex className={"gap-x-3 items-center"}>
              <FaBarsStaggered className="text-[#262626]" />
              <h6 className="text-sm text-[#262626] font-normal">
                Shop by Category
              </h6>
              {showCategory && (
                <List
                  className={
                    "w-[200px] bg-[#262626] absolute text-white/70 top-10 left-0 text-sm font-normal"
                  }
                >
                  <ListItem
                    listName={"Accessories"}
                    linkClassName={
                      "py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Furniture"}
                    linkClassName={
                      "py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Electronics"}
                    linkClassName={
                      "py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Clothes"}
                    linkClassName={
                      "py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Bags"}
                    linkClassName={
                      "py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Home appliances"}
                    linkClassName={
                      "py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                </List>
              )}
            </Flex>
          </DropDown>
          <div className="w-[40%] text-sm">
            <input
              type="text"
              className="w-[600px] outline-transparent py-4 px-5 placeholder:text-sm placeholder:text-[#C4C4C4]"
              placeholder="Search Products"
            />
            <FaSearch className="inline-block ml-[-40px] cursor-pointer text-primaryColor" />
          </div>
          <Flex className={"w-[5%] justify-between items-center"}>
            <DropDown className={"cursor-pointer relative z-10"} ref2={user}>
              <Flex className={"items-center"}>
                <FaUser className="text-primaryColor" />
                <VscTriangleDown className="ml-1 text-xs text-primaryColor" />
                {showUser && (
                  <List
                    className={
                      "absolute w-[200px] capitalize text-center text-sm font-bold top-10 right-0 "
                    }
                  >
                    <ListItem
                      listName={"My Account"}
                      linkClassName={"py-4 inline-block"}
                      className={
                        "bg-[#2B2B2B] border border-[#2B2B2B] text-white"
                      }
                    />
                    <ListItem
                      listName={"Log Out"}
                      linkClassName={"py-4 inline-block"}
                      className={
                        "bg-white border border-[#F0F0F0] text-primaryColor"
                      }
                    />
                  </List>
                )}
              </Flex>
            </DropDown>
            <DropDown className={"relative z-10"} ref2={cart}>
              <FaShoppingCart className=" text-primaryColor cursor-pointer" />
              {showCart && (
                <div className="absolute w-[360px] right-0 top-9 bg-[#F5F5F3] border border-[#F0F0F0]">
                  <Flex className={"items-center justify-between p-5"}>
                    <Img
                      src={CartImg}
                      imgClassName={"w-full"}
                      className={"w-20 h-20"}
                    />
                    <div className="font-bold text-sm text-primaryColor w-[50%]">
                      <h5>Black Smart Watch</h5>
                      <h6 className="mt-3">$44.00</h6>
                    </div>
                    <ImCross className="text-primaryColor cursor-pointer text-xs" />
                  </Flex>
                  <div className="p-5 bg-white border border-[#F0F0F0]">
                    <h4 className="text-base text-[#767676] font-normal">
                      Subtotal:{" "}
                      <span className=" text-base text-primaryColor font-bold">
                        $44.00
                      </span>
                    </h4>
                    <Flex
                      className={
                        "items-center text-sm font-bold mt-3 justify-between"
                      }
                    >
                      <a
                        href=""
                        className="py-4 px-10 border border-[#2B2B2B] text-primaryColor"
                      >
                        View Cart
                      </a>
                      <a
                        href=""
                        className="py-4 px-10 bg-[#2B2B2B] border border-[#2B2B2B] text-white"
                      >
                        Checkout
                      </a>
                    </Flex>
                  </div>
                </div>
              )}
            </DropDown>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default NavHeader;
