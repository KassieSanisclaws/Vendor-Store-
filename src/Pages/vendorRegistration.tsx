import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeMode } from '../main';
import { Form, VendorFormData } from '../Components/Forms/form';
import { AlertColor, CircularProgress, Stack, Box  } from '@mui/material/';
import { LockOutlined } from '@mui/icons-material';
import { useLoginMutation } from '../../Redux-Store/Features/Slices/userSlice';
import { setCredentials } from '../../Redux-Store/Features/Slices/authSlice';


export function VendorRegistration () {
    const { mode } = useThemeMode();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [login, { isLoading }] = useLoginMutation();
    const { userInfo } = useSelector((state: any) => state.auth);
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
            // const resp = ({
            //     vendorName: vendorFormData.vendorName,
            //     vendorBusinessName: vendorFormData.vendorBusinessName,
            //     vendorBusinessEmail: vendorFormData.vendorBusinessEmail,
            //     vendorBusinessAddress: vendorFormData.vendorBusinessAddress,
            //     vendorBusinessPhoneNumber: vendorFormData.vendorBusinessPhoneNumber,
            //     vendorBusinessLicenseNumber: vendorFormData.vendorBusinessLicenseNumber
            // }).unwrap();
            setLoading(true);
            handleSnackbarOpen("success", "Vendor Registration Information Submitted Successfully");
            console.log("Submitting form with data:");
        } catch (error) {
            const errorMessage = (error as { data: { message: string } })?.data?.message || 'An error occurred';
            console.log("An error occurred while submitting the form:", errorMessage);
        } finally {
            setLoading(false);
        }
        console.log("Submitting form with data:", vendorFormData);
    };  

    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    },[userInfo, navigate]);

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
       </>
    )
}