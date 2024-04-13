import { useThemeMode } from '../main';
import { Container, Box, Grid, Typography, CssBaseline } from '@mui/material';


export const MainIndex = () => {
    const { mode } = useThemeMode();

return (
    <Container maxWidth="xl" sx={{ height: "100%", mt: 3, mb: 6 }}>
        <Box sx={{ height: "100%" }}>
            <Container sx={{ bgcolor: mode === "dark" ? "#A2F3D1" : "#29AB87", height: "90vh", padding: "40px", width: "100%", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px" }}>
                <CssBaseline />
                <Box sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", height: "35vh", width: "100%", overflow: "hidden", borderRadius: "10px" }}>
                    <Typography padding={2}>
                        h1. div 1
                    </Typography>
                </Box>

                <Box sx={{ width: "100%", flexGrow: 1, position: "relative", top: "1.5rem", }}>
                    <Container sx={{ bgcolor: mode === "dark" ? "#A2F3D1" : "#29AB87", height: "50vh", padding: "40px", width: "100%", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px", overflowY: "auto", scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {Array.from(Array(3)).map((_, index) => (
                                <Grid item xs={3} sm={4} key={index}>
                                    <Box sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", height: "35vh", borderRadius: "13px" }}>
                                        <Typography padding={2}>
                                            boxes {index + 1}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

            </Container>
        </Box>
    </Container>
 )
}