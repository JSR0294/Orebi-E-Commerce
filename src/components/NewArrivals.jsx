import React from "react";
import Title from "./layouts/Title";
import Container from "./layouts/Container";
import Product from "./layouts/Product";
import Arrival1 from "../assets/Arrival1.png";
import Arrival2 from "../assets/Arrival2.png";
import Arrival3 from "../assets/Arrival3.png";
import Arrival4 from "../assets/Arrival4.png";
import Slider from "react-slick";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const NewArrivals = () => {
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={'cursor-pointer text-3xl py-8 px-8 rounded-full bg-[#00000033] inline-block text-white/50 hover:bg-primaryColor hover:text-white transition-all absolute top-[30%] right-[-10px] z-10'}
      onClick={onClick}
    >
      <AiOutlineArrowRight/>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={'cursor-pointer text-3xl py-8 px-8 rounded-full bg-[#00000033] inline-block text-white/50 hover:bg-primaryColor hover:text-white transition-all absolute top-[30%] left-[-50px] z-10'}
      onClick={onClick}
    >
      <AiOutlineArrowLeft className=""/>
    </div>
  );
}
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="py-[100px]">
      <Container>
        <Title title={"New Arrivals"} />
        <Slider {...settings}>
          <div>
          <Product
            showBadge={true}
            showColorChoice={false}
            productImg={Arrival1}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"10%"}
            colorChoice={"black|white|red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[48px]'}
          />
          </div>
          <div>
          <Product
            showBadge={true}
            showColorChoice={true}
            productImg={Arrival2}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white | red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[88px]'}
          />
          </div>
          <div>
          <Product
            showBadge={true}
            showColorChoice={false}
            productImg={Arrival3}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white | red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[48px]'}
          />
          </div>
          <div>
          <Product
            showBadge={true}
            showColorChoice={false}
            productImg={Arrival4}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white | red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[48px]'}
          />
          </div>
          <div>
          <Product
            showBadge={true}
            showColorChoice={false}
            productImg={Arrival1}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"10%"}
            colorChoice={"black|white|red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[48px]'}
          />
          </div>
          <div>
          <Product
            showBadge={true}
            showColorChoice={true}
            productImg={Arrival2}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white | red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[88px]'}
          />
          </div>
          <div>
          <Product
            showBadge={true}
            showColorChoice={false}
            productImg={Arrival3}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white | red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[48px]'}
          />
          </div>
          <div>
          <Product
            showBadge={true}
            showColorChoice={false}
            productImg={Arrival4}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white | red"}
            className={'mx-5 left-[-20px]'}
            hoverClassName={'bottom-[48px]'}
          />
          </div>
          </Slider>
      </Container>
    </section>
  );
};

export default NewArrivals;
