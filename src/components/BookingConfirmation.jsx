// import { useNavigate } from "react-router-dom";
// import { Typography, Box } from "@mui/material";
// import dayjs from "dayjs";
// import { useRoomContext } from "../context/RoomContext";

// function BookingConfirmation() {
//   const { currentRoom } = useRoomContext();
//   const navigate = useNavigate();

//   console.log("currentRoom",currentRoom[0]);
  
 
//   if (!currentRoom) {
//     return <p>No booking data found.</p>;
//   }

//   return (
//     <div>
//       <h1>Booking Confirmation</h1>
//       <Box sx={{ padding: 3 }}>
//         <Typography variant="h5">🎉 Booking Confirmed!</Typography>
//         <Typography>Name: {currentRoom[0].firstName}</Typography>
//         <Typography>Email: {currentRoom.email}</Typography>
//         <Typography>Phone: {currentRoom.phoneNumber}</Typography>
//         <Typography>
//           Room: {currentRoom.roomTitle} ({currentRoom.theme})
//         </Typography>
//         <Typography>Date: {dayjs(currentRoom.date).format("DD-MM-YYYY HH:mm")}</Typography>
//       </Box>
//       <button onClick={() => navigate("/")}>Back to homepage</button>
//     </div>
//   );
// }
// export default BookingConfirmation;
import { useNavigate } from "react-router-dom";
import { Typography, Box, Card, CardContent } from "@mui/material";
import dayjs from "dayjs";
import { useRoomContext } from "../context/RoomContext";

function BookingConfirmation() {
  const { currentRoom } = useRoomContext();
  const navigate = useNavigate();

  if (!currentRoom || currentRoom.length === 0) {
    return <p>No booking data found.</p>;
  }

  return (
    <div>
      <h1>Booking Confirmation</h1>
      {currentRoom.map((booking, index) => (
        <Card key={index} sx={{ margin: 2, padding: 2 }}>
          <CardContent>
            <Typography variant="h5">🎉 Booking Confirmed!</Typography>
            <Typography>Name: {booking.firstName}</Typography>
            <Typography>Email: {booking.email}</Typography>
            <Typography>Phone: {booking.phoneNumber}</Typography>
            <Typography>
              Room: {booking.roomTitle} ({booking.theme})
            </Typography>
            <Typography>
              Date: {dayjs(booking.date).format("DD-MM-YYYY HH:mm")}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <button onClick={() => navigate("/")}>Back to homepage</button>
    </div>
  );
}

export default BookingConfirmation;
