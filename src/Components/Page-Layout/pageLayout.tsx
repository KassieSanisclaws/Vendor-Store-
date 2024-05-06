import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../../main';
import { Container, Grid, Box, Typography, List, ListItem, ListItemText, IconButton, TextField, Divider, ListItemAvatar, Avatar, Button, Rating, Alert, Snackbar,
         Card, Skeleton, Accordion, AccordionSummary, AccordionDetails, Checkbox, AccordionSlots, Fade, Paper, Table, TableBody, TableCell, TableContainer, TableHead, 
         TableRow, TablePagination, ImageList, ImageListItem, ListSubheader, ImageListItemBar, 
 } from '@mui/material';
import { Send, Delete, ExpandMore,  } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { CarouselComponent } from '../Carousel/carousel';
import InfoIcon from '@mui/icons-material/Info';
import { ColumnHistory, Data, UsersLayoutData,  } from '../../Types/typeInterface';
import { VideoPlayer } from '../VideoPlayer/videoPlayer';
import { DisplayPicture } from '../DisplayPicture/displayPicture';
import SampleAccordion from '../Accordion/sampleAccordion';
import { BaseTable } from '../Table/baseTable';
import { BaseTableTwo } from '../Table/baseTableTwo';
import TabComponent from '../Tabs/tabComponent';
import { TestAccordion } from '../Accordion/testAccordion';
import { TestAccordionTwo } from '../Accordion/testAccordionTwo';
import { TablePage } from '../Table/tablePage';
import TabComponentTwo  from '../Tabs/tabComponentTwo';
import VerticalTabs from '../Tabs/verticalTabs';
import ColumnsHistory from "../../JsonData/dataStructures";
import AboutUsCarouselData from "../../JsonData/dataStructures";
import DataSample from "../../JsonData/dataStructures";


