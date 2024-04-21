import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../../main';
import { Container, Grid, Box, Typography, List, ListItem, ListItemText, IconButton, TextField, Divider, ListItemAvatar, Avatar, Button, Rating, AlertColor, Alert, Snackbar,
         Card, Skeleton, Accordion, AccordionSummary, AccordionDetails, Checkbox, AccordionSlots, Fade, Paper, Table, TableBody, TableCell, TableContainer, TableHead, 
         TableRow, TablePagination
 } from '@mui/material';
import { Send, Delete, ExpandMore } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export interface ButtonData {
    name: string;
    to?: string;
    onClick: (e?: any) => void;
}

export interface ReviewData {
    name: string;
    avatarSrc: string;
    title: string;
    reviewer: string;
    comment: string;
    rating: number;
}

export interface PieGraphData {
    value: number;
    label: string;
    width: number;
    height: number;
}

export interface RowData {
    id: number;
    lastName: string;
    firstName: string;
    age: number | null;
}

export interface UsersLayoutData {
    mode: string;
    loading?: boolean;
    messages?: string[];
    newMessageState?: {
        Active: boolean;
        message: string;
    }
    snackbarState?: {
        active: boolean;
        severity: AlertColor;
        message: string;
    }
    newsFeedExpandedState?: boolean[];
    titleBox?: string;
    titleBox1?: string;
    titleBox2?: string;
    titleBox3?: string;
    titleBox4?: string;
    titleBox5?: string;
    titleBox6?: string;
    titleBox7?: string;
    titleBox8?: string;
    titleBox9?: string;
    titleBox10?: string;
    userType: "admin" | "vendor" | "consumer";

    includeAdditionalActions?: boolean;
    includeAdminActions?: boolean;
    includeUserPicture?: boolean;
    includeNewsFeed?: boolean;
    includeMessages?: boolean;
    includeBasedOnUserInterest?: boolean;
    includeUserCalendar?: boolean;
    includeUserPurchaseHistory?: boolean;
    includeStoreReviews?: boolean;
    includeButtonsActions?: boolean;
    includeVendorEmployeesTable?: boolean;
    includeSnackbarPopup?: boolean;
    includePieGraph?: boolean;
    includeBarGraph?: boolean;
    includeTitleBox?: boolean;
    includeTitleBox1?: boolean;
    includeTitleBox2?: boolean;
    includeTitleBox4?: boolean;
    includeTitleBox6?: boolean;
    includeTitleBox7?: boolean;
    includeTitleBox8?: boolean;
    includeTitleBox9?: boolean;
    handleMessageSend?: () => void;
    handleNewMessage?: (message: string) => void;
    handleMessageDelete?: (message: string) => void;
    handleSnackbarClosed?: () => void;
    handleExpansion?: (idx: number) => void;
    data: PieGraphData[];
    columns: GridColDef[];
    rows: RowData[];
    buttonsData: ButtonData[];
    reviews: ReviewData[];
}

const CustomIconHoverStyle = styled(IconButton)(({ theme }) => ({
    '&:hover': {
        '& svg': {
            color: theme.components?.MuiIcon.styleOverrides.root['&:hover']['& .MuiSvgIcon-root'].color,
        }
      }
  }));

interface ColumnHistory {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columnsHistory: readonly ColumnHistory[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'name', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
        name: string,
        code: string,
        population: number,
        size: number,
    ): Data {
        const density = population / size;
        return { name, code, population, size, density };
    }
    
    const rowsHistory = [
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),
        createData('United States', 'US', 327167434, 9833520),
        createData('Canada', 'CA', 37602103, 9984670),
        createData('Australia', 'AU', 25475400, 7692024),
        createData('Germany', 'DE', 83019200, 357578),
        createData('Ireland', 'IE', 4857000, 70273),
        createData('Mexico', 'MX', 126577691, 1972550),
        createData('Japan', 'JP', 126317000, 377973),
        createData('France', 'FR', 67022000, 640679),
        createData('United Kingdom', 'GB', 67545757, 242495),
        createData('Russia', 'RU', 146793744, 17098246),
        createData('Nigeria', 'NG', 200962417, 923768),
        createData('Brazil', 'BR', 210147125, 8515767),
    ];

