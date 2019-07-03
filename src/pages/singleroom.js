import React, { Component } from "react";
import Hero from "../component/hero";
import { Link } from "react-router-dom";
import { RoomContext, RoomConsumer } from "../context";
import Banner from "../component/banner";
import defaultImg from "../images/room-2.jpeg";
import MyHero from "../component/styledhero";

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultImg
  };

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>Room Not Found In Our DataBase...</h3>
          <Link to="/rooms" className="btn-primary">
            Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImgs] = images;
    return (
      <>
        <MyHero img={mainImg[0] || this.state.defaultImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </MyHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((img, index) => {
              return <img key={index} src={img} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size}SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} People` : `${capacity} Person`}
              </h6>
              <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
              <h6>{breakfast && "Free Breakfast Included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>*{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
