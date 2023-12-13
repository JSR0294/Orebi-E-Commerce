import React from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import Abt1 from "../assets/About1.png";
import Abt2 from "../assets/About2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          pageTitle={window.location.pathname.split("/")[1]}
          pathName={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex className={"items-center justify-between pb-[110px] flex-wrap"}>
          <Link to={""}>
            <Img src={Abt1} alt={Abt1} />
          </Link>
          <Link to={""}>
            <Img src={Abt2} alt={Abt2} />
          </Link>
        </Flex>
        <h3 className=" text-4xl text-primaryColor">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h3>
        <Flex className={'items-center justify-end flex-wrap'}>
          <div className="w-1/3 py-[125px]">
            <h4 className=" text-primaryColor font-bold text-2xl mb-3">Our Vision</h4>
            <p className=" text-secondaryColor text-base w-[490px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="w-1/3 py-[125px]">
            <h4 className=" text-primaryColor font-bold text-2xl mb-3">Our Story</h4>
            <p className=" text-secondaryColor text-base w-[490px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="w-1/3 py-[125px]">
            <h4 className=" text-primaryColor font-bold text-2xl mb-3">Our Brands</h4>
            <p className=" text-secondaryColor text-base w-[490px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
