import React from "react";
import Banner from "../components/Banner";
import Policy from "../components/Policy";
import Ads from "../components/Ads";
import Ads2 from "../components/Ads2";
import NewArrivals from "../components/NewArrivals";
import Bestsellers from "../components/Bestsellers";
import SpecialOffers from "../components/SpecialOffers";



const Home = () => {
  return (
    <>
      <Banner/>
      <Policy/>
      <Ads/>
      <NewArrivals/>
      <Bestsellers/>
      <Ads2/>
      <SpecialOffers/>
    </>
  );
};

export default Home;
