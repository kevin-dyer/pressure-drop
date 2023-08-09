import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/images/logo.svg';

const pages = ['Products', 'About', 'Contact Us'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="inherit">
      <Container disableGutters={true} maxWidth={false} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '30px', margin: 0, padding:0, }}>
        <Typography
          variant="body2"
          noWrap
          component="div"
          sx={{
            display: { xs: 'none', md: 'flex' },
            // fontFamily: 'monospace',
            fontWeight: 100,
            fontSize: '13px',
            // letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
            marginRight: 10,
            marginLeft: 2,
            marginBottom: 0
          }}
        >
          Free shipping on orders $50+
        </Typography>
      </Container>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img src={logo} className="header-logo" alt="logo" height={30} width={30} />
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                // display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 400,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginRight: 10,
                marginLeft: 2,
                marginBottom: 0
              }}
            >
              Pressure Drop
            </Typography>
            <Typography
              variant="body1"
              noWrap
              component="div"
              href="/"
              sx={{
                mr: 2,
                // display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 200,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginRight: 10,
                marginLeft: 2,
                marginTop: '-6px',
                fontSize: '14px',
                letterSpacing: '2px'
              }}
            >
              Filtration
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                border: '1px solid black'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexDirection: 'column'}}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 400,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginRight: 10,
                marginLeft: 2,
                marginBottom: 0
              }}
            >
              Pressure Drop
            </Typography>
            <Typography
              variant="body1"
              noWrap
              component="div"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 200,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginRight: 10,
                marginLeft: 2,
                marginTop: '-6px',
                fontSize: '14px',
                letterSpacing: '1px'
              }}
            >
              Filtration
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#333', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;