import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SixthSlide.css'
function SixthSlide() {
  return (
    <div>
<Box sx={{ flexGrow: 1 }}className="cycle" >
      <Grid container spacing={2} columnSpacing={{xl:6,lg:6,md:6,sm:6}}>

      <Grid item xl={2} lg={2} md={1} sm={1}>

</Grid>

<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="ciclekid">
    <img src="https://www.bostondynamics.com/sites/default/files/2019-09/sandflea_wide_0.jpg" alt=""/>
    </div>
</Grid>

<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="sandflea">
  <h1>SANDFLEA<br/> (2012)</h1> 
<p1>A small robot designed for reconnaissance, SandFlea drove like an RC car on flat terrain, but could jump 10 m into the air to leap buildings in a single bound.</p1> 
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

export default SixthSlide