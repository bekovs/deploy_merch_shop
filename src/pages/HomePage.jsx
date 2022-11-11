import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import AOS from "aos";
import image from "../assets/mug_mockup.jpg";
import image2 from "../assets/t_shirt_and_tote_bag_mockup.jpg";
import image3 from "../assets/welcome.jpg";
import umbrella from "../assets/umbrella.jpg";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
AOS.init();
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
        className="paper"
      >
        <MDBCarousel interval={3000} showIndicators dark fade>
          <MDBCarouselInner>
            <MDBCarouselItem className="active">
              <MDBCarouselElement src={image3} alt="..." />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement src={image2} alt="..." />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement src={image} alt="..." />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </Paper>
      <Box sx={{ padding: "5%" }}>
        <Typography variant="h4" sx={{mb: 5}}>Popular</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: 'wrap' }}>
          <Card data-aos="flip-left" sx={{ maxWidth: 345, cursor: 'pointer', my: 3 }} onClick={()=>navigate('/products')}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={umbrella}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Umbrella
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Even umbrella
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card data-aos="flip-left" sx={{ maxWidth: 345, cursor: 'pointer', my: 3 }} onClick={()=>navigate('/products')}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mugs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best mugs ever
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card data-aos="flip-left" sx={{ maxWidth: 345, cursor: 'pointer', my: 3 }} onClick={()=>navigate('/products')}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Clothes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best clothes you ever wear
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card data-aos="flip-left" sx={{ maxWidth: 345, cursor: 'pointer', my: 3 }} onClick={()=>navigate('/products')}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Office
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best office stuff
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
