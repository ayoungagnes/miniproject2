import { useRoomContext } from "../context/RoomContext";
import { useState } from "react";
import ShowBooking from "./ShowBooking";

function CheckMyBooking() {
  const { currentRoom } = useRoomContext();
  const [bookingFirstName, setBookingFirstName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [updatedRoom, setUpdatedRoom] = useState([]);

  const handleBookingName = (e) => setBookingFirstName(e.target.value);
  const handleBookingEmail = (e) => setBookingEmail(e.target.value);

  const handleFindBooking = (e) => {
    e.preventDefault();
    if (bookingFirstName && bookingEmail) {
      const matched = currentRoom.filter(
        (booking) =>
          booking.firstName.toLowerCase() === bookingFirstName.toLowerCase() &&
          booking.email.toLowerCase() === bookingEmail.toLowerCase()
      );
      setUpdatedRoom(matched);
    }
  };

  return (
    <div>
      <h3>Log in to check your booking</h3>

      <form onSubmit={handleFindBooking}>
        <label>
          First Name:
          <input value={bookingFirstName} onChange={handleBookingName} />
        </label>
        <label>
          Email:
          <input value={bookingEmail} onChange={handleBookingEmail} />
        </label>
        <button type="submit">Check my booking</button>
      </form>

      {updatedRoom.length > 0 ? (
        updatedRoom.map((room, index) => (
          <ShowBooking key={index} room={room} />
        ))
      ) : (
        <p>No matching bookings found</p>
      )}
    </div>
  );
}

export default CheckMyBooking;



