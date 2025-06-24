import React from "react";
import { useState, useContext } from "react";


const RoomContext = React.createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const RoomProvider = (props) => {
  // store the current user in state at the top level
  const [currentRoom, setCurrentRoom] = useState([]);
  // sets user object in state, shared via context
  const handleUpdateRoom = (user) => {
    // console.log(user);
    // setCurrentRoom(user);
    setCurrentRoom((prevUser) => [...prevUser, user]);
  };

  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <RoomContext.Provider value={{ currentRoom, handleUpdateRoom }}>
      {props.children}
    </RoomContext.Provider>
  );
};

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useRoomContext = () => {
  return useContext(RoomContext);
};
// Save as UserContext.jsx in a
