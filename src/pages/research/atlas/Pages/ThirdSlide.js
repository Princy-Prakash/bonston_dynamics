import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ThirdSlide.css'
function ThirdSlide() {
  return (
    <div  >
    <Box sx={{ flexGrow: 1 }} className="dance" >
      <Grid container spacing={2} columnSpacing={{sm:0}}>
     <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="technology">
            <h2>TECHNOLOGY</h2>
            <p1>Atlas is an R&D platform pushing the bounds of robotics forward.</p1>
        </div>
     </Grid>
  <Grid item xl={1} lg={1} md={1} sm={1}>

  </Grid>
<Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://www.bostondynamics.com/sites/default/files/2021-08/atlas-efficient.jpg" alt="" uk-cover="" />
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">

                            <div class="uk-card-body">
                                <h3 class="uk-card-title">HIGH POWER</h3>
                                <p>Atlas has one of the world’s most compact mobile hydraulic systems. A custom battery, valves, and a compact hydraulic power unit enable Atlas to deliver high power to any of its 28 hydraulic joints for impressive feats of mobility.</p>
                               <br/>
                               <p2>ACTUATION  JOINTS</p2>
                               <br/>
                               <br/>
                               <p> Hydraulic   28</p>
                            </div>

                        </div>
                    </div>
  </Grid>
  <Grid item xl={1} lg={1} md={1} sm={1}>
    
  </Grid>
  <Grid item xl={1} lg={1} md={1} sm={1}>
    
    </Grid>
    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-card-media-left uk-cover-container uk-first-column">
                            <img src="https://www.bostondynamics.com/sites/default/files/2021-08/atlas-dynamic.jpg" alt="" uk-cover="" />
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div>

                            <div class="uk-card-body">
                                <h3 class="uk-card-title">DYNAMIC</h3>
                                <p>Atlas’s advanced control system enables highly diverse and agile locomotion, while algorithms reason through complex dynamic interactions involving the whole body and environment to plan movements.</p>
                                <p2>SPEED</p2>
                                <br/>
                               <br/>
                               <p>2.5 m/s </p>
                                 
                                 </div>

                        </div>
                    </div>
  </Grid>
  <Grid item xl={1} lg={1} md={1} sm={1}>
    
  </Grid>




  <Grid item xl={1} lg={1} md={1} sm={1}>
    
  </Grid>
  <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid" uk-grid="">
                        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://www.bostondynamics.com/sites/default/files/2021-08/atlas-close-ups-03.jpg" alt="" uk-cover="" />
                            <canvas width="1800" height="1200"></canvas>
                        </div>
                        <div class="uk-first-column">

                            <div class="uk-card-body">
                                <h3 class="uk-card-title">LIGHTWEIGHT</h3>
                                <p>Atlas uses 3D printed parts to give it the strength-to-weight ratio necessary for leaps and somersaults.</p>
                                <p2>HEIGHT	WEIGHT</p2>
                                <br/>
                               <br/>
                               <p>1.5 m	89 kg </p>
                            </div>

                        </div>
                    </div> 
  </Grid>
  <Grid item xl={1} lg={1} md={1} sm={1}>
    
  </Grid>

</Grid>
</Box>
    </div>
  )
}

export default ThirdSlide