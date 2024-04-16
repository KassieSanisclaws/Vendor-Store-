import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeMode } from '../../main';
import { Container, CssBaseline, Grid, Box, Typography, Skeleton, Stack, CircularProgress, Card, ListItem, Divider, ListItemButton,
         ListItemIcon, ListItemText, List, SwipeableDrawer, Button, Accordion, AccordionSummary, AccordionDetails, AccordionSlots,
         Fade } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

type Anchor = 'left'

export function UserDashboard() {
    const { mode } = useThemeMode();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { userInfo } = useSelector((state: any) => state.auth);
    const [swipableState, setSwipableState] = useState({ left: false });
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((
              event as React.KeyboardEvent).key === 'Tab' || 
             (event as React.KeyboardEvent).key === 'Shift')
         ) {
            return;
        }
        setSwipableState({ ...swipableState, [anchor]: open });
    };

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
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
                            <Typography variant="body1">View Message</Typography>
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
            <Grid sx={{ bgcolor: mode === "dark" ? "primary.dark" : "#FFFFFF", height: "100%", width: "100%", borderRadius: "10px", overflowY: "auto", scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
                <Grid item xs={3}>
                    <Grid container spacing={1} sx={{ height: "30%", overflow: "hidden" }}>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column" }}>
                                <Box sx={{ bgcolor: "blue", flexGrow: 1, overflow: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ height: "100%", bgcolor: "turquoise", width: "100%" }}>

                                    </Box>
                                    <Box sx={{ height: "100%", bgcolor: "bisque", width: "100%" }}>
                                        <Typography variant='body1'>News Feeds</Typography>
                                            <Accordion
                                                expanded={expanded}
                                                onChange={handleExpansion}
                                                slots={{ transition: Fade as AccordionSlots['transition'] }}
                                                slotProps={{ transition: { timeout: 400 } }}
                                                sx={{
                                                    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                                    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                                                }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMore />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    <Typography>Custom transition using Fade</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMore />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                >
                                                    <Typography>Default transition using Collapse</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column" }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar 
                                        defaultValue={dayjs()} //Provide a default value for the calendar
                                        views={['year', 'month', 'day']} //Include the views you want to display
                                        sx={{ height: "100%", width: "100%" }}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: "45vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                                <Typography>Based on Your Interest</Typography>
                                <Grid container wrap="nowrap">
                                    {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                                        <Card key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
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
                                    ))}
                                </Grid>
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
        </>
    );
}