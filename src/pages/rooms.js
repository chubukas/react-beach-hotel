import React from "react";
import Hero from "../component/hero";
import Banner from "../component/banner";
import { Link } from "react-router-dom";
import RoomContainer from "../component/roomscontainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
