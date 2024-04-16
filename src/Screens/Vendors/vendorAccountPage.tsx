import React from 'react';
import { useThemeMode } from '../../main';
import { Container, Grid, Box, Typography } from '@mui/material';

function vendorAccountPage() {
  const { mode } = useThemeMode();

  return (
      
        <Grid container spacing={2} mb={2} padding={4}>
          <Grid item xs={8}>
              <Box
                 sx={{ 
                       bgcolor: mode === "dark" ? "primary.dark" : "primary.light",   
                       height: "50vh",
                       overflow: "hidden", 
                       borderRadius: "10px", 
                       overflowY: "auto", 
                       scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", 
                       scrollbarWidth: "thin", 
                      }}
                    >
                  <Container>
                    <Box sx={{ height: "100%", width: "70vw", bgcolor: "red" }}>

                    </Box>
                  </Container>
              </Box>
          </Grid>

          <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: mode === "dark" ? "primary.dark" : "primary.light",
              height: "100%",
              overflow: "hidden",
              borderRadius: "10px",
              overflowY: "auto",
              scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
              scrollbarWidth: "thin",
            }}
          >
          <Container>
            <Box sx={{ height: "100vh", width: "50vw", bgcolor: "green" }}>

            </Box>
          </Container>
          </Box>
          </Grid>

        <Grid item xs={8}>
          <Box
            sx={{
              bgcolor: mode === "dark" ? "primary.dark" : "primary.light",
              height: "50vh",
              overflow: "hidden",
              borderRadius: "10px",
              overflowY: "auto",
              scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
              scrollbarWidth: "thin",
            }}
          >
            <Container>
              <Box sx={{ height: "100%", width: "70vw", bgcolor: "blue" }}>

              </Box>
            </Container>
          </Box>
        </Grid>

        </Grid>
  )
}

export default vendorAccountPage