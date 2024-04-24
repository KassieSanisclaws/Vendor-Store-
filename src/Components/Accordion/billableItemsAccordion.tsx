import React, { useState, useCallback, useMemo } from "react";
import { grey } from "@mui/material/colors";
import { ContentCopy, DeleteForever, OpenInBrowser, ExpandMore, MoreVert, Add } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Menu, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography,
         FormControl, 
 } from "@mui/material";


export enum BillableItemsTypes {
    BILLABLEITEMS = 1,
    SERVICECHARGES = 2,
    SUMMARY = 3,
}

interface BillableItemsAndChargesAccordionProps {
    type: {
        billableItemsChargesTypeId: BillableItemsTypes;
        billableItemsChargesTypeName: string;
    };
}


const BillableItemsAccordion = () => {
    const [billableItemsChargesCategory, setBillableItemsChargesCategory] = useState(null);
    const [billableItemsChargesTypeValue, setBillableItemsChargesTypeValue] = useState(null);
    const [billableItemsChargesValue, setBillableItemsChargesValue] = useState(null);

    const [billableItemsChargesSelected, setBillableItemsChargesSelected] = useState([]);

    const [age, setAge] = React.useState('');

    const handleChange = (e: any) => {
        e.preventDefault();
        // setAge(event.target.value);
    };

    const [kebabMenuOpen, setKebabMenuOpen] = useState(null);
    const openMenu = Boolean(kebabMenuOpen);

    const handleKebabMenuClick = (e: any) => {
         e.preventDefault();
        // setKebabMenuOpen(event.currentTarget);
    };

    const handleKebabMenuClose = () => {
        setKebabMenuOpen(null);
    };

    const primary = [grey[800]];
    // const [rows, setRows] = useState([]);
    // const [columns, setColumns] = useState([
    //     { name: 'col1', title: 'Column 1' },
    //     { name: 'col2', title: 'Column 2' },
    //     { name: 'col3', title: 'Column 3' },
    //     { name: 'col4', title: 'Column 4' },
    //     // Add more columns as needed
    // ]);

    const rows = [
        {
            id: 1,
            name: "Due Dilligence/Programming",
            key: "uniqueKey1",
        },
        {
            id: 2,
            name: "conceptualSitePanning",
            key: "uniqueKey2",
        },
        {
            id: 3,
            name: "conceptualDesign",
            key: "uniqueKey3",
        },
        {
            id: 4,
            name: "designDevelopment",
            key: "uniqueKey4"
        },
        {
            id: 5,
            name: "constructionDocuments",
            key: "uniqueKey3",
        },
        {
            id: 6,
            name: "constructionAdministration",
            key: "uniqueKey4"
        }
    ];

    const menuActions = useCallback((row: any) => {
        const commands = [];

        commands.push(
            {
                label: "View",
                // onClick: (e, row) => navigate(`/services/${row.id}/view`),
                icon: <OpenInBrowser />,
            },
            {
                label: "Copy",
                // onClick: (e, row) => handleCopyService(row),
                icon: <ContentCopy />,
            },
            {
                label: "Delete",
                // onClick: (e, row) => null,
                icon: <DeleteForever />,
            }
        );

        return commands;
    }, []);

    // const handleBillableItemsChargesFilter = useCallback((billableItemsChargesTypeId: number) => {
    //     const billableItemsChargesFiltered = billableItemsChargesSelected?.filter(
    //         (billableItems) =>
    //             billableItems.billableItemsChargesTypeId === billableItemsChargesTypeId
    //     );
    //     return billableItemsChargesFiltered;
    // }, [billableItemsChargesSelected]);

    // const handleBillableItemsChargesCategory = useCallback((billableItemsChargesTypeId: number) => {
    //     const billableItemsCategory = billableItemsChargesCategory?.filter(
    //         (billableCategory) => billableCategory.billableItemsChargesTypeId === billableItemsChargesTypeId
    //     );
    //     return billableItemsCategory;
    // }, [billableItemsChargesCategory]);

    // //use this
    // const handleTypeValue = useCallback((billableItemsChargesTypeCategoryId: number) => {
    //     const billableItemsTypeValue = billableItemsChargesTypeValue?.filter(
    //         (billableTypeValue) => billableTypeValue.billableItemsChargesTypeCategoryId === billableItemsChargesTypeCategoryId
    //     );
    //     const billableValue = billableItemsChargesValue?.filter((item1) => {
    //         return billableItemsTypeValue?.some((item2) => {
    //             return item1.billableValueId === item2.billableValueId;
    //         });
    //     });
    //     return billableValue;
    // }, [billableItemsChargesTypeValue, billableItemsChargesValue]);

    // const handleValue = useCallback((invoicingTypeId: number) => {
    //     const typeValue = billableItemsChargesTypeValue?.filter(
    //         (typeValue) => typeValue.invoicingTypeId === invoicingTypeId
    //     );
    //     const value = billableItemsChargesValue?.filter((item1) => {
    //         return typeValue?.some((item2) => {
    //             return item1.invoicingTypeId === item2.invoicingTypeId;
    //         });
    //     });
    //     return value;
    // }, [billableItemsChargesTypeValue, billableItemsChargesValue]);

    // const getTableComponent = useMemo(() => {
    //     switch (billableItemsChargesTypeId) {
    //         case BillableItemsTypes.BILLABLEITEMS:
                // return <BillableItemsTable
                //     billableItemsAndCharges={handleBillableItemsChargesFilter(BillableItemsTypes.BILLABLEITEMS)}
                //     billableItemsAndChargesCategory={handleBillableItemsChargesCategory(BillableItemsTypes.BILLABLEITEMS)}
                //     handleBillableItemsChargesValueType={handleTypeValue}
                // />
            // case BillableItemsTypes.SERVICECHARGES:
                // return <ServiceChargesTable
                //     serviceCharges={handleBillableItemsChargesFilter(BillableItemsTypes.SERVICECHARGES)}
                //     serviceChargesCategory={handleBillableItemsChargesCategory(BillableItemsTypes.SERVICECHARGES)}
                //     handleServiceChargesValueType={handleTypeValue}
                // />
            // case BillableItemsTypes.SUMMARY:
                // return <SummaryTable
                //     summary={handleBillableItemsChargesFilter(BillableItemsTypes.SUMMARY)}
                //     summaryCategory={handleBillableItemsChargesCategory(BillableItemsTypes.SUMMARY)}
                //     handleSummaryValueType={handleTypeValue}
                // />
            // default:
    //             return null;
    //     }
    // }, [billableItemsChargesTypeId]);



    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Box mx={2} my={1}>
                    <Accordion defaultExpanded disableGutters elevation={0}>
                        <AccordionSummary expandIcon={<ExpandMore />} sx={{ flexDirection: "row-reverse", mx: -2 }}>
                            <Typography variant="h4" sx={{ mx: 1 }}>
                                {/* {billableItemsChargesTypeName} */}
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails sx={{ pl: 3.5, backgroundColor: "#F8F8F8", borderRadius: "15px", border: "3px solid #D3D3D3" }}>
                            {/* {getTableComponent} */}
                            <TableContainer sx={{ width: "100%" }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Item Name</TableCell>
                                            <TableCell align="center">Payee</TableCell>
                                            <TableCell align="center">Item ID</TableCell>
                                            <TableCell align="center">Invoice Trigger</TableCell>
                                            <TableCell align="center">Billable Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* {rows.map((row) => ( */}

                                        <TableRow key={""} >
                                            <TableCell align="center" sx={{}}>
                                                <FormControl sx={{ minWidth: "230px", }}>
                                                    <Select sx={{ height: "6vh", textAlign: "left" }}
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        onChange={handleChange}>
                                                        <MenuItem value="" sx={{ justifyContent: "flex-start" }}><em>None</em></MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </TableCell >

                                            <TableCell align="center">
                                                <FormControl sx={{ minWidth: "230px" }}>
                                                    <Select sx={{ height: "6vh", textAlign: "left" }}
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        onChange={handleChange}>
                                                        <MenuItem value="" sx={{ justifyContent: "flex-start" }}><em>None</em></MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </TableCell>

                                            <TableCell align="right">{"row.name"}</TableCell>

                                            <TableCell align="center">
                                                <FormControl sx={{ minWidth: "230px" }}>
                                                    <Select sx={{ height: "6vh", textAlign: "left" }}
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        onChange={handleChange}>
                                                        <MenuItem value="" sx={{ justifyContent: "flex-start" }}><em>None</em></MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </TableCell>

                                            <TableCell align="center">
                                                <FormControl sx={{ minWidth: "230px", }}>
                                                    <TextField
                                                        id="outlined-read-only-input"

                                                        defaultValue="$30,000.00"
                                                        InputProps={{
                                                            readOnly: true,
                                                            sx: {
                                                                height: "6vh", // Change the height of the TextField
                                                                padding: "10px", // Adjust padding as needed
                                                                fontSize: "14px", // Adjust font size as needed
                                                            }
                                                        }}
                                                        inputProps={{ style: { textAlign: "right" } }}
                                                    />
                                                </FormControl>
                                            </TableCell>

                                            <TableCell align="center">
                                                <Button style={{ color: 'grey', }}
                                                    onClick={() => { alert("hello"); openMenu }}
                                                    disableRipple
                                                    disableTouchRipple
                                                    disableFocusRipple
                                                    aria-haspopup="true"
                                                    aria-controls="simple-menu"
                                                >
                                                    <MoreVert />
                                                </Button>
                                                <Menu id="simple-menu"
                                                    keepMounted
                                                    open={openMenu}
                                                    onClose={handleKebabMenuClose}
                                                >


                                                    <MenuItem onClick={() => handleKebabMenuClick("Option 1")}>
                                                        Option 1
                                                    </MenuItem>
                                                    <MenuItem onClick={() => handleKebabMenuClick("Option 2")}>
                                                        Option 2
                                                    </MenuItem>
                                                    <MenuItem onClick={() => handleKebabMenuClick("Option 3")}>
                                                        Option 3
                                                    </MenuItem>


                                                </Menu>
                                            </TableCell>
                                        </TableRow>
                                        {/* // ))} */}
                                        <Button
                                            startIcon={<Add />}
                                            // component={RouterLink}
                                            // to="/services/create"
                                            sx={{ mt: 2 }}>
                                            Create Service Template
                                        </Button>
                                        <TableRow >
                                            <TableCell sx={{ position: "relative", left: "2%" }}>
                                                <Typography>
                                                    SubTotal
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ position: "absolute", right: "6%" }}>
                                                <Typography>
                                                    $20,000.00
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>

        </Grid>
    );
};

export default BillableItemsAccordion;