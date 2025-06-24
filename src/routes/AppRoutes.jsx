import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "../components/NavBar"
import Home from "../components/Home"
import FAQ from "../components/FAQ"
import Contact from "../components/Contact"
import EscapeRooms from "../components/EscapeRooms"
import BookingConfirmation from "../components/BookingConfirmation"
import CheckMyBooking from "../components/CheckMyBooking"
import ShowBooking from "../components/ShowBooking"


function AppRoutes(props) {
    
    return(
        <Routes>
            <Route index path="/" element={<Home></Home>}></Route>
            <Route path="/EscapeRooms" element={<EscapeRooms></EscapeRooms>}></Route>
            <Route path="/FAQ" element={<FAQ></FAQ>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/confirmation" element={<BookingConfirmation></BookingConfirmation>}></Route>
            <Route path="/CheckMyBooking" element={<CheckMyBooking {...props}></CheckMyBooking>}>
                <Route path="ShowBooking" element={<ShowBooking/>}></Route>
            </Route>
        </Routes>
    )
}
export default AppRoutes;