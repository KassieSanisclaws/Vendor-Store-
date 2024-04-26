import { useEffect, useState } from 'react';
import { useThemeMode } from '../../main';
import { Box, Stack, CircularProgress, AlertColor } from '@mui/material';
import PageLayout from '../../Components/Page-Layout/pageLayout';
import { ButtonData, ReviewData } from '../../Types/typeInterface';
import Rows from '../../JsonData/dataStructures';
import PieData from "../../JsonData/dataStructures";
import Columns from "../../JsonData/dataStructures";

function vendorAccountPage() {
  const { mode } = useThemeMode();
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [snackbarState, setSnackbarState] = useState({
    active: false,
    severity: '' as AlertColor,
    message: '',
  });
  const rows = Rows.Rows.map((row) => { return { id: row.id, lastName: row.lastName, firstName: row.firstName, age: row.age } });
  const pieData = PieData.PieData;
  const columns = Columns.Columns;

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

  const handleEditChanges = (e: any) => {
    e.preventDefault();
    console.log('Edit Picture To Be Implemented');
  }

  const handleSnackBarOpen = (severity: AlertColor, message: string) => {
    let snackBarMessage = message || "";

    if (severity === 'error') {
       snackBarMessage =  message;
       setSnackbarState({ ...snackbarState, active: true, severity: severity, message: snackBarMessage});
    } else if (severity === 'success') {
      snackBarMessage =  message;
      setSnackbarState({ ...snackbarState, active: true, severity: severity, message: snackBarMessage});
    }
    console.log('Handler triggered: ' + snackBarMessage + ' ' + severity);
  };

  const buttonsData: ButtonData[] = [
    { name: "Edit Picture", onClick: handleEditChanges },
    { name: "Edit Profile", to: '/editProfile', onClick: handleEditChanges },
    { name: "Edit Store Items", onClick: handleEditChanges },
    { name: "Edit Store Greetings", onClick: handleEditChanges },
    { name: "Change Password", onClick: handleEditChanges },
  ];

  const reviews: ReviewData[] = [
    { name: 'Remy Sharp', avatarSrc: '/static/images/avatar/1.jpg', title: 'Brunch this weekend?', reviewer: 'Ali Connors', comment: "I'll be in your neighborhood doing errands this…", rating: 4 },
    { name: 'Travis Howard', avatarSrc: '/static/images/avatar/2.jpg', title: 'Summer BBQ', reviewer: 'to Scott, Alex, Jennifer', comment: "Wish I could come, but I'm out of town this…", rating: 3 },
    { name: 'Cindy Baker', avatarSrc: '/static/images/avatar/3.jpg', title: 'Oui Oui', reviewer: 'Sandra Adams', comment: 'Do you have Paris recommendations? Have you ever…', rating: 5 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
    setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleMessageDelete(message: string): void {
    setMessages(messages.filter((msg) => msg !== message));
    handleSnackBarOpen('error', 'Message Deleted');
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
         userType='vendor'
         data={pieData}
         columns={columns}
         rows={rows}
         buttonsData={buttonsData}
         reviews={reviews}
         titleBox='Vendor Store'
         titleBox1='Vendor Account'
         titleBox2='Vendor Store Items'
         titleBox4='Vendor Store Reviews'
         titleBox6='Messages'
         titleBox7='Message'
         titleBox8='Vendor Store Employees'
         titleBox9='Vendor Storesss'
         includeTitleBox={true}
         includeTitleBox1={true}
         includeTitleBox2={true}
         includeTitleBox4={true}
         includeTitleBox6={true}
         includeTitleBox8={true}
         includeTitleBox7={true}
         includeTitleBox9={true}
         includeBarGraph={true}
         includePieGraph={true}
         includeStoreReviews={true}
         includeVendorEmployeesTable={true}
         includeMessages={true}
         includeButtonsActions={true}
         handleMessageSend={handleSendMessage}
         handleNewMessage={(message: string) => handleNewMessage({ Active: true, message })}
         handleMessageDelete={(message: string) => handleMessageDelete(message)}
         handleSnackbarClosed={handleSnackbarClose}
         includeSnackbarPopup={true}
         includeUserPicture={true}
       />
    </>
  )
}

export default vendorAccountPage