import React from "react";
import Hero from "../component/hero";
import Banner from "../component/banner";
import { Link } from "react-router-dom";
import Services from "../component/services";
import FeaturedRooms from "../component/featuredrooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
