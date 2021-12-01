import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Today, several dental filling materials are available. Teeth can be filled with gold; porcelain; silver amalgam (which consists of mercury mixed with silver, tin, zinc, and copper); or tooth-colored, plastic and glass materials called composite resin fillings.",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Many times teeth are beautifully shaped, but are with dark color. Bleaching is the perfect solution to get a brighter & whiter smile.Many times, your Natural Teeth Whitening will be a part of a comprehensive plan to bring your smile back to life. Dr. Shihabur ahman usually recommends Teeth Whitening treatment before any Cosmetic dental treatment.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography variant="h6" component="div" sx={{ fontWeight: 500 ,color: 'info.main',m:2 }}>
            Our Services
          </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 600,m:3 }}>
            Services We Provide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Grid item xs={4} sm={4} md={4}>
                <Service service={service} key={service.name}></Service>{" "}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Services;
