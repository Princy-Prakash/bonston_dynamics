import React from 'react'

import './Home.css'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Content() {
  return (
    <div>
      
  
      
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true;autoplay-interval: 3000 ;" id='slide'  >
        


<ul class="uk-slideshow-items slideheight"  >
   

    <li className='slide1'>

    <div class="cloud cloud1">
  <div class="light"></div>
<img  src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png"  className='airoplaneimage' /></div>
<p className='typewriter'>
  South India's faviourite
<br/>
  Airline Now Connect
  <br/>
  Kochi
 </p>
 <button class="custom-btn btn-12"><span>Book now!</span><span>Book now</span></button>



    </li>
 
    
</ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover uk-icon uk-slidenav-previous uk-slidenav" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover uk-icon uk-slidenav-next uk-slidenav" href="#" uk-slidenav-next="" uk-slideshow-item="next"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></a>

</div>



    </div>
  )
}

export default Content