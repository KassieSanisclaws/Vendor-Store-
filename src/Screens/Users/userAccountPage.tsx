import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useThemeMode } from '../../main';
import { Container, CssBaseline, Grid, Box, Typography } from '@mui/material';


export function UserDashboard() {
    const { mode } = useThemeMode();
    const { userInfo } = useSelector((state: any) => state.auth);


    return (
        <Container maxWidth="xl" sx={{ bgcolor: mode === "dark" ? "#A2F3D1" : "#29AB87", height: "90vh", padding: "10px", borderRadius: "15px", mt: 3, mb: 6 }}>
            <CssBaseline />
            <Grid sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", height: "100%", width: "100%", borderRadius: "10px", overflowY: "auto", scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                <Grid item xs={3}>
                    <Grid container spacing={1} sx={{ height: "30%", bgcolor: "seagreen", overflow: "hidden" }}>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column" }}>
                                <Box sx={{ bgcolor: "blue", flexGrow: 1, overflow: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ height: "100%", bgcolor: "turquoise", width: "100%" }}>

                                    </Box>
                                    <Box sx={{ height: "100%", bgcolor: "bisque", width: "100%" }}>
                                        Box2
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column", bgcolor: "violet" }}>
                                <Typography variant="h5">Calendar</Typography>
                                here
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column", bgcolor: "orange" }}>
                                <Typography>Based on Your Interest</Typography>
                                carousel here
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column", bgcolor: "yellow" }}>
                                <Typography>History Glossory</Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
}