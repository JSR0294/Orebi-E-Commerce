import React, { useState } from 'react'
import Slider from "react-slick";
import banner from "../assets/banner.png"
import Img from "./layouts/Img"
import { Link } from 'react-router-dom';
const Banner = () => {
    const [activeDot,setActiveDot] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        beforeChange: (prev, next) => {
            setActiveDot(next);
          },
        appendDots: dots => (
            <div>
              <ul style={{ margin: "0px", position: "absolute", top: "50%", transform: "translate(-50%, -50%)", left: "10%"}}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={ activeDot === i ? {
                width: "40px",
                color: "#262626",
                
                fontSize: "20px",
                borderRight: "2px #262626 solid",
                cursor: "pointer"
              } : {width: "40px",
              color: "transparent",
              fontFamily: "DM Sans",
              fontSize: "20px",
              borderRight: "2px white solid",
              cursor: "pointer"}}
            >
              0{i + 1}
            </div>
          )
      };
  return (
        <Slider {...settings}>
          <div>
            <Link to =""><Img src={banner}/></Link>
          </div>
          <div>
          <Link to =""><Img src={banner}/></Link>
          </div>
          <div>
          <Link to =""><Img src={banner}/></Link>
          </div>
        </Slider>
  )
}

export default Banner