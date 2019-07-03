import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./title";
import Room from "../component/room";
import Loading from "../component/loading";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredrooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
