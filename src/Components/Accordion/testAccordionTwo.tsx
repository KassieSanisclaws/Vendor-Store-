import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, TableContainer, Table, TableBody, TableHead, TableRow, TextField, 
         MenuItem, Select, FormControl, Grid, IconButton, Menu, ListItemIcon, Divider, Button, TableCell, 
 } from '@mui/material';
import { Add, DeleteForever, Edit, MoreVert } from '@mui/icons-material';



interface Props {
    serviceCharges?: any[];
    serviceChargesCategory?: any[];
    handleServiceChargesValueType?: (categoryId: number) => [];
}

export const TestAccordionTwo = () => {
    const [experienceRow, setExperienceRow] = useState({});
    const [deleteRow, setDeleteRow] = useState([]);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedApplication, setSelectedApplication] = React.useState(null);
    const [selectedRow, setSelectedRow] = useState([]);

    const handleOpenActionsMenu = (e: any) => {
        setAnchorEl(e.currentTarget);
    };

    const handleKebabMenuClose = () => {
        setAnchorEl(null);
        setSelectedApplication(null);
    };

    const handleChange = (e: any) => {
        console.log(e.target.value);
    };

    const handleRowClick = (index: any) => {
        // if (selectedRow.includes(index)) {
        //     setSelectedRow(selectedRow.filter(item => item !== index));
        // } else {
        //     setSelectedRow([index]);
        // }
    };

    const RedTabBox = () => {
        return <Box sx={{ width: "20vw", height: "1.5px", bgcolor: "red" }} />;
    }

    // const generateRows = (data) => {
    //     return data.map(item => {
    //         let row = {};
    //         item.fields.forEach((field, index) => {
    //             row[columns[index].name] = field;
    //         });
    //         return row;
    //     });
    // }
    // const rowData = dueDilligenceProgrammingMoclkData.map(column => column.fields)

    return (
        <TableContainer sx={{ width: "100%" }}>
            <Table aria-label="simple table">
                <TableHead>
               
                        <TableRow>
                            {/* Add your code here */}
                        </TableRow>
                    </TableHead>
                <TableBody>

                    {Array.from({ length: 8 }).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell align="left"
                                onClick={() => handleRowClick(i)}>
                                <Grid item xs={6} sm={6} md={12} sx={{ width: "23vw" }}>
                                    <Typography variant="body1">
                                        {"columns[i].title" || "Name"}
                                    </Typography>
                                </Grid>
                                { <RedTabBox />}
                            </TableCell>
                            <TableCell align="center">
                                <Grid>
                                    <FormControl sx={{ width: "14vw" }}>
                                        <Select sx={{ height: "5vh", textAlign: "left", backgroundColor: "white" }}
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            onChange={handleChange}>
                                            <MenuItem value="" sx={{ justifyContent: "flex-start" }}><em>None</em></MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </TableCell>
                            <TableCell align="center">
                                <Grid>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="$30,000.00"
                                        InputProps={{
                                            readOnly: true,
                                            sx: {
                                                height: "6vh",
                                                padding: "10px",
                                                fontSize: "14px",
                                                backgroundColor: "white"
                                            }
                                        }}
                                        inputProps={{ style: { textAlign: "right" } }}
                                    />
                                </Grid>
                            </TableCell>

                            <TableCell align="center">
                                <Grid container>
                                    <FormControl sx={{ width: "14vw" }}>
                                        <Select sx={{ height: "5vh", textAlign: "left", backgroundColor: "white" }}
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            onChange={handleChange}>
                                            <MenuItem value="" sx={{ justifyContent: "flex-start" }}><em>None</em></MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </TableCell>

                            <TableCell align="center">
                                <Grid container>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="$30,000.00"
                                        InputProps={{
                                            readOnly: true,
                                            sx: {
                                                height: "5vh",
                                                padding: "10px",
                                                fontSize: "14px",
                                                backgroundColor: "white"
                                            }
                                        }}
                                        inputProps={{ style: { textAlign: "right" } }}
                                    />

                                </Grid>
                            </TableCell>

                            <TableCell align="center">
                                <IconButton style={{ color: 'grey', }}
                                    onClick={(e) =>
                                        handleOpenActionsMenu(e)
                                    }>

                                    <MoreVert />
                                </IconButton>
                                <Menu id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleKebabMenuClose} >
                                    <MenuItem
                                        onClick={() => {
                                            setAnchorEl(null);
                                            //  setEdit(true);
                                        }}>
                                        <ListItemIcon>
                                            <Edit fontSize="small" />
                                        </ListItemIcon>
                                        <Typography variant="inherit">Duplicate Item</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => null}>
                                        <ListItemIcon>
                                            <DeleteForever fontSize="small" />
                                        </ListItemIcon>
                                        <Typography variant="inherit">Remove Item</Typography>
                                    </MenuItem>
                                </Menu>
                            </TableCell>
                        </TableRow>

                    ))}
                    <Button
                        startIcon={<Add />}
                        // component={RouterLink}
                        // to="/services/create"
                        sx={{ mt: 2 }}>
                        Add Invoice Trigger
                    </Button>
                    <TableRow >

                        <Divider variant="middle" sx={{ border: "1.5px solid #D3D3D3", margin: "1rem 0" }} />

                        <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} mt={1}>
                            <Grid item xs={6} sm={6} md={12} sx={{}}>
                                <Typography variant="body1">
                                    SubTotal
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={12} sx={{ position: "absolute", right: "45%" }}>
                                <Typography variant="body1" >
                                    100%
                                </Typography>
                            </Grid>
                            <Grid item sx={{ position: "absolute", right: "6%" }}>
                                <Typography variant="body1">
                                    $820,000.00
                                </Typography>
                            </Grid>
                        </Grid>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}