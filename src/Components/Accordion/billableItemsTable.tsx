import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid, Select, MenuItem, Typography, FormControl, TextField, IconButton, Menu, ListItemIcon, Button, Divider,
        
 } from '@mui/material';
import { Add, DeleteForever, Edit, MoreVert } from '@mui/icons-material';


interface Props {
    billableItemsAndCharges?: any[];
    billableItemsAndChargesCategory?: any[];
    handleBillableItemsChargesValueType?: (categoryId: number) => [];
}

export const BillableItemsTable = ({  }: Props) => {
    const [experienceRow, setExperienceRow] = useState({});
    const [deleteRow, setDeleteRow] = useState([]);
    // const [deleteRow, setDeleteRow] = useState<Qualification.IUserQualifications>(); // ask about this line 
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedApplication, setSelectedApplication] = React.useState(null);


    const handleOpenActionsMenu = (e: any) => {
        setAnchorEl(e.currentTarget);
        // setSelectedApplication(true);
    };

    const handleKebabMenuClose = () => {
        setAnchorEl(null);
        setSelectedApplication(null);
    };

    const options = [
        { value: 1, displayValue: 'Option 1' },
        { value: 2, displayValue: 'Option 2' },
        { value: 3, displayValue: 'Option 3' },
    ];

    const handleChange = (e: any) => {
        e.preventDefault();
        console.log(e.target.value);
    };

    const DividerLine = () => {
        return <Divider sx={{ width: "308%", height: "1px", bgcolor: "#D3D3D3", ml: .3 }} />;
    }

    const handleRemoval = () => {
        return alert("Functionality To Be Impemented");
    }
    // Repeat 3 times to render three rows
    const rows = Array.from({ length: 3 }).map((_, index) => (
        <Grid container key={index} spacing={2} >
            <Grid item xs={2}>
                {/* <SelectMenu options={options} value={options[0].value} label="Menu 1" onChange={handleChange} /> */}
                <Select sx={{ height: "5vh", textAlign: "left", backgroundColor: "white" }}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    onChange={handleChange}>
                    <MenuItem value="" sx={{ justifyContent: "flex-start" }}><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={2}>
                <Select value={options[0].value} label="Menu 2" onChange={handleChange} />
            </Grid>
            <Grid item xs={2}>
                <TextField value="Unchangeable text" InputProps={{ readOnly: true }} />
            </Grid>

            <Grid item xs={2}>
                <Select value={options[0].value} label="Menu 3" onChange={handleChange} />
            </Grid>

            <Grid item xs={2}>
                <TextField value="12458" InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={2}>
                <IconButton aria-label="more">
                    <MoreVert />
                </IconButton>
            </Grid>
        </Grid>
    ));

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead >
                    <TableRow>
                        {/* {columns.map((columnTtitle, i) => (
                            <TableCell align={i === 0 ? "left" : "center"} key={i}>{columnTtitle.title}</TableCell>
                        ))} */}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell align="left">
                                <Grid sx={{ width: "25vw" }}>
                                    <FormControl sx={{ width: "17vw" }}>
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
                            </TableCell >

                            <TableCell align="center">
                                <Grid container>
                                    <FormControl sx={{ width: "12vw" }}>
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
                                    <Grid sx={{ minWidth: "8vw" }}>
                                        <Typography variant="body1">
                                            14412
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>

                            <TableCell align="right">
                                <Grid container>
                                    <FormControl sx={{ width: "12vw" }}>
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
                                    <FormControl sx={{ width: "12vw" }}>
                                        <TextField id="outlined-read-only-input"
                                            defaultValue="$30,000.00"
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    height: "5vh",
                                                    padding: "10px",
                                                    fontSize: "14px",
                                                    backgroundColor: "white",
                                                }
                                            }}
                                            inputProps={{ style: { textAlign: "right" } }}
                                        />
                                    </FormControl>
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
                                    onClose={handleKebabMenuClose}
                                    PaperProps={{ style: { boxShadow: "0px 1px 3px rgba(128,128,128,0.5)" } }}>
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
                                    <MenuItem>
                                        <ListItemIcon onClick={handleRemoval}>
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
                        Create Service Template
                    </Button>
                    {<DividerLine />}
                    <TableRow >
                        <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} mt={1}>
                            <Grid item xs={6} sm={6} md={12} sx={{}}>
                                <Typography variant="body1">
                                    SubTotal
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
    );
}