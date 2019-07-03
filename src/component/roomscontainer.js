import React from "react";
import RoomFilter from "./roomfilter";
import RoomList from "./roomlist";
import { withRoomConsumer } from "../context";
// import { RoomConsumer } from "../context";
import Loading from "./loading";

//USING HIGHER OTHER FUNCTION
const RoomsContainer = ({ contexts }) => {
  const { loading, sortedrooms, rooms } = contexts;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedrooms} />
    </>
  );
};

export default withRoomConsumer(RoomsContainer);

//WHEN USING A CONSUMER
// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContainer;