function PageLayout({
    data,
    columns,
    rows,
    buttonsData,
    reviews,
    messages,
    userType,
    newMessageState,
    snackbarState,
    newsFeedExpandedState = [false, false, false, false],
    loading = false,
    titleBox,
    titleBox1,
    titleBox2,
    titleBox3,
    titleBox4,
    titleBox5,
    titleBox6,
    titleBox7,
    titleBox8,
    titleBox9,
    titleBox10,
    includeTitleBox = false,
    includeTitleBox1 = false,
    includeTitleBox2 = false,
    includeTitleBox4 = false,
    includeTitleBox6 = false,
    includeTitleBox7 = false,
    includeTitleBox8 = false,
    includeTitleBox9 = false,
    includeMessages = false,
    includeBarGraph = false,
    includePieGraph = false,
    includeNewsFeed = false,
    includeUserPicture = false,
    includeUserCalendar = false,
    includeStoreReviews = false,
    includeUserPurchaseHistory = false,
    includeAdditionalActions = false,
    includeAdminActions = false,
    includeButtonsActions = false,
    includeBasedOnUserInterest = false,
    includeVendorEmployeesTable = false,
    includeSnackbarPopup = false,
    handleMessageSend,
    handleNewMessage,
    handleMessageDelete,
    handleSnackbarClosed,
    handleExpansion,
    
    

}: UsersLayoutData){
    const { mode } = useThemeMode();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (e: any, newPage: number) => {
        e.preventDefault();
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const size = {
        width: 400,
        height: 200,
    };

    const dataSample = [
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
            channel: 'Don Diablo',
            views: '396k views',
            createdAt: 'a week ago',
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            title: 'Queen - Greatest Hits',
            channel: 'Queen Official',
            views: '40M views',
            createdAt: '3 years ago',
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
            channel: 'Calvin Harris',
            views: '130M views',
            createdAt: '10 months ago',
        },
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
            channel: 'Don Diablo',
            views: '396k views',
            createdAt: 'a week ago',
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            title: 'Queen - Greatest Hits',
            channel: 'Queen Official',
            views: '40M views',
            createdAt: '3 years ago',
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
            channel: 'Calvin Harris',
            views: '130M views',
            createdAt: '10 months ago',
        },
    ];

    

    return (
        <Grid container spacing={2} mb={2} padding={4}>
            <Grid item xs={8}>
                <Container>
                    <Box
                        sx={{
                            bgcolor: mode === "dark" ? "primary.dark" : "primary.light",
                            height: "55.5vh",
                            overflow: "hidden",
                            borderRadius: "10px",
                            overflowY: "auto",
                            scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                            scrollbarWidth: "thin",
                        }}
                    >
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: "flex", justifyContent: "space-evenly", padding: "20px" }}>         
                            <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={3.5}>
                                {includeSnackbarPopup && (
                                    <Snackbar
                                        open={snackbarState?.active}
                                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                        sx={{ mt: 25, mr: 22 }}
                                        autoHideDuration={4000}
                                        onClose={handleSnackbarClosed}
                                    >
                                        <Alert
                                            onClose={handleSnackbarClosed}
                                            severity={snackbarState?.severity || "info"}
                                            variant='filled'
                                            sx={{ width: '100%' }}
                                        >
                                            {snackbarState?.message}
                                        </Alert>
                                    </Snackbar>
                                )}
                               {includeTitleBox && (
                                <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                    <Typography variant='h5'>{titleBox}</Typography>
                                </Box>
                                )}
                                <Container sx={{ mb: 2 }}>
                                  {includeUserPicture && (
                                        <Box sx={{ bgcolor: "grey", width: "100%", height: '28vh', overflow: "hidden" }}>
                                            <img src="user-profile-picture-url" alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            picture here
                                        </Box>
                                    )}
                                    {includeButtonsActions && (
                                      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                                        {buttonsData.map((button, indx) => (
                                            <React.Fragment key={indx}>
                                                {('to' in button) && button.to ? (
                                                    <Link to={button.to} style={{ textDecoration: "none" }}>
                                                        <Button variant="contained" sx={{ mt: 1, width: "100%" }}>
                                                            {button.name}
                                                        </Button>
                                                    </Link>
                                                ) : (
                                                    <Button variant="contained" onClick={button.onClick} sx={{ mt: 1, width: "100%" }}>
                                                        {button.name}
                                                    </Button>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Box> 
                                    )}         
                                </Container>
                            </Grid>
                            <Grid item padding={1} sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={8}>
                                {includeTitleBox1 && (
                                  <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                     <Typography variant='h5'>{titleBox1}</Typography>
                                 </Box>
                                )}
                               {includeVendorEmployeesTable && (
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
                               )} 
                            {includeUserCalendar && (
                                    <Box sx={{ height: "45vh", display: "flex", flexDirection: "column" }}>
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                                            <Typography variant='h4'>Your Calendar</Typography>
                                        </Box>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateCalendar
                                                defaultValue={dayjs()} //Provide a default value for the calendar
                                                views={['year', 'month', 'day']} //Include the views you want to display
                                                sx={{ height: "100%", width: "100%" }}
                                            />
                                        </LocalizationProvider>
                                    </Box>
                                  )}
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            mt: 2,
                            bgcolor: mode === "dark" ? "primary.dark" : "primary.light",
                            height: "55vh",
                            overflow: "hidden",
                            borderRadius: "10px",
                            overflowY: "auto",
                            scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                            scrollbarWidth: "thin",
                        }}
                    >
                        <Grid container padding={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: "flex", justifyContent: "space-evenly" }}>             
                            <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={12} sm={4.5}>
                               {includeTitleBox2 && (
                                 <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                    <Typography variant='h5'>{titleBox2}</Typography>
                                </Box>
                               )}
                               {includeNewsFeed && (
                                    <Box sx={{ height: "100%", width: "100%" }}>
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                                            <Typography variant='h4'>{titleBox3}</Typography>
                                        </Box>
                                        {data.map((_, idx: number) => (
                                            <Accordion
                                                key={idx}
                                                expanded={newsFeedExpandedState[idx]}
                                                onChange={() => handleExpansion?(idx) : null}
                                                slots={{ transition: Fade as AccordionSlots['transition'] }}
                                                slotProps={{ transition: { timeout: 400 } }}
                                                sx={{
                                                    '& .MuiAccordion-region': { height: newsFeedExpandedState ? 'auto' : 0 },
                                                    '& .MuiAccordionDetails-root': { display: newsFeedExpandedState ? 'block' : 'none' },
                                                }}

                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMore />}
                                                    aria-controls={`panel${idx + 1}-content`}
                                                    id={`panel${idx + 1}-header`}
                                                >
                                                    <Checkbox
                                                        checked={newsFeedExpandedState[idx]}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        onChange={() => handleExpansion?(idx) : null} // Toggle the expansion state
                                                    />
                                                    <Typography>Title {idx + 1}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </Box>
                               )}
                               {includePieGraph && (
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
                               )}          
                            </Grid>
                            <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={12} sm={6.5}>
                              {includeTitleBox4 && (
                                 <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                    <Typography variant='h5'>{titleBox4}</Typography>
                                 </Box>
                                )}
                             {includeBarGraph && (
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
                               )}
                               {includeBasedOnUserInterest && (
                                    <Box sx={{ display: "flex", flexDirection: "column", }}>
                                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                            <Typography variant='h4'>{titleBox5}</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "column", }}>
                                            {Array.from({ length: Math.ceil(dataSample.length / 3) }).map((_, rowIndx) => {
                                                return (
                                                    <Grid container wrap="nowrap" spacing={2} padding={2}>
                                                        {[0, 1, 2].map((colIndx) => {
                                                            const dataIndx = colIndx * 3 + rowIndx;
                                                            const item = data[dataIndx];
                                                            return (
                                                                <Grid item key={dataIndx}>
                                                                    <Card sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                                                                        {item ? (
                                                                            <img
                                                                                style={{ width: 210, height: 118 }}
                                                                                alt={item.label}
                                                                                // src={item.}
                                                                            />
                                                                        ) : (
                                                                            <Skeleton variant="rectangular" width={210} height={118} />
                                                                        )}
                                                                        {item ? (
                                                                            <Box sx={{ pr: 2 }}>
                                                                                <Typography gutterBottom variant="body2">
                                                                                    {item.label}
                                                                                </Typography>
                                                                                <Typography display="block" variant="caption" color="text.secondary">
                                                                                    {item.label}
                                                                                </Typography>
                                                                                <Typography variant="caption" color="text.secondary">
                                                                                    {`${item.label} • ${item.label}`}
                                                                                </Typography>
                                                                            </Box>
                                                                        ) : (
                                                                            <Box sx={{ pt: 0.5 }}>
                                                                                <Skeleton />
                                                                                <Skeleton width="60%" />
                                                                            </Box>
                                                                        )}
                                                                    </Card>
                                                                </Grid>
                                                            );
                                                        })}
                                                    </Grid>
                                                );
                                            })}
                                        </Box>
                                    </Box>
                               )}   
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
                        <Grid item sx={{ height: "100%", width: "100%" }} padding={1}>
                            <Grid container spacing={1} mb={2} padding={1}>
                                <Grid item xs={8}>          
                                    <Box
                                        sx={{
                                            bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                                            height: "50vh",
                                            overflow: "hidden",
                                            borderRadius: "10px",
                                            overflowY: "auto",
                                            scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                                            scrollbarWidth: "thin",
                                            mt: 1
                                        }}
                                    >
                                   {includeTitleBox6 && (
                                       <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                          <Typography variant='h5'>{titleBox6}</Typography>
                                       </Box>
                                     )} 
                                      <List>
                                          {(messages && messages.length > 0) ? ( 
                                              messages.map((message, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={message} />
                                                    <CustomIconHoverStyle 
                                                           edge="end" 
                                                           aria-label="delete"
                                                           onClick={handleMessageDelete && (() => handleMessageDelete(message))}  
                                                           >
                                                        <Delete />
                                                    </CustomIconHoverStyle>
                                                </ListItem>
                                            ))
                                        ) : (
                                            <ListItem>
                                                <ListItemText primary="No messages" />
                                            </ListItem>
                                        )}
                                        </List>
                                    </Box>
                                </Grid>
                            
                                <Grid item xs={4}>        
                                    <Box
                                        sx={{
                                            bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                                            height: "23vh",
                                            overflow: "hidden",
                                            borderRadius: "10px",
                                            overflowY: "auto",
                                            scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                                            scrollbarWidth: "thin",
                                            mt: 1
                                        }}
                                    >
                                     {includeTitleBox7 && (
                                        <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                          <Typography variant='h5'>{titleBox7}</Typography>
                                        </Box>
                                      )}   
                                      <Container>
                                        {includeMessages && (
                                            <Grid container xs={8} md={12}>
                                            {/* <Box sx={{ position: "relative", top: 157, left: "95px", overflow: "hidden" }}> */}
                                            <IconButton 
                                                onClick={handleMessageSend} 
                                                aria-label="send"
                                                sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", padding: "10px", mt: 1, position: "relative", top: "75px", left: "95px"  }}
                                            >
                                                <Send />
                                            </IconButton>
                                            {/* </Box> */}
                                            <Box sx={{ position: "relative", top: "-40px" }}>
                                                <TextField
                                                label="New Message"
                                                variant="outlined"
                                                value={newMessageState?.message || ""}
                                                onChange={(e) => newMessageState && handleNewMessage && handleNewMessage(e.target.value)}
                                                fullWidth
                                            />  
                                            </Box>        
                                          </Grid>
                                        )}
                                    </Container>
                                  </Box>
                                {includeAdditionalActions && (
                                        <Box 
                                           sx={{
                                              bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                                              height: "26vh",
                                              overflow: "hidden",
                                              borderRadius: "10px",
                                              overflowY: "auto",
                                              scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                                              scrollbarWidth: "thin",
                                              mt: 1
                                           }}
                                         >
                                      {includeTitleBox8 && (
                                        <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                            <Typography variant='h5'>{titleBox8}</Typography>
                                        </Box>
                                      )}
                                     {includeAdminActions && (
                                        <Box>
                                           <Typography variant='h6'>Admin Actions</Typography>
                                        </Box>
                                     )}
                                     </Box>
                                   )}
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ height: "100%", width: "100%", }} padding={2}>
                            <Box
                                sx={{
                                    bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                                    height: "100%",
                                    overflow: "hidden",
                                    borderRadius: "10px",
                                    overflowY: "auto",
                                    scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87",
                                    scrollbarWidth: "thin",
                                    mt: 1
                                }}
                            >
                            <Container sx={{ width: "100%", height: "100%" }}>
                               {includeTitleBox9 && (
                                   <Box sx={{ display: 'flex', justifyContent: "center", mt: 2}}>
                                      <Typography variant='h5'>{titleBox9}</Typography>
                                   </Box>
                                )}
                            {includeStoreReviews && (
                                <List sx={{ width: '100%', }}>
                                    {reviews.map((review, indx) => (
                                        <React.Fragment key={indx}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar alt={review.name} src={review.avatarSrc} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={review.title}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="text.primary"
                                                            >
                                                                {review.reviewer}
                                                            </Typography>
                                                            {' — ' + review.comment}
                                                            <Rating name={`rating-${indx}`} value={review.rating} readOnly />
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListItem>
                                            {indx < reviews.length - 1 && <Divider variant="inset" component="li" />}
                                        </React.Fragment>
                                    ))}
                                </List>
                            )}
                            
                            {includeUserPurchaseHistory && (
                                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column", }}>
                                                <Box sx={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                                                    <Typography variant='h4'>{titleBox10}</Typography>
                                                </Box>
                                                <Paper sx={{ width: '100%', overflow: 'hidden', }}>
                                                    <TableContainer sx={{ maxHeight: 440, scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                                                        <Table stickyHeader aria-label="sticky table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    {columnsHistory.map((column) => (
                                                                        <TableCell
                                                                            key={column.id}
                                                                            align={column.align}
                                                                            style={{ minWidth: column.minWidth }}
                                                                        >
                                                                            {column.label}
                                                                        </TableCell>
                                                                    ))}
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {rowsHistory
                                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                    .map((row) => {
                                                                        return (
                                                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                                {columnsHistory.map((column) => {
                                                                                    const value = row[column.id];
                                                                                    return (
                                                                                        <TableCell key={column.id} align={column.align}>
                                                                                            {column.format && typeof value === 'number'
                                                                                                ? column.format(value)
                                                                                                : value}
                                                                                        </TableCell>
                                                                                    );
                                                                                })}
                                                                            </TableRow>
                                                                        );
                                                                    })}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                    <TablePagination
                                                        rowsPerPageOptions={[10, 25, 100]}
                                                        component="div"
                                                        count={rows.length}
                                                        rowsPerPage={rowsPerPage}
                                                        page={page}
                                                        onPageChange={handleChangePage}
                                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                                    />
                                                </Paper>
                                            </Box>
                                      )}
                               </Container>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default PageLayout;