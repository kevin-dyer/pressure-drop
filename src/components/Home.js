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
import backgroundImg from '../assets/images/home_page_img.png';


const pages = ['Products', 'About', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Home() {

  return (
    <HomeContainer>
      <InnerContainer>
        <Text1>Volitile acidity & alcohol reduction</Text1>
        <Text2>Wine Filtration</Text2>
        <Text3>Inexpensive solutions for small scale producers</Text3>
        <ShopButton href='mailto:kevin@pressuredropfiltration.com' sx={{marginTop: '20px', padding: '12px 50px'}} variant="contained">Shop Now</ShopButton>
      </InnerContainer>
      <Img src={backgroundImg} className="background"/>
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
  flex: 1;
  overflow-y: hidden;
`
const Img = styled.img`
  width: 100%;
  /* min-height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  /* opacity: 0.7; */
`
const InnerContainer = styled.div`
  /* margin:120px 0 0 40px; */
  margin-left: 70px;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: rgba(255,255,255, 0.5); */
  padding: 60px;
`
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
  /* text-transform: uppercase; */
`
const Text2 = styled.div`
font-size: 52px;
margin: 6px 0;
font-weight: 600;
letter-spacing: 4px;
text-transform: uppercase;
`
const Text3 = styled.div`
font-size: 16px;
margin: 18px 0 10px 0;
`