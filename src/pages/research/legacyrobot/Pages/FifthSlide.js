import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FifthSlide.css'
function FifthSlide() {
  return (
    <div>
<Box sx={{ flexGrow: 1 }} className="ant" >
      <Grid container spacing={2} columnSpacing={{xl:6,lg:6,md:6,sm:6}}>

      <Grid item xl={2} lg={2} md={1} sm={1}>

</Grid>



<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="lc3">
  <h1>LS3 (2010)</h1> 
<p1>A quadruped robot designed to follow soldiers and carry their gear over rough terrain.</p1> 
<br/>
<br/>
<button className="button1" >WATCH VIDEO</button>
</div>
</Grid>

<Grid item xl={4} lg={4} md={5} sm={5}>
    <div className="antbody">
    <img src="https://www.bostondynamics.com/sites/default/files/2019-09/ls3-idesert21-lr.jpg" alt=""/>
    </div>
</Grid>

<Grid item xl={2} lg={2} md={1} sm={1}>
    
</Grid>
      </Grid>
</Box>

    </div>
  )
}

export default FifthSlide