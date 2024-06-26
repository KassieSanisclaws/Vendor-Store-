import { Link } from 'react-router-dom';
import { useThemeMode } from '../main';
import { Container, Box, Grid, Typography } from '@mui/material';


export const Footer = () => {
    const { mode } = useThemeMode();
    return (
            <Grid sx={{ width: "100%", 
                        height: "100%", 
                        bgcolor: mode === "dark" ? "primary.light" : "primary.dark", 
                        py: { xs: 3, md: 7},
                        margin: "auto",
                       }}
                        >
                <Container maxWidth="xl"
                           sx={{
                             overflow: "hidden", 
                           }}
                       >
                    <Grid container 
                          spacing={{ xs: 2, md: 3 }} 
                          columnSpacing={{ sx: 4, sm: 8, md: 12 }} 
                          sx={{ 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center",
                                padding: "10px",
                             }} 
                            >
                        <Grid item xs={3} sm={3} marginLeft="auto">
                            <Box borderBottom={1.5} width="25%">column1</Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                   <Typography variant='body2'>Link 1</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                    <Typography variant='body2'>Link 2</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                    <Typography variant='body2'>Link 3</Typography>
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={3} sm={3}>
                            <Box borderBottom={1.5} width="25%">column2</Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                   <Typography variant='body2'>Link 1</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                   <Typography variant='body2'>Link 2</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                    <Typography variant='body2'>Link 3</Typography>
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={3} sm={3}>
                            <Box borderBottom={1.5} width="25%">column3</Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                    <Typography variant='body2'>Link 1</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                    <Typography variant='body2'>Link 2</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: "none", color: "#fff" }}
                                    to="/">
                                    <Typography variant='body2'>Link 3</Typography>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Typography variant='h3'>Kassie BCB</Typography> &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Grid>
    );
    }