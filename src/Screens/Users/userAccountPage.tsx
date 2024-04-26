import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeMode } from '../../main';
import { Box, CircularProgress, Stack, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, SwipeableDrawer, AlertColor } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PageLayout from '../../Components/Page-Layout/pageLayout';
import { ButtonData } from '../../Types/typeInterface';

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