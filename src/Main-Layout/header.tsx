import { Link } from 'react-router-dom';
import { useThemeMode } from '../main';
import { AppBar, Toolbar, IconButton, Stack, Button, Typography, Switch } from '@mui/material';
import { CatchingPokemon } from '@mui/icons-material';


export const Header = () => {
    const { mode, toggleThemeMode } = useThemeMode();
    return (
        <AppBar position="static" sx={{ bgcolor: "#29AB87", }}>
            <Toolbar>
                <IconButton size="large" edge="start" color="secondary" aria-label="logo">
                    <CatchingPokemon /> {/* this line will change for icon img  */}
                </IconButton>

                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    <Link style={{ textDecoration: "none", color: "#fff" }}
                        to="/">
                        VendorStoreApp
                    </Link>
                </Typography>

                {/* Light / dark mode toggle switch. */}
                <Switch
                    checked={mode === "dark"} //Sets chekced state based om current mode.
                    onChange={toggleThemeMode} //calls the toggleThemeMode function to change the mode.
                    color="default"
                />

                <Stack direction="row" spacing={2}>
                    <Button color="inherit" >
                        <Link style={{ textDecoration: "none", color: "#fff" }}
                            to="/about" >
                            {"About"}
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={{ textDecoration: "none", color: "#fff" }}
                            to="/login">
                            Login
                        </Link>
                    </Button>
                    {/* <Button color="inherit">
                            <Link style={{ textDecoration: "none", color: "#fff" }}
                               to="/register">
                                Register
                            </Link>
                         </Button> */}
                    <Button color="inherit">
                        <Link style={{ textDecoration: "none", color: "#fff" }}
                            to="/vendor">
                            Vendor
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={{ textDecoration: "none", color: "#fff" }}
                            to="/contactUs">
                            ContactUs
                        </Link>
                    </Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}