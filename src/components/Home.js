import * as React from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import backgroundImg from '../assets/images/home_page_img_2.png';


const pages = ['Products', 'About', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Home() {

  return (
    <HomeContainer>
      <ImgContainer>
        <Img src={backgroundImg} className="background"/>
        <Box sx={{
          position: 'absolute',
          display: {xs: 'none', md: 'flex'},
          marginLeft: '0px',
          zIndex: 3,
          alignItems: 'flex-start',
          flexDirection: 'column',
          padding: '60px 20px 60px 60px'
        }}>
          <Text1>Volitile acidity & alcohol reduction</Text1>
          <Text2>Wine Filtration</Text2>
          <Text3>Inexpensive solutions for small scale producers</Text3>
          <ShopButton href='mailto:kevin@pressuredropfiltration.com' sx={{marginTop: '20px', padding: '12px 50px'}} variant="contained">Shop Now</ShopButton>
        </Box>

        <Box sx={{
          position: 'absolute',
          display: {xs: 'flex', md: 'none'},
          // top: '20px',
          top: 0,
          left: 0,
          // maxHeight: '100%',
          marginLeft: '0px',
          zIndex: 3,
          alignItems: 'flex-start',
          flexDirection: 'column',
          padding: '20px 35% 20px 20px',
        }}>
          <Text3>Inexpensive filtration solutions for small scale producers</Text3>
          <ShopButton href='mailto:kevin@pressuredropfiltration.com' sx={{marginTop: '20px', padding: '12px 50px'}} variant="contained">Shop Now</ShopButton>
        </Box>
      </ImgContainer>
      
      <Box sx={{
        // position: {xs: 'relative', md: 'absolute'},
        position: 'relative',
        display: {xs: 'flex', md: 'none'},
        marginLeft: '0px',
        zIndex: 3,
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: '20px'
      }}>
        <Text1>Volitile acidity & alcohol reduction</Text1>
        <Text2>Wine Filtration</Text2>
      </Box>
    </HomeContainer>
  );
}
export default Home;


const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 0;
  /* overflow-y: hidden; */
`
const Img = styled.img`
  width: 100%;
  /* min-height: 100%; */
  /* position: absolute; */
  top: 0;
  left: 0;
  /* opacity: 0.7; */
`
// const InnerContainer = styled.div`
//   /* position: 'absolute'; */
//   margin-left: 0px;
//   z-index: 3;
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
//   /* background-color: rgba(255,255,255, 0.5); */
//   padding: 60px 20px 60px 60px;
//   border: 1px solid black;
// `
// const BottomContainer = styled.div`
//   /* margin:120px 0 0 40px; */
//   margin-left: 0px;
//   z-index: 3;
//   /* display: flex; */
//   align-items: flex-start;
//   flex-direction: column;
//   /* background-color: rgba(255,255,255, 0.5); */
//   padding: 60px 20px 60px 60px;
  
// `

const ShopButton = styled(Button)`
  /* padding-left: 40px; */
  
  /* position: absolute; */
  /* top: 60%;
  left: 40px; */
  margin: 20px 0;
`
const Text1 = styled.div`
  font-size: 24px;
  margin: 6px 0;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: left;
  /* text-transform: uppercase; */
`
const Text2 = styled.div`
font-size: 52px;
margin: 6px 0;
font-weight: 600;
letter-spacing: 4px;
text-transform: uppercase;
text-align: left;
`
const Text3 = styled.div`
font-size: 16px;
margin: 12px 0 10px 0;
font-weight: 200;
text-align: left;
`

const ImgContainer = styled.div`
  position: relative;
`