import { Modal, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Booking from "./Booking";
import dayjs from 'dayjs';
function EachRoom({ title, imgURL, theme }) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          bgcolor: "background.default",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          overflow: "clip",
          mb: 2,
        }}
      >
        {/* Image */}
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 200 },
            maxWidth: { xs: 350, md: 300 },
          }}
          alt={`${title} room`}
          src={imgURL}
        />

        {/* Room Info */}
        <Box
          sx={{
            p: 3,
            minWidth: { md: 300 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Theme: {theme}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ mt: 1, backgroundColor: "grey" }}
          >
            Book Now
          </Button>
        </Box>
      </Box>

      {/* Modal with form */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title} <span>({theme})</span>
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                label="Choose date and time"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                minDateTime={dayjs()}
              />
            </DemoContainer>
          </LocalizationProvider>

          <Booking roomTitle={title} theme={theme} date={selectedDate} />
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="outlined">
            Exit
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default EachRoom;
