import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './FourthSlide.css'
function FourthSlide() {
  return (
    <div>
<Box sx={{ flexGrow: 1 }}  className="whole">
      <Grid container spacing={2}>
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="cordination">
        <h1>WHOLE-BODY COORDINATION AND DYNAMIC MOTION</h1>
        <p1>Atlas leverages its whole body to move with human like grace and speed</p1>
    </div>
    </Grid>
    <Grid  item xl={2} lg={2} md={1} sm={1}></Grid>
    <Grid item xl={8} lg={8} md={10} sm={10} xs={12}>
        <div className="lab">
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://www.bostondynamics.com/sites/default/files/2021-08/behind-the-scenes-thumbnail.jpg" uk-img="loading: eager">
 </div>
 </div>
 <div className="run">
    <ul>
        <li>
    <img src="https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-08/behavior-libraries-100x100.png?itok=r0vrp0Xf" alt=""/>
 <h2>BEHAVIOR LIBRARIES</h2>
 <p2> Template motions are created using trajectory optimization and combined into complex routines.</p2>
  </li>
  <li>
<img src="https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-08/perception-icon-100x100.png?itok=ECWmDWyr" alt=""/>
  <h2>REAL-TIME PERCEPTION</h2>
  <p2>Atlas uses depth sensors to generate point clouds of the environment and detect its surroundings.</p2>
  </li>
  <li>
<img src="https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-08/predictive-control-icon-100x100.png?itok=dXH0K4xQ" alt=""/>
  <h2>MODEL-PREDICTIVE CONTROL</h2>
  <p2>Atlas uses models of the robot’s dynamics to predict how its motion will evolve over time and adjust accordingly.</p2>
  </li>
  </ul>
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