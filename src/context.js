import React, { Component } from "react";
import items from "./data";
import client from "./contenfull";

client
  .getEntries({
    content_type: "hotelBeach"
  })
  .then(response => console.log(response.items))
  .catch(console.error);

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedrooms: [],
    featuredrooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  //GETING DATA FROM CONTENFULLY API
  getData = async () => {
    try {
      let response = await client.getEntries({
        content_type: "hotelBeach",
        //IF YOU WANT TO ARRANGE THE ITEMS IN ORDER
        // order: "sys.createdAt"

        //ORDER BY THE PRICE
        order: "fields.price"

        //RESERVE OTHER
        // order:'-fields.price'
      });

      let rooms = this.formatData(response.items);
      let featuredrooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      this.setState({
        // Since the rooms are named thesame no need of 'rooms:rooms' this ES6 format
        rooms,
        featuredrooms,
        sortedrooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    //GETING DATA LOCALLY
    // let rooms = this.formatData(items);
    // let featuredrooms = rooms.filter(room => room.featured === true);
    // let maxPrice = Math.max(...rooms.map(item => item.price));
    // let maxSize = Math.max(...rooms.map(item => item.size));
    // this.setState({
    //   // Since the rooms are named thesame no need of 'rooms:rooms' this ES6 format
    //   rooms,
    //   featuredrooms,
    //   sortedrooms: rooms,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize
    // });
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const myroom = tempRooms.find(room => room.slug === slug);
    return myroom;
  };

  formatData(myrooms) {
    let tempMyrooms = myrooms.map(ourooms => {
      let id = ourooms.sys.id;
      let myImages = ourooms.fields.images.map(
        roomimage => roomimage.fields.file.url
      );
      let room = { ...ourooms.fields, images: myImages, id };
      return room;
    });

    return tempMyrooms;
  }

  handleChange = event => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value
      },
      this.filterRoom
    );
  };

  filterRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //GETING ALL THE ROOMS
    let tempRooms = [...rooms];

    //CONVERTING  TO INTEGER
    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    //FILTER BY TYPE
    if (type !== "all") {
      tempRooms = tempRooms.filter(item => item.type === type);
    }

    //FILTER BY CAPACITY
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(item => item.capacity >= capacity);
    }

    //FILTER BY PRICE

    tempRooms = tempRooms.filter(item => item.price <= price);

    //FILTER BY SIZE
    tempRooms = tempRooms.filter(
      item => item.size >= minSize && item.size <= maxSize
    );

    //FILTER BY BREAKFAST
    if (breakfast) {
      tempRooms = tempRooms.filter(item => item.breakfast === true);
    }
    //FILTER BY BREAKFAST
    if (pets) {
      tempRooms = tempRooms.filter(item => item.pets === true);
    }

    this.setState({
      sortedrooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

//When using a higher Other function instide of the CONSUMER
export function withRoomConsumer(MYcomponents) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <MYcomponents {...props} contexts={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
