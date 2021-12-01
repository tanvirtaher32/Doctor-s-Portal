import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <div>
      <Card sx={{ minWidth: 275 ,height: '25vw', border : 0,boxShadow:0}}>
        <CardMedia
          component="img"
          alt="green iguana"
          style={{width:'auto', height:'80px', margin: '20px auto'}}
          image={img}
        />
        <CardContent>
          
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default Service;
