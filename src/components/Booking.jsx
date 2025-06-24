import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import useRoomDescription from "../hooks/useRoomDescription";
import { useNavigate } from "react-router-dom";
import { useRoomContext } from "../context/RoomContext";

function Booking({roomTitle, theme, date}) {
  const { currentRoom, handleUpdateRoom } = useRoomContext();
  const navigate = useNavigate();
  const { description, loading, error } = useRoomDescription(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const [bookingData, setBookingData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  const handleFillOutForm = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingNow = (e) => {
    e.preventDefault();
    if (!bookingData.firstName || !bookingData.email || !bookingData.phoneNumber) {
    alert("Please fill in all required fields.");
    return;
  }
    const formData = new FormData(e.target);
    const formValues = {
      firstName: formData.get("firstName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      roomTitle,
      theme,
      date: date.toISOString(),

    };
    navigate("/confirmation", {});

    console.log(formValues);
    handleUpdateRoom(formValues);
  };
  return (
    <Box component="form" onSubmit={handleBookingNow}>
      <div>
        <strong>Description:</strong>
        {loading && <p>Loading description...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && <p>{description}</p>}
      </div>
      <TextField
        name="firstName"
        label="First Name"
        value={bookingData.firstName}
        onChange={handleFillOutForm}
      />

      <TextField
        name="email"
        label="Email"
        value={bookingData.email}
        onChange={handleFillOutForm}
      />

      <TextField
        name="phoneNumber"
        label="Phone Number"
        value={bookingData.phoneNumber}
        onChange={handleFillOutForm}
      />

      <Button sx={{ position: "absolute" }} type="submit">
        Book now!
      </Button>
    </Box>
  );
}
export default Booking;
