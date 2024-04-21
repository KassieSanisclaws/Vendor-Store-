import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeMode } from '../../main';
import { Container, CssBaseline, Grid, Box, Typography, Skeleton, Stack, CircularProgress, Card, ListItem, Divider, ListItemButton,
         ListItemIcon, ListItemText, List, SwipeableDrawer, Button, Accordion, AccordionSummary, AccordionDetails, AccordionSlots,
         Fade, Checkbox, TableContainer, TableHead, Table, TableRow, Paper, TableCell, TableBody, TablePagination } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';


interface ColumnHistory {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string; 
}

const columns: readonly ColumnHistory[] = [
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

const rows = [
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

type Anchor = 'left'

export function UserDashboard() {
    const { mode } = useThemeMode();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { userInfo } = useSelector((state: any) => state.auth);
    const [swipableState, setSwipableState] = useState({ left: false });
    const [expanded, setExpanded] = useState<Array<boolean>>([false, false, false, false]);
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((
              event as React.KeyboardEvent).key === 'Tab' || 
             (event as React.KeyboardEvent).key === 'Shift')
         ) {
            return;
        }
        setSwipableState({ ...swipableState, [anchor]: open });
    };

    const handleExpansion = (index: number) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

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

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'left' || anchor === 'top' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>  
    );
    const data = [
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

    useEffect(() => {
    if (userInfo) {
        setLoading(false);
        navigate("/")
    }
   },[userInfo, navigate]);

const handleEditPicture = (e: any) =>  {
      e.preventDefault();
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: loading ? 'rgba(0, 0, 0, 0.5)' : "", //Semi-transparent background overlay
                    zIndex: loading ? 9999 : -1, // Ensure CircularProgress is above other content when loading
                }}
            >
                {loading && (
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <CircularProgress color="primary" />
                    </Stack>
                )}
            </Box>
            <Box>
                {(['left'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                            <Typography color="secondary.dark" variant='body1'>View Message</Typography>
                        </Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={swipableState[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </Box>
        <Container maxWidth="xl" sx={{ bgcolor: mode === "dark" ? "#A2F3D1" : "#29AB87", height: "90vh", padding: "10px", borderRadius: "15px", mt: 3, mb: 6 }}>
            <CssBaseline />
            <Grid sx={{ bgcolor: mode === "dark" ? "primary.dark" : "#f9fcff", height: "100%", width: "100%", borderRadius: "10px", overflowY: "auto", scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                <Grid item xs={3}>
                    <Grid container spacing={1} sx={{ height: "30%", overflow: "hidden" }}>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column" }}>
                                    <Box sx={{ flexGrow: 1, overflow: "auto", display: "flex", alignItems: "center", justifyContent: "center", scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                                    <Box sx={{ height: "100%", width: "100%" }}>
                                         <Box sx={{ bgcolor: "grey", width: "100%", height: '28vh', overflow: "hidden" }}>
                                             <img src="user-profile-picture-url" alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            picture here
                                         </Box>
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

                                                {/* Edit Picture Button */}
                                                <Button variant="contained" onClick={handleEditPicture} sx={{ mt: 1 }}>
                                                    Change Password
                                                </Button>
                                            </Box>
                                      </Box>
                                    <Box sx={{ height: "100%", width: "100%" }}>
                                       <Box sx={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                                        <Typography variant='h4'>News Feeds</Typography>
                                        </Box>
                                        {data.map((_, idx: number) => (    
                                            <Accordion
                                                key={idx}
                                                expanded={expanded[idx]}
                                                onChange={() => handleExpansion(idx)}
                                                slots={{ transition: Fade as AccordionSlots['transition'] }}
                                                slotProps={{ transition: { timeout: 400 } }}
                                                sx={{
                                                    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                                    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                                                }}
                                                
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMore />}
                                                    aria-controls={`panel${idx + 1}-content`}
                                                    id={`panel${idx + 1}-header`}
                                                >
                                                    <Checkbox
                                                        checked={expanded[idx]}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        onChange={() => handleExpansion(idx)} // Toggle the expansion state
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
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
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
                        </Grid>
                            <Grid item xs={12} md={6} sx={{ height: "45vh", overflowY: "auto", scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                            <Box sx={{ display: "flex", flexDirection: "column", }}>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2}}>
                                <Typography variant='h4'>Based on Your Interest</Typography>
                            </Box>       
                             <Box sx={{ display: "flex", flexDirection: "column", }}> 
                            {Array.from({ length: Math.ceil(data.length / 3) }).map((_, rowIndx) => {
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
                                                                alt={item.title}
                                                                src={item.src}
                                                            />
                                                        ) : (
                                                            <Skeleton variant="rectangular" width={210} height={118} />
                                                        )}
                                                        {item ? (
                                                            <Box sx={{ pr: 2 }}>
                                                                <Typography gutterBottom variant="body2">
                                                                    {item.title}
                                                                </Typography>
                                                                <Typography display="block" variant="caption" color="text.secondary">
                                                                    {item.channel}
                                                                </Typography>
                                                                <Typography variant="caption" color="text.secondary">
                                                                    {`${item.views} • ${item.createdAt}`}
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
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column", }}>
                              <Box sx={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                                <Typography variant='h4'>History Glossory</Typography>
                               </Box> 
                                    <Paper sx={{ width: '100%', overflow: 'hidden', }}>
                                        <TableContainer sx={{ maxHeight: 440, scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        {columns.map((column) => (
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
                                                    {rows
                                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                        .map((row) => {
                                                            return (
                                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                    {columns.map((column) => {
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
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}