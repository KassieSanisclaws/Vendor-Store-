import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeMode } from '../main';
import { Form, LoginFormData } from '../Components/Forms/form';
import { AlertColor } from '@mui/material/';
import { LockOutlined } from '@mui/icons-material';
import { useLoginMutation } from '../../Redux-Store/Features/Slices/userSlice';
import { setCredentials } from '../../Redux-Store/Features/Slices/authSlice';


export function Login(){
    const { mode } = useThemeMode();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [login, { isLoading }] = useLoginMutation();
    const { userInfo } = useSelector((state: any) => state.auth);
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        severity: "" as AlertColor,
        message: ""
    });

    // Define handleSnackBarOpen function
    const handleSnackBarOpen = (severity: AlertColor, message?: string) => {
        // Open snackbar logic here
        let snackbarMessage = message || " ";

        if (severity === "error" && message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, open: true, severity: severity, message: snackbarMessage });
            console.log(open, "Snackbar opened with severity:", severity, "and message:", message);
        }

        if (severity === "success" && message) {
            snackbarMessage = message;
            setSnackbarState({ ...snackbarState, open: true, severity: severity, message: snackbarMessage });
            console.log(open, "Snackbar opened with severity:", severity, "and message:", message);
        }
        console.log("handler triggered" + " " + snackbarMessage + " " + severity);
    }

    const handleSnackBarClose = () => {
        setSnackbarState({ ...snackbarState, open: false });
        console.log("Snackbar closed triggered by user action.");
    };

    const loginHandler = (loginData: LoginFormData) => {
        setLoading(true);

        if (!loginData.email || !loginData.password) {
            setLoading(false);
            handleSnackBarOpen("error", "Please fill in all fields");
            console.log("Please fill in all fields");
            return;
        }
        try {
            const resp = login({
                email: loginData.email,
                password: loginData.password
            }).unwrap();
            dispatch(setCredentials({ ...resp }));
            handleSnackBarOpen("success", "Login successful");
            // navigate("/");
        } catch (err) {
            const errorMessage = (err as { data: { message: string } })?.data?.message || 'An error occurred';
            console.log(errorMessage);
        } finally {
            setLoading(false);
        }
        console.log("Login Handler triggered" + loginData.email + " " + loginData.password);
    };

    //UseEffect if userInfor redirect to page for user dashboard.
    // useEffect(() => {
    //     if (userInfo) {
    //         navigate("/");
    //     }
    // }, [navigate, userInfo,]);

    return (
        <Form 
            mode={mode}
            loading={loading}
            snackbarState={snackbarState}
             formType="login"
            handleSnackbarClosed={handleSnackBarClose}
            loginFormSubmit={loginHandler}
            icon={<LockOutlined sx={{ fontSize: 40, marginTop: "1rem" }} />}
            title="Login"
            buttonText="Login"
            includeEmailField={true}
            includePasswordField={true}
            includeRegisterLinkField={true}
            includeImageField={true}
            includeSnackbarPopup={true}
        />

    )
}