
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Escape Room</h1>
      <img
        src="https://media.istockphoto.com/id/1130957166/vector/escape-room-neon-sign-bright-signboard-light-banner-quest-room-logo-neon-emblem-vector.jpg?s=612x612&w=0&k=20&c=7TdV_w5rn2YWsZTlimQwVApkz8gvhb7VjZ6GjKfGd7c="
        alt="Escape Room Banner"
        style={{ maxWidth: "20%", height: "auto", marginBottom: "20px" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        <button onClick={() => navigate('/EscapeRooms')}>Show available rooms</button>
        <button onClick={() => navigate('/CheckMyBooking')}>Check my Booking</button>
      </div>
    </div>
  );
}

export default Home;
