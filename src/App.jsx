import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { RoomProvider } from "./context/RoomContext";
function App({ children }) {
  return (
    <>
      <RoomProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <NavBar />
            {children}
          <AppRoutes></AppRoutes>
          
        </LocalizationProvider>
      </RoomProvider>
    </>
  );
}

export default App;
