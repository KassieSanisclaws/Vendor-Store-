import { useEffect, useState } from 'react';
import { useThemeMode } from '../main'; 
import { Form, ContactUsFormData } from '../Components/Forms/form';
import { AlertColor, CircularProgress, Stack, Box } from '@mui/material/';
import { CatchingPokemon } from '@mui/icons-material';

export const ContactUs = () => {
    const { mode } = useThemeMode();
    const [loading, setLoading] = useState(true);
    const [snackbarState, setSnackbarState] = useState({ 
        open: false, 
        message: "", 
        severity: "info" as AlertColor, 
    });

    const handleSnackbarOpen = (severity: AlertColor, message?: string) => {
        // Handle when snackbar opens here.
        let snackbarMessage = message || " ";

        if (severity === "error" && message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, open: true, severity: severity, message: snackbarMessage });
            console.log(open, "Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
        }

        if (severity === "success" && message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, open: true, severity: severity, message: snackbarMessage });
            console.log(open, "Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
        }
        console.log(open, "Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
    }

    const handleSnackbarClose = () => {
        // Handle when snackbar closes here.
        setSnackbarState({ ...snackbarState, open: false });
        console.log("Snackbar closed triggered by user action.");
    };

    const submitHandler = (formData: ContactUsFormData) => {
        // Handle form submission logic here
        setLoading(true);

        if (!formData.contactName ||
            !formData.email ||
            !formData.phoneNumber ||
            !formData.contactMessage
        ) {
            setLoading(false);
            handleSnackbarOpen("error", "Please fill in all fields");
            console.log("Please fill in all fields");
            return;
        }

        try {
            // Handle form submission logic here
            setLoading(true);
            console.log("Submitting form with data:");
        } catch (error) {
            console.log("An error occurred while submitting the form:", error);
        }

        console.log("Submitting contactUs form with data:");
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
      <>
      <Box
          sx={{
              top: 0,
              left: 0,
              position: 'fixed',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
       <Form 
         mode={mode}
         loading={loading}
         snackbarState={snackbarState}
         includeSnackbarPopup={true}
         formType='contactUs'
         title='Contact Us'
         buttonText='Send Message'
         includeImageField={true}
         contactUsFormSubmit={submitHandler}
         handleSnackbarClosed={handleSnackbarClose}
         icon={<CatchingPokemon sx={{ fontSize: 40, marginTop: "1rem" }}/>}
         includeContactUsNameField={true}
         includeContactUsEmailField={true}
         includeContactUsPhoneNumberField={true}
         includeContactUsMessageField={true}   
       />
     </>
    )
}