import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FirstSlide.css'
function FirstSlide() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }} className="portfolio" >
      <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12}>
        <div className="legacy">
        <h1>LEGACY ROBOTS</h1>
        <h2>The robots that built the groundwork for today's portfolio.</h2>
        </div>
      </Grid>

      </Grid>

    </Box>
    </div>
  )
}

export default FirstSlide