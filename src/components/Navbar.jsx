import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";
import Logo from "../assets/logo.png";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import { FaBars } from "react-icons/fa";
import Btn from "./layouts/Btn";

const Navbar = () => {
  return (
    <nav className="py-8 px-4">
      <Container>
        <Flex className="items-center">
          <Img src={Logo} alt={Logo} className="sm:w-1/12 w-full" />
          <div className="w-7/12">
            <FaBars className="sm:hidden ml-auto text-xl text-primaryColor cursor-pointer" />
            <List className="sm:flex text-sm font-semibold gap-x-10 justify-center sm:text-secondaryColor absolute w-full left-0 top-20 sm:top-0 sm:relative sm:bg-transparent bg-[#262626] text-white/70 z-10">
              <ListItem
                listName={"Home"}
                linkClassName={
                  "sm:p-0 sm:hover:p-0 sm:hover:text-[#262626] py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                }
                link={"/"}
              />
              <ListItem
                listName={"Shop"}
                linkClassName={
                  "sm:p-0 sm:hover:p-0 sm:hover:text-[#262626] py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                }
                link={"/products"}
              />
              <ListItem
                listName={"About"}
                linkClassName={
                  "sm:p-0 sm:hover:p-0 sm:hover:text-[#262626] py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                }
                link={"/about"}
              />
              <ListItem
                listName={"Contacts"}
                linkClassName={
                  "sm:p-0 sm:hover:p-0 sm:hover:text-[#262626] py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                }
                link={"/contact"}
              />
              <ListItem
                listName={"Journal"}
                linkClassName={
                  "sm:p-0 sm:hover:p-0 sm:hover:text-[#262626] py-4 block px-5 hover:px-8 hover:text-white hover:font-bold transition-all"
                }
                link={"/journal"}
              />
            </List>
          </div>
        <Flex className={'items-center justify-end w-4/12 gap-x-10'}>
          <Btn
            btnName={"Login"}
            className={"py-4 px-20 bg-primaryColor text-white font-bold text-sm rounded"} link={'/login'}
          />
          <Btn
            btnName={"Sign up"}
            className={"py-4 px-20 border border-primaryColor text-primaryColor font-bold text-sm rounded"} link={'/signup'}
          />
        </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
