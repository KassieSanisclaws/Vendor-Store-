import { useEffect, useState } from "react";
import { useThemeMode } from "../../main";
import  { Box, Stack, CircularProgress, AlertColor } from '@mui/material';
import PageLayout from "../../Components/Page-Layout/pageLayout";


export function AdminAccountPage(){
    const { mode } = useThemeMode();
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [snackbarState, setSnackbarState] = useState({
        active: false,
        severity: '' as AlertColor,
        message: '',
    });

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarState({ ...snackbarState, active: false });
    };

    const handleNewMessage = ({ message }: { Active: boolean; message: string }) => {
        setNewMessage(message);
    };

    const handleSnackbarOpen = (severity: AlertColor, message?: string) => {
        let snackbarMessage = message || " ";

        if (severity === "error" && message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, active: true, severity: severity, message: snackbarMessage });
            console.log("Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
        }

        if (severity === "success" && message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, active: true, severity: severity, message: snackbarMessage });
            console.log("Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
        }
        console.log("Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    },[]);

    function handleMessageDelete(message: string): void {
        setMessages(messages.filter((msg) => msg !== message));
        handleSnackbarOpen("error", "Message deleted");
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
          <PageLayout 
              mode={mode}
              loading={loading}
              messages={messages}
              snackbarState={snackbarState}
              newMessageState={{ Active: true, message: newMessage}}
              userType='admin'
              includeMessages={true}
              includeSnackbarPopup={true}
              includeAboutUsPicture1={true}
              includeAdminActions={true}
              includeAdditionalActions={true}
              includeAdminTableActions={true}
              includeAdminTables={true}
              includeAdminTabPanel={true}
              includeAdminVendorTables={true}
              handleSnackbarClosed={handleSnackbarClose}
              handleMessageSend={handleSendMessage}
              handleMessageDelete={(message: string) => handleMessageDelete(message)}
              handleNewMessage={(message: string) => handleNewMessage({ Active: true, message})}
              userImageUrl="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              userImgSize={400}
              includeTitleBox={true}
              includeTitleBox6={true}
              includeTitleBox7={true}
              titleBox='Admin Account:'
              titleBox6="Messages InBox:"
              titleBox7="New Message:"
          />
        </>
    )
}