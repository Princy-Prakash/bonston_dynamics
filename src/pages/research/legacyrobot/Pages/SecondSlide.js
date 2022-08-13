import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SecondSlide.css'
function SecondSlide() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }} className="arm" >
      <Grid container spacing={2} columnSpacing={{xl:6,lg:6,md:6,sm:6,xs:1}}>
     <Grid item xl={2} lg={2} md={1} sm={1} >

     </Grid>
<Grid item xl={4} lg={4} md={5} sm={5} xs={12}>
    <div className="hand">
    <img src="https://www.bostondynamics.com/sites/default/files/2021-09/handle-truck-unload-540.jpg" alt=""/>
</div>
</Grid>
<Grid item xl={4} lg={4} md={5} sm={5} xs={12}>
    <div className="handle">
        <h1>HANDLE<br/>(2017)</h1>
        <p1>A research venture into wheeled robots, Handle led to the development of our Stretch robot. Handle could unload trucks and build pallets while dynamically balancing on two wheels.</p1>
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

export default SecondSlide