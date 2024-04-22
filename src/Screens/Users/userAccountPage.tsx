import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeMode } from '../../main';
import { Box, CircularProgress, Stack, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, SwipeableDrawer, AlertColor } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PageLayout from '../../Components/Page-Layout/pageLayout';
import { ButtonData } from '../../Types/typeInterface';


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
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [swipableState, setSwipableState] = useState({ left: false });
    const [snackbarState, setSnackbarState] = useState({
        active: false,
        severity: ''  as AlertColor,
        message: '',
    });
    // const [expanded, setExpanded] = useState<Array<boolean>>([false, false, false, false]);
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((
              event as React.KeyboardEvent).key === 'Tab' || 
             (event as React.KeyboardEvent).key === 'Shift')
         ) {
            return;
        }
        setSwipableState({ ...swipableState, [anchor]: open });
    };

    const handleSnackBarOpen = (severity: AlertColor, message: string) => {
        let snackBarMessage = message || "";

        if (severity === 'error') {
            snackBarMessage = message;
            setSnackbarState({ ...snackbarState, active: true, severity: severity, message: snackBarMessage });
        } else if (severity === 'success') {
            snackBarMessage = message;
            setSnackbarState({ ...snackbarState, active: true, severity: severity, message: snackBarMessage });
        }
        console.log('Handler triggered: ' + snackBarMessage + ' ' + severity);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarState({ ...snackbarState, active: false });
    };

    // // Update handleNewMessage to update newMessage and newMessageState
    const handleNewMessage = ({ message }: { Active: boolean; message: string }) => {
        setNewMessage(message);
        // Update newMessageState with the new message content
        // Also, make sure to include the Active state
        // Determine Active state based on whether the message is not an empty string
    };

    function handleMessageDelete(message: string): void {
        setMessages(messages.filter((msg) => msg !== message));
        handleSnackBarOpen('error', 'Message Deleted');
    }

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

    const handleEditChanges = (e: any) => {
        e.preventDefault();
        console.log('Edit Picture To Be Implemented');
    }

    const buttonsData: ButtonData[] = [
        { name: "Edit Picture", onClick: handleEditChanges },
        { name: "Edit Profile", to: '/editProfile', onClick: handleEditChanges },
        { name: "Edit Store Items", onClick: handleEditChanges },
        { name: "Edit Store Greetings", onClick: handleEditChanges },
        { name: "Change Password", onClick: handleEditChanges },
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
           <PageLayout 
                mode={mode}
                userType='consumer'
                loading={loading}
                messages={messages}
                buttonsData={buttonsData}
                snackbarState={snackbarState}
                newMessageState={{ Active: true, message: newMessage }}
                titleBox='User Account:'
                titleBox1='Your Calendar:'
                titleBox2='News Feed:'
                titleBox4='Based On Your Interests:'
                titleBox6='Messages InBox:'
                titleBox7='Send Message:'
                titleBox8='UserAccount:'
                titleBox9='Purchases:'
                includeTitleBox={true}
                includeTitleBox1={true}
                includeTitleBox2={true}
                includeTitleBox4={true}
                includeTitleBox6={true}
                includeTitleBox7={true}
                includeTitleBox8={true}
                includeTitleBox9={true}
                includeMessages={true}
                includeUserPicture={true}
                includeButtonsActions={true}
                includeUserCalendar={true}
                includeUserPurchaseHistory={true}
                includeNewsFeed={true}
                includeBasedOnUserInterest={true}
                handleMessageSend={handleSendMessage}
                handleNewMessage={(message: string) => handleNewMessage({ Active: true, message })}
                handleMessageDelete={(message: string) => handleMessageDelete(message)}
                handleSnackbarClosed={handleSnackbarClose}
                includeSnackbarPopup={true}
           />
        </>
    );
}