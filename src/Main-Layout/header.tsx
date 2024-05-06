import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../main';
import { AppBar, Container, Toolbar, IconButton, Box, Button, Typography, Switch, Menu, Tooltip, Avatar,  MenuItem } from '@mui/material';
import { CatchingPokemon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["About", "Login", "Vendor", "ContactUs"];
const settings = ["Profile", "Settings", "Logout"];

export const Header = () => {
    const { mode, toggleThemeMode } = useThemeMode();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: mode === "dark" ? "primary.light" : "primary.dark", }}>
         <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Link to="/">
                <CatchingPokemon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> {/* this line will change for icon img  */}
                </Link>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                  >
                    <Link style={{ textDecoration: "none", color: "#fff" }}
                        to="/">
                        VendorStoreApp
                    </Link>
                </Typography>
                {/* Light / dark mode toggle switch. */}
                  <Switch
                    checked={mode === "dark"} 
                    onChange={toggleThemeMode} 
                    color="default"
                  />
                  <Box sx={{ flexGrow: 0.5, display: { xs: 'flex', md: 'none' } }}>
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
                            }}
                        >   
                            {pages.map((page) => (
                              <Link style={{ textDecoration: "none", }}
                                to={`/${page.toLowerCase()}`}>
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                              </Link>  
                            ))}
                        </Menu>
                    </Box>
                    <Link to="/">
                    <CatchingPokemon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    </Link>
                    <Link to="/">
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Vendor App
                    </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to={`/${page.toLowerCase()}`}>
                                {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
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
                            <Link to={`/${settings.toLocaleString()}`}>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Link>
                        </Menu>
                    </Box>
            </Toolbar> 
          </Container>
        </AppBar>
    )
}