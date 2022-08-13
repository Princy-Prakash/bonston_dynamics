import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import'./FirstSlide.css'

function FirstSlide() {
  useEffect(() =>{
    Aos.init({});
},[]);
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} className="robot">
      <Grid container spacing={2} columnSpacing={{ sm:2  }}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

        <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
          <div className="back">
          <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://www.bostondynamics.com/sites/default/files/2021-08/cta-atlas.jpg" uk-img="loading: eager">
          <div className="content">
  <h1>ATLAS™</h1>
 <p1>Atlas is a research platform designed to<br/> push the limits of whole-body mobility.</p1><br/>
 <br/>
 <button variant="outlined">SUBSCRIBE FOR UPDATES</button>

</div>
</div>
  
</div>

</div>


</Grid>
</Grid>
</Box>
{/* this is the next section */}
<Box sx={{ flexGrow: 1 }} className="robot1">
      <Grid container spacing={2} columnSpacing={{ sm:2,xs:1 }}>
<Grid item xs={12}>
  <div className="roborun">
  <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://www.bostondynamics.com/sites/default/files/2021-08/cta-atlas.jpg" uk-img="loading: eager">
</div>
</div>
</Grid>


<Grid item xs={12}>

<div className="content1">
  <h1>ATLAS™</h1>
 <p1>Atlas is a research platform designed to<br/> push the limits of whole-body mobility.</p1><br/>
 <br/>
 <button className="btn" variant="outlined">SUBSCRIBE FOR UPDATES</button>

</div>

</Grid>


      </Grid>
   
   </Box>
   
   
    </div>
  )
}

export default FirstSlide