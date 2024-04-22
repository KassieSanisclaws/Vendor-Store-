import { useEffect, useState } from 'react';
import { useThemeMode } from '../../main';
import { Box, Stack, CircularProgress, AlertColor } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import PageLayout from '../../Components/Page-Layout/pageLayout';
import { ButtonData, ReviewData, PieGraphData, RowData } from '../../Types/typeInterface';

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

  const data: PieGraphData[] = [
    { value: 5, label: 'A', width: 100, height: 100 },
    { value: 10, label: 'B', width: 100, height: 100 },
    { value: 15, label: 'C', width: 100, height: 100 },
    { value: 20, label: 'D', width: 100, height: 100 },
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'First name' },
    { field: 'lastName', headerName: 'Last name' },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',

    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,

      valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const rows: RowData[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: '', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

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
         data={data}
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