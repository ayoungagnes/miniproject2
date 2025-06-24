import React from "react";
import { useState, useContext } from "react";


const RoomContext = React.createContext();

export const RoomProvider = (props) => {

  const [currentRoom, setCurrentRoom] = useState([]);

  const handleUpdateRoom = (user) => {
  
    setCurrentRoom((prevUser) => [...prevUser, user]);
  };


  return (
    <RoomContext.Provider value={{ currentRoom, handleUpdateRoom }}>
      {props.children}
    </RoomContext.Provider>
  );
};


export const useRoomContext = () => {
  return useContext(RoomContext);
};

