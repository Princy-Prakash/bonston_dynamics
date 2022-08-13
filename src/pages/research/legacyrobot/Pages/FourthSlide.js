import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FourthSlide.css'
function FourthSlide() {
  return (
    <div>
<Box sx={{ flexGrow: 1 }}className="insect" >
      <Grid container spacing={2} columnSpacing={{xl:6,lg:6,md:6,sm:6}}>

      <Grid item xl={2} lg={2} md={1} sm={1}>

</Grid>

<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="insectbody">
    <img src="https://www.bostondynamics.com/sites/default/files/2019-09/wildcat-1.jpg" alt=""/>
    </div>
</Grid>

<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="wildcat">
  <h1>WILDCAT<br/> (2011)</h1> 
<p1>The fastest quadruped robot on Earth, WildCat ran 32 km/h while maneuvering and maintaining its balance.
</p1> 
<br/>
<br/>
<button className="button1" >WATCH VIDEO</button>
</div>
</Grid>

<Grid item xl={2} lg={2} md={1} sm={1}>
    
</Grid>
      </Grid>
</Box>

    </div>
  )
}

export default FourthSlide