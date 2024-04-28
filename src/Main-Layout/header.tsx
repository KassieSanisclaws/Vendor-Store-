import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import { Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../main';

const pages = ['About', 'Login', 'Vendor', 'Contact Us'];

function Header() {
    const { mode, toggleThemeMode } = useThemeMode();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event: { currentTarget: any; }) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: mode === 'dark' ? 'primary.light' : 'primary.dark' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
                        <IconButton size="large" edge="start" color="secondary" aria-label="logo">
                            <CatchingPokemon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{
                        mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',
                        fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none'
                    }}>
                        <Link style={{ textDecoration: 'none', color: mode == "dark" ? "initial" : "white" }} to="/">
                            VendorStoreApp
                        </Link>
                    </Typography>

                    <Typography variant="body1" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{
                        display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace',
                        fontWeight: 700, letterSpacing: '.1rem', color: 'inherit', textDecoration: 'none'
                    }}>
                        <Link style={{ textDecoration: 'none', color: '#fff', textAlign: "center" }} to="/">
                            VendorStoreApp
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>
                                <Link key={page} style={{ textDecoration: 'none', textAlign: 'center', color: mode == "dark" ? "initial" : "white" }} to={`/${page.split(' ').join('')}`}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Switch checked={mode === 'dark'} onChange={toggleThemeMode} color="default" sx={{ display: { xs: "none", md: "flex" } }} />

                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="primary"
                        sx={{ display: { md: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
                        vertical: 'bottom', horizontal: 'left'
                    }} keepMounted transformOrigin={{
                        vertical: 'top', horizontal: 'left'
                    }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{
                        display: { xs: 'block', md: 'none' }
                    }}>
                        <Switch checked={mode === 'dark'} onChange={toggleThemeMode} color="default" />
                        {pages.map((page) => (
                            <Link key={page} style={{ textDecoration: 'none', color: mode == "dark" ? "white" : "initial", textAlign: 'center' }} to={`/${page.split(' ').join('')}`}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    {page}
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
