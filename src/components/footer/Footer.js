import React, { useState }   from 'react' 
import   './Footer.css'
import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function Footer() {  

 


  return (


<div className='foooterCons'>
  <Grid container className='footerContainer'>
    
    <Grid item  sm={2} xs={12}>
    <ul className='footList1'>
                  <h1 className='footHead1'>Quick Link</h1>
                 <Link to="/"><li className='footLIstitem1'>Booking</li></Link>
                  <Link to="/"><li className='footLIstitem1'>Manage Booking</li></Link>
                  <Link to="/"><li className='footLIstitem1'>Carrers</li></Link>
                  <Link to="/"><li className='footLIstitem1'>Partnership</li></Link>
               </ul>
    </Grid>
    <Grid item  sm={6} xs={12}>
    <p className='footerParaCons'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique, provident tempore tempora blanditiis debitis iusto, minima quia totam placeat, doloribus sit maiores aliquid sequi iure deserunt eligendi sint possimus.</p>
  

    <FormControl  variant="outlined" className='email'>
          <OutlinedInput
            id="outlined-adornment-weight"
           placeholder='Enter your Email'
            endAdornment={<InputAdornment position="end"><SendIcon sx={{color:'#0F204A'}}/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
           
          />
         
        </FormControl>










   </Grid>
    <Grid item sm={2} xs={12}>
    <ul className='footList1'>
                  <h1 className='footHead1'>Our Company</h1>
                 <Link to="/whoweare"><li className='footLIstitem1'>About Us</li></Link>
                  <Link to="/contact"><li className='footLIstitem1'>Contact Us</li></Link>
               </ul>
    </Grid>
  </Grid>
  <Grid container>
    <Grid item xs={12}>
    <div className='icons__footer'>
                 <a href='https://www.youtube.com/'><span className='icon__span2' ><img className='footericonimage' src="https://cdn-icons-png.flaticon.com/512/733/733590.png?w=740&t=st=1663503820~exp=1663504420~hmac=2746187a470efb3f33fdbff1f93fc43ddcd9893b0b7839d9716381a6c62fea38"></img></span> &nbsp;</a>
                 <a href='https://www.linkedin.com/'><span className='icon__span2'  ><img className='footericonimage2' src="https://cdn-icons-png.flaticon.com/512/124/124011.png?w=740&t=st=1663504011~exp=1663504611~hmac=0927381a84bd58398014967c186fcdf1367c92f8375ec4229582b404f61f954e"></img></span> &nbsp;</a> 
                 <a href='https://www.instagram.com/'><span className='icon__span2'    ><img className='footericonimage3' src="https://cdn-icons-png.flaticon.com/512/174/174855.png?w=740&t=st=1663504258~exp=1663504858~hmac=23ed646cc4bb3f0ce99dbfa2d04b69473f987f0114b782aa937217acdfaedc61"></img></span> </a> 
                 <a href='https://www.facebook.com/'><span className='icon__span2'   ><img className='footericonimage4' src="https://cdn-icons-png.flaticon.com/512/220/220200.png?w=740&t=st=1663504404~exp=1663505004~hmac=e11ebc62bf151a1a53439fd05598cb311e24c38e332fd8cded9bcbface286e3b"></img></span>  </a>
                 <a href='https://www.twitter.com/'><span className='icon__span2'  ><img className='footericonimage5' src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=740&t=st=1663504464~exp=1663505064~hmac=d1aa446f12f3fd006430ca827df1df52d5346a6ab4807bcda3d97451382dcbb5"></img></span></a>
             </div>
    </Grid>
  </Grid>
  <Grid container>
        <Grid item xs={12}>
       <div className='last__footer'>
         <Grid container>
            <Grid item lg={4} md={5} sm={6} xs={12}>
            <p className='pricopyright'>© 2022 Career Consultancy. All rights reserved.</p> 
            </Grid> 
            <Grid item lg={8} md={7} sm={6} xs={12}>
          <p className='priprivacy__terms'  > <span className='priprivacy'> Privacy Policy</span>  <span uk-icon="minus" className='minus'>  </span> <span className='terms'> Terms of Use</span></p>
          </Grid>
          </Grid>
        </div>
        </Grid>
      </Grid>
</div>
  )
}

export default Footer