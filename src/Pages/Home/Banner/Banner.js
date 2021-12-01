import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Typography ,Button, Container,Box} from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    
}

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height: '400px',
}

const Banner = () => {


    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ ...verticalAlign ,textAlign: 'left'}}>
        <Grid item xs={12} md={6}>
          <Box>
          <Typography variant="h3">
                Your New Smile <br></br>
                Starts Here
          </Typography>
          <Typography variant="h6" sx={{my:3,fontSize: 14, color: 'dimgray', fontWeight: '300'}}>
          When you visit for a checkup, your dentist will look at your teeth and gums to check for any problems. The dentist also wants to make sure your teeth are developing properly as you grow.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalAlign}>
          <img src={chair} style={{width: '500px'}} alt=""/>
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;