import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";
import Ad1 from "../assets/Ad1.png";
import Ad2 from "../assets/Ad2.png";
import Ad3 from "../assets/Ad3.png";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <Container>
      <Flex className="pt-[175px] pb-[125px] justify-between items-center">
        <Link to ="">
          <Img src={Ad1} alt={Ad1} />
        </Link>
        <Flex className='flex-col gap-10'>
          <Link to ="">
            <Img src={Ad2} alt={Ad2} />
          </Link>
          <Link to ="">
            <Img src={Ad3} alt={Ad3} />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Ads;
