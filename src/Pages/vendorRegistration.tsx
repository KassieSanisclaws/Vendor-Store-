import { useState } from 'react';
import { useThemeMode } from '../main';
import { Form, VendorFormData } from '../Components/Forms/form';
import { AlertColor } from '@mui/material/';
import { LockOutlined } from '@mui/icons-material';



export function VendorRegistration () {
    const { mode } = useThemeMode();
    const [loading, setLoading] = useState(false);
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        severity: "info" as AlertColor,
        message: "vendor form page"
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
        setSnackbarState({ ...snackbarState, open: false });
        console.log("Snackbar closed triggered by user action.");
    };

    const vendorRegisterHandler = (vendorFormData: VendorFormData) => {
        // Handle login logic here
        setLoading(true);

        if (
            !vendorFormData.vendorName ||
            !vendorFormData.vendorBusinessName ||
            !vendorFormData.vendorBusinessEmail ||
            !vendorFormData.vendorBusinessAddress ||
            !vendorFormData.vendorBusinessPhoneNumber ||
            !vendorFormData.vendorBusinessLicenseNumber
        ) {
            setLoading(false);
            handleSnackbarOpen("error", "Please fill in all fields");
            console.log("Please fill in all fields");
            return;
        }

        try {

        } catch (error) {
            console.log("An error occurred while submitting the form:", error);
        }
        console.log("Submitting form with data:", vendorFormData);
    };

    return (
       <Form 
            mode={mode}
            formType='vendor'
            includeSnackbarPopup={true}
            includeImageField={true}
            title="Vendor Registration"
            buttonText="Register"
            loading={loading}
            snackbarState={snackbarState}
            handleSnackbarClosed={handleSnackbarClose}
            vendorFormSubmit={vendorRegisterHandler}
            icon={<LockOutlined sx={{ fontSize: 40, marginTop: "1rem" }} />}
            includeVendorNameField={true}
            includeVendorBusinessNameField={true}
            includeVendorBusinessEmailField={true}
            includeVendorBusinessAddressField={true}
            includeVendorBusinessPhoneNumberField={true}
            includeVendorBusinessLicenseNumberField={true}
       />
    )
}