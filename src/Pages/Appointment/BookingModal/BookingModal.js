import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const BookingModal = ({handleBookingClose,openBooking, booking,date}) => {

    const {name,time} = booking;

    const handleBook = (e) => {
      e.preventDefault();
      //collect data 
      // send to server
      handleBookingClose()
      alert('Booking closed')
    }

    
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBook}>

            <TextField
          label="time"
          disabled
          sx={{width:'90%' , m:2}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
            <TextField
          label="your name"
          sx={{width:'90%' , m:2}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
            <TextField
          label="phone"
          
          sx={{width:'90%' , m:2}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
            <TextField
          label="email"
          
          sx={{width:'90%' , m:2}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
            <TextField
          label="date"
          disabled
          sx={{width:'90%' , m:2}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button type="submit" variant="contained">Book</Button>

            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;