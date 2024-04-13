import { useState } from 'react';
import { useThemeMode } from '../main'; 
import { Form, ContactUsFormData } from '../Components/Forms/form';
import { AlertColor } from '@mui/material/';
import { CatchingPokemon } from '@mui/icons-material';

export const ContactUs = () => {
    const { mode } = useThemeMode();
    const [loading, setLoading] = useState(false);
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
            console.log("Submitting form with data:");
        } catch (error) {
            console.log("An error occurred while submitting the form:", error);
        }

        console.log("Submitting contactUs form with data:");
    };

    return (
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
    )
}