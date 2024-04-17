import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../../main';
import { Container, Grid, Box, Typography, List, ListItem, ListItemText, IconButton, TextField, Divider, ListItemAvatar, Avatar, Button } from '@mui/material';
import { Send, Delete  } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function vendorAccountPage() {
  const { mode } = useThemeMode();
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

const handleEditPicture = (e: any) => {
      e.preventDefault();
      console.log('Edit Picture To Be Implemented');
  }

  return (
        <Grid container spacing={2} mb={2} padding={4}>
          <Grid item xs={8}>
            <Container>
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
                  <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3}}>
              <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={5}>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                  <Typography variant='h5'>Store Actions:</Typography>
                </Box>
                     <Container>
                  <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                    {/* Edit Picture Button */}
                    <Button variant="contained" onClick={handleEditPicture}>
                      Edit Picture
                    </Button>

                    {/* Edit Profile Button (Link to userProfile page) */}
                    <Link to="/userProfile" style={{ textDecoration: "none" }}>
                      <Button variant="contained" sx={{ width: "100%", mt: 1 }}>
                        Edit Profile
                      </Button>
                    </Link>


                    <Button variant="contained" onClick={handleEditPicture} sx={{ mt: 1 }}>
                      Edit Store Items
                    </Button>

                    <Button variant="contained" onClick={handleEditPicture} sx={{ mt: 1 }}>
                      Edit Store Greetings
                    </Button>

                    {/* Edit Picture Button */}
                    <Button variant="contained" onClick={handleEditPicture} sx={{ mt: 1 }}>
                      Change Password
                    </Button>
                  </Box>
                     </Container>   
                    </Grid>
              <Grid item padding={1} sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={7}>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                  <Typography variant='h5'>Employees:</Typography>
                </Box>
                      <Box sx={{ height: 400, width: "100%" }}>
                       <DataGrid
                             rows={rows}
                             columns={columns}
                             initialState={{
                               pagination: {
                               paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                      </Box>
                   </Grid>
                  </Grid>
              </Box>

          <Box
            sx={{
              mt: 2,
              bgcolor: mode === "dark" ? "primary.dark" : "primary.light",
              height: "50vh",
              overflow: "hidden",
              borderRadius: "10px",
              overflowY: "auto",
              scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
              scrollbarWidth: "thin",
            }}
          >
            <Grid container padding={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={6}>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                  <Typography variant='h5'>Inventory Waste:</Typography>
                </Box>
                <PieChart
                  series={[
                    {
                      arcLabel: (item) => `${item.label} (${item.value})`,
                      arcLabelMinAngle: 45,
                      data,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: 'white',
                      fontWeight: 'bold',
                    },
                  }}
                  {...size}
                />
              </Grid>
              <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px"  }} xs={6}>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                  <Typography variant='h5'>Revenue:</Typography>
                </Box>
                <BarChart
                  series={[
                    { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
                    { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
                    { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
                    { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
                    { data: [10, 6, 5, 8, 9], label: 'Series C1' },
                  ]}
                  width={560}
                  height={400}
                />
              </Grid>
            </Grid>
            </Box>
        </Container>
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
          <Grid container rowSpacing={1}>
            <Grid item sx={{ height: "100%", width: "100%" }}>

                <Grid container spacing={1} mb={2} padding={1}>
                  <Grid item xs={8}>
                      <Box sx={{ display: 'flex', justifyContent: "center" }}>
                        <Typography variant='h5'>Message InBox:</Typography>
                      </Box>
                      <Box
                        sx={{
                          bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                          height: "50vh",
                          overflow: "hidden",
                          borderRadius: "10px",
                          overflowY: "auto",
                          scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                          scrollbarWidth: "thin",
                        }}
                      >
                        <List>
                          {messages.map((message, index) => (
                            <ListItem key={index}>
                              <ListItemText primary={message} />
                              <IconButton edge="end" aria-label="delete">
                                <Delete />
                              </IconButton>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                  </Grid>
                  <Grid item xs={4}>
                  <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Typography variant='h5'>New Message:</Typography>
                  </Box>
                    <Box
                      sx={{
                        bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                        height: "30vh",
                        overflow: "hidden",
                        borderRadius: "10px",
                        overflowY: "auto",
                        scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                        scrollbarWidth: "thin",
                      }}
                    >
                      <Container>
                        <IconButton onClick={handleSendMessage} aria-label="send"
                        sx={{  ml: 15, bgcolor: mode === "dark" ? "primary.dark" : "primary.light"}} 
                        >
                          <Send />
                        </IconButton>
                        <TextField
                          label="New Message"
                          variant="outlined"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          fullWidth
                          sx={{ mb: 1 }}
                        /> 
                      </Container>
                    </Box>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{ height: "100%", width: "100%", }}>
             <Container sx={{ width: "100%" }}>
              <Box sx={{ display: 'flex', justifyContent: "center" }}>
                <Typography variant='h5'>Consumer Reviews:</Typography>
              </Box>
                <List sx={{ width: '100%', bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
           </Container>
            </Grid>
          </Grid>
          </Box>
          </Grid>

        

        </Grid>
  )
}

export default vendorAccountPage