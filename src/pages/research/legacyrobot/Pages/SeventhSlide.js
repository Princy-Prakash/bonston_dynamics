import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SeventhSlide.css'
function SeventhSlide() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}className="nano" >
      <Grid container spacing={2} columnSpacing={{xl:6,lg:6,md:6,sm:6}}>

<Grid item xl={2} lg={2} md={1} sm={1}>

</Grid>



<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="rhex">
  <h1>RHEX (2007)
</h1> 
<p1>A passively-stable six-legged robot with remarkable mobility on rough terrain.
</p1> 
<br/>
<br/>
<button className="button1" >WATCH VIDEO</button>
</div>
</Grid>

<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="bots">
    <img src="https://www.bostondynamics.com/sites/default/files/2019-09/rhex.jpg" alt=""/>
    </div>
</Grid>

<Grid item xl={2} lg={2} md={1} sm={5}>
    
</Grid>
</Grid>
</Box>

    </div>
  )
}

export default SeventhSlide