const CustomIconHoverStyle = styled(IconButton)(({ theme }) => ({
    '&:hover': {
        '& svg': {
            color: theme.components?.MuiIcon.styleOverrides.root['&:hover']['& .MuiSvgIcon-root'].color,
        }
      }
  }));

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

    const myComponentList = [
        {
            name: 'Component1',
            component: SampleAccordion,
            label: 'Component 1',
        },
        {
            name: 'Component2',
            component: TestAccordion,
            label: 'Component 2',
        },
        {
            name: 'Component3',
            component: TestAccordionTwo,
            label: 'Component 3',
        },
        {
            name: 'Component4',
            component: SampleAccordion,
            label: 'Component 4',
        }
        // Add more as needed
    ];

    const myComponentListTwo = [
        {
            name: 'Component1',
            component: TestAccordionTwo,
            label: 'Component 1',
            customProp: 'Custom Prop 1',
        },
        {
            name: 'Component2',
            component: SampleAccordion,
            label: 'Component 2',
            customProp: 'Custom Prop 2',
        },
        {
            name: 'Component3',
            component: TablePage,
            label: 'Component 3',
        },
        {
            name: 'Component4',
            component: SampleAccordion,
            label: 'Component 4',
            customProp: 'Custom Prop 4',
        }
        // Add more as needed
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
    titleBox4,
    titleBox6,
    titleBox7,
    titleBox8,
    titleBox9,
    titleBox10,
    videoUrl,
    userImageUrl,
    userImgSize,
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
    includeAboutUsPicture1 = false,
    includeAboutUsPicture2 = false,
    includeAboutUsCarousel = false,
    includeAboutUsSearchTable = false,
    includeAboutUsTopSellers = false,
    includeAboutUsMediaVideo = false,
    includeAdminTableActions = false,
    includeAdminVendorTables = false,
    aboutUsCarouselImages,
    includeAdminTables = false,
    includeAdminTabPanel = false,
    handleMessageSend,
    handleNewMessage,
    handleMessageDelete,
    handleSnackbarClosed,
    handleExpansion,
}: UsersLayoutData){
    const { mode } = useThemeMode();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isLoading, setIsLoading] = React.useState(false);
    const columnsHistory = ColumnsHistory.ColumnsHistory;
    const itemData = AboutUsCarouselData.AboutUsCarouselData;
    const itemDataTwo = AboutUsCarouselData.AboutUsCarouselData;
    const dataSample = DataSample.DataSample;

    const tabs = [
    { label: <Typography variant="h6">Tab1</Typography>, component: <SampleAccordion /> },
    { label: <Typography variant="h6">Tab2</Typography>, component: <BaseTable columns={columnsHistory as ColumnHistory[]}  rows={rowsHistory} isLoading={isLoading} /> },
    { label: <Typography variant="h6">Tab3</Typography>, component: <TestAccordion /> },
    ]; 

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


    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return (
        <Grid container spacing={2} mb={2} sx={{padding: 1 }}>
            <Grid item xs={8}
                 sx={{
                     height: "100%",
                     weight: "100%", 
                 }}>
                <Box sx={{ }}>
                    <Box
                        sx={{
                            bgcolor: mode === "dark" ? "primary.dark" : "primary.light",
                            height: "55.5vh",
                            overflow: "hidden",
                            borderRadius: "10px",
                            overflowY: "auto",
                            "&::-webkit-scrollbar": {
                                width: "9px",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#CF9FF", // Color of the scroll thumb
                                borderRadius: "10px", // Roundness of the scroll thumb
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                background: "#AA98A9", // Color on hover
                            },
                        }}
                    >
                        <Grid container sx={{ display: "flex", justifyContent: "space-evenly", padding: "20px" }}>         
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
                                  {includeUserPicture && (
                                        <Box sx={{ bgcolor: "grey", width: "100%", height: '28vh', overflow: "hidden" }}>
                                            <img src="user-profile-picture-url" alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            picture here
                                        </Box>
                                    )}
                                    {includeButtonsActions && (
                                      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                                        {buttonsData?.map((button, indx) => (
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
                                    {includeAboutUsPicture1 && (
                                        <Box sx={{ overflow: "hidden", height: "100%", width: "100%" }}>
                                               <DisplayPicture 
                                                       userImageUrl={userImageUrl ?? " "} 
                                                       size={userImgSize as unknown as number} 
                                                     />
                                        </Box>
                                      )}
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
                                        columns={columns ? columns : []}
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
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateCalendar
                                                defaultValue={dayjs()} //Provide a default value for the calendar
                                                views={['year', 'month', 'day']} //Include the views you want to display
                                                sx={{ height: "100%", width: "100%" }}
                                            />
                                        </LocalizationProvider>
                                    </Box>
                                  )}
                            {includeAboutUsCarousel && (
                                <Box sx={{ overflow: "hidden", borderRadius: "10px" }}>
                                    <CarouselComponent images={aboutUsCarouselImages?.map(image => image.img) ?? []}/>
                                </Box>
                            )}
                            {includeAdminTableActions && (
                                <Box sx={{ overflow: "hidden", borderRadius: "10px" }}>
                                       <TabComponent 
                                             tabs={myComponentListTwo}
                                             activatedTab={myComponentListTwo[0].name}
                                            onTabChange={(componentName: string) => console.log(componentName)}
                                        />
                                            {/* <BaseTable 
                                               columns={columnsHistory as ColumnHistory[]}
                                               isLoading={loading}
                                               rows={rowsHistory}
                                            /> */}
                                       
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
                            "&::-webkit-scrollbar": {
                                width: "9px",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#CF9FF", // Color of the scroll thumb
                                borderRadius: "10px", // Roundness of the scroll thumb
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                background: "#AA98A9", // Color on hover
                            },
                        }}
                    >
                        <Grid container padding={2} sx={{ display: "flex", justifyContent: "space-evenly" }}>             
                            <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={12} sm={4}>
                               {includeTitleBox2 && (
                                 <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                    <Typography variant='h5'>{titleBox2}</Typography>
                                </Box>
                               )}
                               {includeNewsFeed && (
                                   <Box sx={{ height: "100%", width: "100%", mb: 2 }}>
                                     <Container sx={{ width: "100%", height: "100%" }}>
                                        {dataSample.map((_, idx: number) => (
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
                                    </Container>
                                    </Box>
                               )}
                               {includePieGraph && (
                                 <PieChart
                                    series={[
                                        {
                                            arcLabel: (item) => `${item.label} (${item.value})`,
                                            arcLabelMinAngle: 45,
                                            data: data || [],
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
                              {includeAboutUsTopSellers && (
                                       <Box sx={{ overflow: "hidden", width: "100%", height: "100%", padding: "20px" }}>
                                        <ImageList>
                                            <ImageListItem key="Subheader" cols={2}>
                                                <ListSubheader component="div">December</ListSubheader>
                                            </ImageListItem>
                                            {itemDataTwo.map((item) => (
                                                <ImageListItem key={item.img}>
                                                    <img
                                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                                        alt={item.title}
                                                        loading="lazy"
                                                    />
                                                    <ImageListItemBar
                                                        title={item.title}
                                                        subtitle={item.author}
                                                        actionIcon={
                                                            <IconButton
                                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                                aria-label={`info about ${item.title}`}
                                                            >
                                                                <InfoIcon />
                                                            </IconButton>
                                                        }
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                </Box>
                              )}
                              {includeAdminTabPanel && (
                                <Box sx={{ overflow: "hidden", width: "100%", height: "100%", padding: "20px" }}>
                                    <TabComponentTwo  tabs={tabs} />
                                </Box>
                              )}          
                            </Grid>
                            <Grid item sx={{ height: "100%", width: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }} xs={12} sm={7.5}>
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
                                    <Box sx={{ overflow: "auto", padding: "10px", ml: 1 }}>    
                                            {Array.from({ length: Math.ceil(dataSample.length / 3) }).map((_, rowIndx) => {
                                                return (
                                                    <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
                                                        {[0, 1, 2].map((colIndx) => {
                                                            const dataIndx = colIndx * 3 + rowIndx;
                                                            const item = data?.[dataIndx];
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
                                                    </Box>
                                                );
                                            })}
                                    </Box>
                               )}
                               {includeAboutUsSearchTable && (
                                <Box sx={{ width: "100%", height: "100%", padding: "10px" }}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Dessert (100g serving)</TableCell>
                                                    <TableCell align="right">Calories</TableCell>
                                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rowsHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.population}</TableCell>
                                                        <TableCell align="right">{row.size}</TableCell>
                                                        <TableCell align="right">{row.density}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={rowsHistory.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Box>
                               )} 
                               {includeAdminTables && (
                                <Box sx={{ height: "100%", width: "100%" }}>
                                    <BaseTableTwo
                                        columns={columnsHistory as ColumnHistory[]} 
                                        isLoading={loading}
                                        rows={rowsHistory}
                                    />
                                </Box>
                               )}  
                            </Grid>
                        </Grid>
                    </Box>
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
                        "&::-webkit-scrollbar": {
                            width: "9px",
                        },
                        "&::-webkit-scrollbar-track": {
                            background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "#CF9FF", // Color of the scroll thumb
                            borderRadius: "10px", // Roundness of the scroll thumb
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            background: "#AA98A9", // Color on hover
                        },
                    }}
                >
                    <Grid container rowSpacing={1}>
                        <Grid item sx={{ height: "100%", width: "100%" }} padding={1}>
                            <Grid container spacing={1} mb={2}>
                                <Grid item xs={8}>          
                                    <Box
                                        sx={{
                                            bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                                            height: "50vh",
                                            overflow: "hidden",
                                            borderRadius: "10px",
                                            overflowY: "auto",
                                            "&::-webkit-scrollbar": {
                                                width: "9px",
                                            },
                                            "&::-webkit-scrollbar-track": {
                                                background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                                            },
                                            "&::-webkit-scrollbar-thumb": {
                                                background: "#CF9FF", // Color of the scroll thumb
                                                borderRadius: "10px", // Roundness of the scroll thumb
                                            },
                                            "&::-webkit-scrollbar-thumb:hover": {
                                                background: "#AA98A9", // Color on hover
                                            },
                                            mt: 1,
                                        }}
                                    >
                                   {includeTitleBox6 && (
                                       <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                          <Typography variant='h5'>{titleBox6}</Typography>
                                       </Box>
                                     )} 
                                     {includeMessages && (
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
                                     )}
                                     {includeAboutUsPicture2 && (
                                        <Box sx={{ height: "100%", width: "100%", padding: "10px" }}>
                                                <ImageList
                                                    sx={{ borderRadius: "10px" }}
                                                    variant="quilted"
                                                    cols={4}
                                                    rowHeight={121}
                                                >
                                                    {itemData.map((item) => (
                                                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                                            <img
                                                                {...srcset(item.img, 121, item.rows, item.cols)}
                                                                alt={item.title}
                                                                loading="lazy"
                                                            />
                                                        </ImageListItem>
                                                    ))}
                                                </ImageList>
                                        </Box>
                                            )}   
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
                                            "&::-webkit-scrollbar": {
                                                width: "9px",
                                            },
                                            "&::-webkit-scrollbar-track": {
                                                background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                                            },
                                            "&::-webkit-scrollbar-thumb": {
                                                background: "#CF9FF", // Color of the scroll thumb
                                                borderRadius: "10px", // Roundness of the scroll thumb
                                            },
                                            "&::-webkit-scrollbar-thumb:hover": {
                                                background: "#AA98A9", // Color on hover
                                            },
                                            mt: 1
                                        }}
                                    >
                                     {includeTitleBox7 && (
                                        <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                          <Typography variant='h5'>{titleBox7}</Typography>
                                        </Box>
                                      )}   
                                        {includeMessages && (
                                            <Grid container xs={8} md={12} padding={1}>
                                            <IconButton 
                                                onClick={handleMessageSend} 
                                                aria-label="send"
                                                sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", padding: "10px", mt: 1, position: "relative", top: "75px", left: "95px"  }}
                                            >
                                                <Send />
                                            </IconButton>
                                            <Box sx={{ position: "relative", top: "-50px" }}>
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
                                        {includeAboutUsMediaVideo && (
                                                <VideoPlayer videoUrl={videoUrl ?? ''} />
                                        )}
                                  </Box>
                                {includeAdditionalActions && (
                                        <Box 
                                           sx={{
                                              bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
                                              height: "26vh",
                                              overflow: "hidden",
                                              borderRadius: "10px",
                                              overflowY: "auto",
                                                "&::-webkit-scrollbar": {
                                                    width: "9px",
                                                },
                                                "&::-webkit-scrollbar-track": {
                                                    background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                                                },
                                                "&::-webkit-scrollbar-thumb": {
                                                    background: "#CF9FF", // Color of the scroll thumb
                                                    borderRadius: "10px", // Roundness of the scroll thumb
                                                },
                                                "&::-webkit-scrollbar-thumb:hover": {
                                                    background: "#AA98A9", // Color on hover
                                                },
                                              mt: 1
                                           }}
                                         >
                                      {includeTitleBox8 && (
                                        <Box sx={{ display: 'flex', justifyContent: "center", mt: 1 }}>
                                            <Typography variant='h5'>{titleBox8}</Typography>
                                        </Box>
                                      )}
                                     {includeAdminActions && (
                                        <Box sx={{ height: "100%", width: "100%", padding: "10px", mb: 2 }}>
                                            <VerticalTabs />
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
                                    "&::-webkit-scrollbar": {
                                        width: "9px",
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "#CF9FF", // Color of the scroll thumb
                                        borderRadius: "10px", // Roundness of the scroll thumb
                                    },
                                    "&::-webkit-scrollbar-thumb:hover": {
                                        background: "#AA98A9", // Color on hover
                                    },
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
                                    {reviews?.map((review, indx) => (
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
                                                <TableContainer sx={{ 
                                                                     maxHeight: 440, 
                                                                     "&::-webkit-scrollbar": {
                                                                        width: "9px",
                                                                     },
                                                                     "&::-webkit-scrollbar-track": {
                                                                        background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                                                                     },
                                                                     "&::-webkit-scrollbar-thumb": {
                                                                        background: "#CF9FF", // Color of the scroll thumb
                                                                        borderRadius: "10px", // Roundness of the scroll thumb
                                                                     },
                                                                     "&::-webkit-scrollbar-thumb:hover": {
                                                                        background: "#AA98A9", // Color on hover
                                                                     },
                                                                     }}
                                                                     >
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
                                                        count={rows?.length ?? 0}
                                                        rowsPerPage={rowsPerPage}
                                                        page={page}
                                                        onPageChange={handleChangePage}
                                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                                    />
                                                </Paper>
                                            </Box>
                                      )}
                                    {includeAdminVendorTables && (
                                        <Box sx={{ height: "100%", width: "100%"  }}> 
                                                 <TabComponent
                                                             tabs={myComponentList} 
                                                             activatedTab={''} 
                                                             onTabChange={function (): void {
                                                                throw new Error('Function not implemented.');
                                                        } }                                             />
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