import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SecondSlide.css'
function SecondSlide() {
  return (
    <div >
        <Box sx={{ flexGrow: 1 }}  className="square">

      <Grid container spacing={2} >
 <Grid item xl={1} lg={1} md={1} sm={1}>

 </Grid>
<Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
  <div className="dynamic">
<h1>THE MOST DYNAMIC HUMANOID ROBOT</h1>
<p1>Atlas’s advanced control system and state-of-the-art hardware give the robot the power and balance to demonstrate human-level agility</p1>
</div>
</Grid>
<Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
<div className="push">
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://www.bostondynamics.com/sites/default/files/styles/video_feature_image/public/2021-08/jump-closer-v3-final.jpg?itok=lYORJjJU" width="1800" height="1200" alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">SEE ATLAS IN ACTION</h3>
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

export default SecondSlide