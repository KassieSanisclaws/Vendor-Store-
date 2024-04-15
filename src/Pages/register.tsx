import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeMode } from '../main';
import { Form, RegisterFormData } from '../Components/Forms/form';
import { AlertColor, CircularProgress, Stack, Box } from '@mui/material/';
import { AccountCircle } from '@mui/icons-material';
import { useRegisterMutation } from '../../Redux-Store/Features/Slices/userSlice';
import { setCredentials } from '../../Redux-Store/Features/Slices/authSlice';


export function Register() {
    const { mode } = useThemeMode();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector((state: any) => state.auth);
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        severity: "" as AlertColor,
        message: ""
    });

    const handleSnackBarOpen = (severity: AlertColor, message?: string) => {
        //Handle when snackbar opens here.
        let snackbarMessage = message || " ";

        if (severity === "error" && message && !message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, open: true, severity: severity, message: snackbarMessage });
            console.log("Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
        }

        if (severity === "success" && message && !message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, open: true, severity: severity, message: snackbarMessage });
            console.log("Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
        }
        console.log(open, "Snackbar opened with severity:", severity + " " + "and message:", message + " " + severity);
    }

    const handleSnackBarClose = () => {
        //Handle when snackbar closes here.
        setSnackbarState({ ...snackbarState, open: false });
        console.log("Snackbar closed");
    }

    const registerHandler = (formData: RegisterFormData) => {
        // Handle login logic here
        setLoading(true);

        if (
            !formData.firstname ||
            !formData.lastname ||
            !formData.phoneNumber ||
            !formData.email ||
            !formData.password ||
            !formData.confirmEmail ||
            !formData.confirmPassword) {
            setLoading(false);
            handleSnackBarOpen("error", "Please fill in all fields");
            console.log("Please fill in all fields");
            return;
        }

        try {
            const resp = register({
                firstName: formData.firstname,
                lastName: formData.lastname,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                password: formData.password,
                confirmEmail: formData.confirmEmail,
                confirmPassword: formData.confirmPassword
            }).unwrap();
            dispatch(setCredentials({ ...resp }));
            setLoading(true);
            // navigate("/login");
            handleSnackBarOpen("success", "Registration successful");
        } catch (err) {
            const errorMessage = (err as { data: { message: string } })?.data?.message || 'An error occurred';

            console.log(errorMessage);
        } finally {
            setLoading(false);
        }
        console.log("Register credentials:" + " " + formData.firstname + " " + formData.lastname + " " + formData.email + " " + formData.phoneNumber + " " + "and password:", formData.password);
    }

//UseEffect if userInfor redirect to page login for user to login/ signin.
// useEffect(() => {
//     if (userInfo) {
//         navigate("/login");
//     }
// }, [userInfo, navigate]);


   useEffect(() => {
     const timer = setTimeout(() => {
            setLoading(false);
     }, 2000);
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
            <Stack sx={{ color: "grey" }} spacing={2} direction="row" justifyContent="center" alignItems="center">
                <CircularProgress color="secondary" />
            </Stack>
         )}
      </Box>
    <Form 
        mode={mode}
        loading={loading}
        formType="register"
        title="Register"
        buttonText="Register"
        includeImageField={true}
        registerFormSubmit={registerHandler}
        icon={<AccountCircle sx={{ fontSize: 40, marginTop: "1rem" }} />}
        includeSnackbarPopup={true}
        includeRegisterFirstNameField={true}
        includeRegisterLastNameField={true}
        includeRegisterPhoneNumberField={true}
        includeRegisterEmailField={true}
        includeRegisterPasswordField={true}
        includeRegisterConfirmEmailField={true}
        includeRegisterConfirmPasswordField={true}
        snackbarState={snackbarState}
        handleSnackbarClosed={handleSnackBarClose}
    />
    </>   
  )
}