import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ThirdSlide.css'
function ThirdSlide() {
  return (
    <div>
<Box sx={{ flexGrow: 1 }}className="robotic" >
      <Grid container spacing={2} columnSpacing={{xl:6,lg:6,md:6,sm:6}}>
<Grid item xl={2} lg={2} md={1} sm={1}>

</Grid>
<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="spot">
  <h1>SPOT<br/> CLASSIC <br/>(2015)
</h1> 
<p1>A quadruped robot designed for indoor and outdoor operation that laid the groundwork for the robust dynamic robot control seen on Spot today.</p1> 
<br/>
<br/>
<button className="button1" >WATCH VIDEO</button>
</div>
</Grid>
<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="roboticbody">
    <img src="https://www.bostondynamics.com/sites/default/files/2019-09/spotclassic2.jpg" alt=""/>
    </div>
</Grid>
<Grid item xl={2} lg={2} md={1} sm={1}>
    
</Grid>

      </Grid>
</Box>


    </div>
  )
}

export default ThirdSlide