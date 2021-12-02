import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import BookingModal from "../BookingModal/BookingModal";

const Booking = (props) => {
  const { name, time, space ,date} = props.booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={5} sx={{ py: 5 }}>
          <Typography
            variant="h5"
            sx={{ color: "info.main", fontWeight: 600 }}
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} spaces available
          </Typography>
          <Button variant="contained" onClick={handleBookingOpen}>
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal booking={props.booking} date ={props.date} handleBookingClose={handleBookingClose} openBooking={openBooking}> </BookingModal>
    </>
  );
};

export default Booking;
