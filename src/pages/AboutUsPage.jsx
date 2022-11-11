import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: '10em auto'}}>
        <Typography variant="h2" component="div" sx={{transform: 'translateX(-100%)', fontSize: '5vmin'}}>We sell style</Typography>
        <Typography variant="h2" component="div" sx={{transform: 'translateX(0)', fontSize: '5vmin'}}>We sell style</Typography>
        <Typography variant="h2" component="div" sx={{transform: 'translateX(100%)', fontSize: '5vmin'}}>We sell style</Typography>
      </Box>
    </>
  );
};

export default AboutUsPage;
