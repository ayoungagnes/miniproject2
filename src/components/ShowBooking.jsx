import { Typography, Box } from "@mui/material";
import dayjs from "dayjs";

function ShowBooking({ room }) {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        mb: 2,
        maxWidth: 400,
        backgroundColor: "#f9f9f9"
      }}
    >
      <Typography variant="h6">Booking Details</Typography>
      <Typography>Name: {room.firstName}</Typography>
      <Typography>Email: {room.email}</Typography>
      <Typography>Phone: {room.phoneNumber}</Typography>
      <Typography>
        Room: {room.roomTitle} ({room.theme})
      </Typography>
      <Typography>
        Date: {dayjs(room.date).format("DD-MM-YYYY HH:mm")}
      </Typography>
    </Box>
  );
}

export default ShowBooking;

