
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
