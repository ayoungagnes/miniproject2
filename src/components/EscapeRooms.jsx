import { useState } from "react";
import EachRoom from "./EachRoom";
import {  Box, Button, Typography } from "@mui/material";
const rooms = [
  {
    id: 1,
    title: "Wonderland",
    imgURL:
      "https://tse4.mm.bing.net/th?id=OIP.xQ172RH1Zyw7SOfJjOposQHaE8&pid=Api&P=0&h=180",
    theme: "fantasy",
  },
  {
    id: 2,
    title: "Pirates",
    imgURL: "https://w.wallhaven.cc/full/0j/wallhaven-0jq1rm.jpg",
    theme: "adventure",
  },
  {
    id: 3,
    title: "Vampire",
    imgURL:
      "https://wallpapers.com/images/hd/vampire-pictures-sgpwefqw5opau7k8.jpg",
    theme: "horror",
  },
  {
    id: 4,
    title: "Annabelle",
    imgURL:
      "https://tse3.mm.bing.net/th?id=OIP.6taHzAKsEOcBQK73G7b0eAHaEK&pid=Api&P=0&h=180",
    theme: "horror",
  },
  {
    id: 5,
    title: "Witches",
    imgURL:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ca29110-96b9-472b-8d5d-85700c6d7541/dgcrua8-431b288c-7266-4102-adfc-32f6d9b0561c.png/v1/fill/w_1280,h_732,q_80,strp/macbeth___three_witches__the__1_by_quantumreel_dgcrua8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvNWNhMjkxMTAtOTZiOS00NzJiLThkNWQtODU3MDBjNmQ3NTQxXC9kZ2NydWE4LTQzMWIyODhjLTcyNjYtNDEwMi1hZGZjLTMyZjZkOWIwNTYxYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-ZFuM53sirnB4Tc_IDeZ2ldsqAhggkcSDNjCI7n-VGQ",
    theme: "fantasy",
  },
  {
    id: 6,
    title: "Puzzle",
    imgURL:
      "https://tse4.mm.bing.net/th?id=OIP.aljhSXPfzJkiJV8cEY-WmQHaEJ&pid=Api&P=0&h=180",
    theme: "adventure",
  },
];

function EscapeRooms() {
  const [currentRooms, setCurrentRooms] = useState(rooms);

  function handleSortByTheme(e) {
    const selectedTheme = e.target.value;
    if (selectedTheme == "all") {
      setCurrentRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.theme == selectedTheme);
      setCurrentRooms(filtered);
    }
  }

  return (
    <div>
      <Box sx={{display:"flex", justifyContent:"flex-end", alignItems:"center",textAlign:"center",gap:"5px" }}>
      <label htmlFor="theme">Sort by theme</label>
      <select name="title" id="theme" onChange={handleSortByTheme}>
        <option value="all">All</option>
        <option value="horror">Horror</option>
        <option value="fantasy">Fantasy</option>
        <option value="adventure">Adventure</option>
      </select>
      </Box>
      <ul style={{ listStyleType: "none" }}>
        {currentRooms.map((room) => (
          <li key={room.id}>
            <EachRoom
              title={room.title}
              imgURL={room.imgURL}
              theme={room.theme}
            ></EachRoom>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EscapeRooms;
