import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './EighthSlide.css'
function EighthSlide() {
  return (
    <div>

<Box sx={{ flexGrow: 1 }}className="dogs" >
      <Grid container spacing={2} columnSpacing={{xl:6,lg:6,md:6,sm:6}}>

<Grid item xl={2} lg={2} md={1} sm={1}>

</Grid>



<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="bigdog">
  <h1>BIGDOG (2004)
</h1> 
<p1>The first legged robot to leave the lab, BigDog navigated rough terrain using sensors and its control system.
</p1> 
<br/>
<br/>
<button className="button1" >WATCH VIDEO</button>
</div>
</Grid>

<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="robodog">
    <img src="https://www.bostondynamics.com/sites/default/files/2019-09/bigdog-with-load-white_0.png" alt=""/>
    </div>
</Grid>

<Grid item xl={2} lg={2} md={1} sm={1}>
    
</Grid>
</Grid>
</Box>



    </div>
  )
}

export default EighthSlide