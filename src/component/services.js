import React, { Component } from "react";
import Title from "./title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <i className="fa fa-home" />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas odit iste magni aut voluptatum doloribus eum ipsum."
      },
      {
        icon: <i className="fa fa-home" />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas odit iste magni aut voluptatum doloribus eum ipsum."
      },
      {
        icon: <i className="fa fa-home" />,
        title: "Free Shopping",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas odit iste magni aut voluptatum doloribus eum ipsum."
      },
      {
        icon: <i className="fa fa-home" />,
        title: "Free Beer-Weekend",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas odit iste magni aut voluptatum doloribus eum ipsum."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
