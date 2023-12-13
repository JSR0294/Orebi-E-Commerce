import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import SideBar from "../components/layouts/SideBar";
import Flex from "../components/layouts/Flex";
import Paginate from "../components/layouts/Paginate";
import Filter from "../components/layouts/Filter";
import { BsFillGridFill, BsListStars } from "react-icons/bs";


const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let getAllProducts = async () => {
      await fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((error) => error);
    };
    getAllProducts();
  }, []);
  const [displayView, setDisplayView] = useState ();
  
  return (
    <section>
      <Container>
        <Breadcrumb
          pageTitle={window.location.pathname.split("/")[1]}
          pathName={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex className={" gap-x-[60px] "}>
          <SideBar />
          <Flex className={"flex-col w-[1190px]"}>
            <Flex className={"mb-5 items-center"}>
              <Flex className={"gap-x-5 w-1/3 items-center"}>
                <button onClick={''}><BsFillGridFill className="border border-[#F0F0F0] text-4xl rounded text-primaryColor hover:text-white hover:bg-primaryColor p-1"/></button>
                <button onClick={''}><BsListStars className="border border-[#F0F0F0] text-4xl rounded text-primaryColor hover:text-white hover:bg-primaryColor p-1"/></button>
              </Flex>
              <Flex className={"gap-x-10 justify-end w-2/3"}>
                <Filter title={"Sort by:"}>
                  <option value="">Featured</option>
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                </Filter>
                <Filter title={"Show:"}>
                  <option value="">36</option>
                  <option value="">24</option>
                  <option value="">48</option>
                </Filter>
              </Flex>
            </Flex>
            <Paginate itemsPerPage={12} data={products} />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
