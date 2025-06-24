import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

function NavBar() {
  return (
    <AppBar sx={{position:'sticky',top:'0',margin:'0', backgroundColor: 'grey', fontWeight: 'bold'}}>
      <Container maxWidth="xl">
      <Toolbar>
        <Stack direction="row" spacing={1}>
          <Button component={NavLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={NavLink} to="/EscapeRooms" color="inherit">
            Escape Rooms
          </Button>
          <Button component={NavLink} to="/FAQ" color="inherit">
            FAQ
          </Button>
           <Button component={NavLink} to="/Contact" color="inherit">
            Contact
          </Button>
  
        </Stack>
      </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
