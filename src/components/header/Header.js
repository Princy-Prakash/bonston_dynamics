import React, { useState } from 'react'  
import './Header.css' 
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button'; 
import InputBase from '@mui/material/InputBase'; 
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid'; 
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi" 
import {Link} from 'react-router-dom'  
import BookIcon from '@mui/icons-material/Book';
 


 


const Button1 = styled(Button)(({ theme })=>({
  color:'#0F204A', 
 textDecoration:'lowercase',
  paddingRight:'20px' ,
  fontSize:'16px',
  fontfamily: 'Abyssinica SIL', 
  '&:hover':{ 
    color:'#23BDB8'
    },
     
}))
const Button2 = styled(Button)(({ theme })=>({
  marginLeft:'-50px', 
  color:'white', 
  marginTop:'0px', 
  // borderColor:'#23BDB8',
  fontSize:'13px',
  backgroundColor:'#23BDB8',
  '&:hover':{
  backgroundColor:'#2e9a96',
  color:'white'
  },
  // [theme.breakpoints.down('xl')]:{
  //   marginLeft:'20px',
  //   marginTop:'0px'
  // },
  [theme.breakpoints.down('lg')]:{
    marginLeft:'850px',
    marginTop:'-170px'
  }
   
}))
const Button3 = styled(Button)(({ theme })=>({
marginLeft:'-50px', 
color:'white',   
// borderColor:'#23BDB8',
fontSize:'13px',
backgroundColor:'#23BDB8',
'&:hover':{
backgroundColor:'#2e9a96',
color:'white'
},
[theme.breakpoints.down('lg')]:{
  marginLeft:'180px',
  marginTop:'-60px'
}
 
}))
const Grid1 = styled(Grid)(({theme})=>({
  marginLeft:'-20px',
  [theme.breakpoints.up('sm')]:{
      paddingLeft:'70px'
  },
  [theme.breakpoints.down('lg')]:{
    marginTop:'20px',
    marginLeft:'25px'
  }

}))
const Grid2 = styled(Grid)(({theme})=>({
  marginLeft:'20px',
  
}))
 

function Header() { 
  const [navbarOpen, setNavbarOpen] = useState(false);
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const [value, setValue] = React.useState(null);
 
  return (
  
    
    <>
     <div  className='navbar'>
        <AppBar sx={{
            backgroundColor:'white',
            paddingTop:'20px',
            color:' black',
            paddingBottom:'15px'
        }}>
            <Toolbar>
                <Grid container>
                    <Grid item lg={2} sm={3} xs={1} sx={{
                      paddingTop:'5px',
                      cursor:'pointer'
                    }}  >
                        <item>
                        <Link to="/" exact  ><img src="https://download.logo.wine/logo/Jet_Airways/Jet_Airways-Logo.wine.png" alt="" className='logoCareer'/></Link>
                        </item>
                    </Grid>
                 
                
          <Grid1 item lg={10} className="buttons1"  >
            <item >
            {/* <Link to="/" exact  ><Button1 className='pribut1  active'  > </Button1></Link>  */}
            <Button1 className='pribut1  '  >Book </Button1>
            <Button1 className='pribut1  '  >Destination </Button1>
            <Button1 className='pribut1  '  >information </Button1>
            <Button1 className='pribut1  '  >About Us </Button1>
            <Button1 className='pribut1  '  >Travel Agent</Button1>
            </item>
            </Grid1>
       
          <Grid item sm={1} xs={1} className="res_nav">
            <item>
                    
      <button className="uk-button uk-button-default open__button" type="button" uk-toggle="target: #offcanvas-flip"
        onClick={handleToggle}>{navbarOpen ? 
          (
            <MdClose style={{ color: "#4a6f8a", width: "40px", height: "40px" }} className='toggelicon'/>
          ) 
          : (
            <FiMenu style={{ color: "#4a6f8a", width: "40px", height: "40px" }} className='toggelicon'/>
          )
      
   

           } </button>
           
<div id="offcanvas-flip"  uk-offcanvas="flip: true; overlay: true" className='off__canvas'>
    <div className="uk-offcanvas-bar off__canvasbody" >  
    
   
    <ul className='listNav'>
          <li className='listItemNav'> 
         
        </li> 
           <hr className='lineNav'></hr>
            <li className='listItemNav'><Link to="/home">  &nbsp;&nbsp; <span className='whiteClr'>HOME </span> <span uk-icon="chevron-double-right" className='iconNavHome whiteClr'></span></Link> </li>  
           <hr className='lineNav'></hr>
          
            <li className='listItemNav'><Link to="/home"> &nbsp;&nbsp; <span className='whiteClr'>Book </span> <span uk-icon="chevron-double-right" className='iconNavHome1 whiteClr'></span></Link> </li>  
           <hr className='lineNav'></hr>
           <li className='listItemNav'><Link to="/">  &nbsp;&nbsp; <span className='whiteClr'>Destination</span> <span uk-icon="chevron-double-right"  className='iconNavWho whiteClr'></span></Link> </li>   
            <hr className='lineNav'></hr>
            <li className='listItemNav'><Link to="/">  &nbsp;&nbsp; <span className='whiteClr'>About Us</span> <span uk-icon="chevron-double-right"  className='iconNavWho2 whiteClr'></span></Link> </li>   
            <hr className='lineNav'></hr>
            <li className='listItemNav'><Link to="/">  &nbsp;&nbsp; <span className='whiteClr'>Travel Agent</span> <span uk-icon="chevron-double-right"  className='iconNavBook whiteClr'></span></Link> </li>   
            <hr className='lineNav'></hr>
      </ul>
      
    </div>
    </div>
            </item>
          </Grid>

          </Grid>
            </Toolbar>
        </AppBar>
       
      
    </div>
      
                 
    </>
  )
}

export default Header

