import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, Container, Box, TextField, Typography, Button, Snackbar, Alert, AlertColor, Grid } from '@mui/material';
import MainImg from "../../assets/Pictures/Untitled2.png";

export interface LoginFormData {
    email: string;
    password: string;
}

export interface RegisterFormData {
    firstname: string;
    lastname: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    phoneNumber: number | null;
}

export interface ContactUsFormData {
    contactName: string;
    email: string;
    contactMessage: string;
    phoneNumber: number | null;
}

export interface VendorFormData {
    vendorName: string;
    vendorBusinessName: string;
    vendorBusinessEmail: string;
    vendorBusinessPhoneNumber: number | null;
    vendorBusinessAddress: string;
    vendorBusinessLicenseNumber: number;
}

interface FormProps {
    mode: string;
    title: string;
    icon: React.ReactNode;
    buttonText: string;
    loading?: boolean;
    //Function props for form submission
    loginFormSubmit?: (loginData: LoginFormData) => void;
    registerFormSubmit?: (registerData: RegisterFormData) => void;
    contactUsFormSubmit?: (contactUsData: ContactUsFormData) => void;
    vendorFormSubmit?: (vendorData: VendorFormData) => void;
    //Function props for snackbar popup
    handleSnackbarClosed?: () => void;
    //Flags to determine which fields to include in the form
    formType: "login" | "register" | "contactUs" | "vendor";
    includeRegisterLinkField?: boolean;
    includeImageField?: boolean;
    containerWidth?: string;
    includeSnackbarPopup?: boolean;
    snackbarState?: { open: boolean, message: string, severity: AlertColor };
    //Login fields
    includeEmailField?: boolean;
    includePasswordField?: boolean;
    //Register fields
    includeRegisterFirstNameField?: boolean;
    includeRegisterLastNameField?: boolean;
    includeRegisterPhoneNumberField?: boolean;
    includeRegisterEmailField?: boolean;
    includeRegisterConfirmEmailField?: boolean;
    includeRegisterPasswordField?: boolean;
    includeRegisterConfirmPasswordField?: boolean;
    //ContactUs fields
    includeContactUsNameField?: boolean;
    includeContactUsEmailField?: boolean;
    includeContactUsPhoneNumberField?: boolean;
    includeContactUsMessageField?: boolean;
    //Vendor fields
    includeVendorNameField?: boolean;
    includeVendorBusinessNameField?: boolean;
    includeVendorBusinessAddressField?: boolean;
    includeVendorBusinessEmailField?: boolean;
    includeVendorBusinessPhoneNumberField?: boolean;
    includeVendorBusinessLicenseNumberField?: boolean;
}

export function Form({
    mode,
    title,
    icon,
    buttonText,
    loading,
    loginFormSubmit,
    registerFormSubmit,
    contactUsFormSubmit,
    vendorFormSubmit,
    includeRegisterLinkField = false,
    includeImageField = false,
    formType,
    containerWidth = "50%",
    includeSnackbarPopup = false,
    handleSnackbarClosed,
    snackbarState,
    //Login fields
    includeEmailField = false,
    includePasswordField = false,
    //Contact Us fields
    includeContactUsNameField = false,
    includeContactUsEmailField = false,
    includeContactUsPhoneNumberField = false,
    includeContactUsMessageField = false,
    //Register fields
    includeRegisterFirstNameField = false,
    includeRegisterLastNameField = false,
    includeRegisterPhoneNumberField = false,
    includeRegisterEmailField = false,
    includeRegisterConfirmEmailField = false,
    includeRegisterPasswordField = false,
    includeRegisterConfirmPasswordField = false,
    //Vendor fields
    includeVendorNameField = false,
    includeVendorBusinessNameField = false,
    includeVendorBusinessAddressField = false,
    includeVendorBusinessEmailField = false,
    includeVendorBusinessPhoneNumberField = false,
    includeVendorBusinessLicenseNumberField = false,

}: FormProps
) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [registerFirstName, setRegisterFirstName] = useState('');
    const [registerFirstNameError, setRegisterFirstNameError] = useState(false);
    const [registerLastName, setRegisterLastName] = useState('');
    const [registerLastNameError, setRegisterLastNameError] = useState(false);
    const [registerPhoneNumber, setRegisterPhoneNumber] = useState<number | null>(" " as unknown as number);
    const [registerPhoneNumberError, setRegisterPhoneNumberError] = useState(false);
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerEmailError, setRegisterEmailError] = useState(false);
    const [registerConfirmEmail, setRegisterConfirmEmail] = useState('');
    const [registerConfirmEmailError, setRegisterConfirmEmailError] = useState(false);
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPasswordError, setRegisterPasswordError] = useState(false);
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
    const [registerConfirmPasswordError, setRegisterConfirmPasswordError] = useState(false);

    const [vendorName, setVendorName] = useState('');
    const [vendorNameError, setVendorNameError] = useState(false);
    const [vendorBusinessName, setVendorBusinessName] = useState('');
    const [vendorBusinessNameError, setVendorBusinessNameError] = useState(false);
    const [vendorBusinessAddress, setVendorBusinessAddress] = useState('');
    const [vendorBusinessAddressError, setVendorBusinessAddressError] = useState(false);
    const [vendorBusinessEmail, setVendorBusinessEmail] = useState('');
    const [vendorBusinessEmailError, setVendorBusinessEmailError] = useState(false);
    const [vendorBusinessPhoneNumber, setVendorBusinessPhoneNumber] = useState<number | null>(" " as unknown as number);
    const [vendorBusinessPhoneNumberError, setVendorBusinessPhoneNumberError] = useState(false);
    const [vendorBusinessLicenseNumber, setVendorBusinessLicenseNumber] = useState<number | null>(" " as unknown as number);
    const [vendorBusinessLicenseNumberError, setVendorBusinessLicenseNumberError] = useState(false);

    const [contactName, setContactName] = useState('');
    const [contactNameError, setContactNameError] = useState(false);
    const [contactMessage, setContactMessage] = useState('');
    const [contactMessageError, setContactMessageError] = useState(false);
    const [contactNumber, setContactNumber] = useState<number | null>(" " as unknown as number);
    const [contactNumberError, setContactNumberError] = useState(false);
    const [contactEmail, setContactEmail] = useState('');
    const [contactEmailError, setContactEmailError] = useState(false);

    const handleSnackBarOpen = (severity: AlertColor, message?: string) => {
        //Open snackbar logic here
        let snackbarMessage = message || '';

        if (severity === "error" && message) {
            snackbarMessage = message;
            //Below to be removed - thast is commented out.
            if (snackbarState) {
                snackbarState.open = true;
                snackbarState.message = snackbarMessage;
                snackbarState.severity = severity;
            }
            console.log("Snackbar opened with severity:", severity, "and message:", snackbarMessage);
        }

        if (severity === "success" && message) {
            snackbarMessage = message;
            if (snackbarState) {
                snackbarState.open = true;
                snackbarState.message = snackbarMessage;
                snackbarState.severity = severity;
            }
            console.log("Snackbar opened with severity:", severity, "and message:", snackbarMessage);
        }
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setRegisterFirstName('');
        setRegisterLastName('');
        setRegisterPhoneNumber(" " as unknown as number);
        setRegisterEmail('');
        setRegisterConfirmEmail('');
        setRegisterPassword('');
        setRegisterConfirmPassword('');
        setContactName('');
        setContactMessage('');
        setContactEmail('');
        setContactNumber(" " as unknown as number);
        setVendorName('');
        setVendorBusinessName('');
        setVendorBusinessEmail('');
        setVendorBusinessPhoneNumber(" " as unknown as number);
        setVendorBusinessAddress('');
        setVendorBusinessLicenseNumber(" " as unknown as number);
    };

    const validateForm = () => {
        let formIsValid = true;

        if (
            includeEmailField &&
            includePasswordField &&
            (
                !email.includes("@") &&
                !email.includes(".") &&
                !password)
        ) {
            setEmailError(true)
            setPasswordError(true)
            if (snackbarState) {
                snackbarState.message = "Invalid email address & password, email must contain a '@' and '.' ";
                snackbarState.severity = "error";
            }
            formIsValid = false;
        } else {
            setEmailError(false)
            setPasswordError(false)
        }

        if (
            includeRegisterFirstNameField &&
            includeRegisterLastNameField &&
            includeRegisterPhoneNumberField &&
            includeRegisterEmailField &&
            includeRegisterConfirmEmailField &&
            includeRegisterPasswordField &&
            includeRegisterConfirmPasswordField &&
            (
                !registerFirstName ||
                !registerLastName ||
                !registerPhoneNumber ||
                !registerEmail.includes("@") ||
                !registerEmail.includes(".") ||
                !registerConfirmEmail ||
                !registerPassword ||
                !registerConfirmPassword)
        ) {
            setRegisterFirstNameError(true)
            setRegisterLastNameError(true)
            setRegisterPhoneNumberError(true)
            setRegisterEmailError(true)
            setRegisterPasswordError(true)
            setRegisterConfirmEmail("")
            setRegisterConfirmPassword("")
            if (snackbarState) {
                snackbarState.message = "Invalid First Name, Last Name, Phone Number, Email, confirmEmail, Password, Confirm Password";
                snackbarState.severity = "error";
            }
        } else {
            setRegisterFirstNameError(false)
            setRegisterLastNameError(false)
            setRegisterPhoneNumberError(false)
            setRegisterEmailError(false)
            setRegisterConfirmEmailError(false)
            setRegisterPasswordError(false)
            setRegisterConfirmPasswordError(false)
            setRegisterConfirmEmail("")
            setRegisterConfirmPassword("")
        }

        if (
            includeContactUsNameField &&
            includeContactUsPhoneNumberField &&
            includeContactUsMessageField &&
            (
                !contactName ||
                !contactNumber ||
                !contactEmail.includes("@") ||
                !contactEmail.includes(".") ||
                !contactMessage ||
                contactMessage.length < 10)
        ) {
            setContactNameError(true)
            setContactNumberError(true)
            setContactEmailError(true)
            setContactMessageError(true)
            if (snackbarState) {
                snackbarState.message = "Invalid:" + "Name" + "Phone Number" + "Message must be less than 500 characters";
                snackbarState.severity = "error";
            }
        } else {
            setContactNameError(false)
            setContactNumberError(false)
            setContactEmailError(false)
            setContactMessageError(false)
        }

        if (
            includeVendorNameField &&
            includeVendorBusinessNameField &&
            includeVendorBusinessEmailField &&
            includeVendorBusinessPhoneNumberField &&
            includeVendorBusinessLicenseNumberField &&
            includeVendorBusinessAddressField &&
            (
                !vendorName ||
                !vendorBusinessName ||
                !vendorBusinessEmail.includes("@") ||
                !vendorBusinessEmail.includes(".") ||
                !vendorBusinessPhoneNumber ||
                !vendorBusinessLicenseNumber ||
                !vendorBusinessAddress)
        ) {
            setVendorNameError(true)
            setVendorBusinessNameError(true)
            setVendorBusinessEmailError(true)
            setVendorBusinessPhoneNumberError(true)
            setVendorBusinessLicenseNumberError(true)
            setVendorBusinessAddressError(true)
            if (snackbarState) {
                snackbarState.message = "Invalid Vendor Name, Business Name, Business Email, Business Phone Number, Business License Number, Business Address";
                snackbarState.severity = "error";
            }
        } else {
            setVendorNameError(false)
            setVendorBusinessNameError(false)
            setVendorBusinessEmailError(false)
            setVendorBusinessPhoneNumberError(false)
            setVendorBusinessLicenseNumberError(false)
            setVendorBusinessAddressError(false)
        }
        handleSnackBarOpen(snackbarState?.severity as AlertColor, snackbarState?.message);

        return formIsValid;
    }

    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const isFormValidated = validateForm();

        // Only submit the form if it is validated
        if (isFormValidated) {
            // Handle form submission logic based on form type
            switch (formType) {
                case 'login':
                    if (loginFormSubmit) {
                        const loginData: LoginFormData = {
                            email,
                            password
                        };
                        loginFormSubmit(loginData);
                        console.log("Login successful! working on it..." + email + " " + password);
                    }
                    break;
                case 'register':
                    if (registerFormSubmit) {
                        const registerData: RegisterFormData = {
                            firstname: '',
                            lastname: '',
                            phoneNumber: " " as unknown as number,
                            email: '',
                            confirmEmail: '',
                            password: '',
                            confirmPassword: ''
                        };
                        registerFormSubmit(registerData);
                        console.log("Registration successful! working on it...");
                    }
                    break;
                case 'contactUs':
                    if (
                        contactUsFormSubmit &&
                        contactName &&
                        contactEmail.includes('@') &&
                        contactEmail.includes('.') &&
                        contactNumber !== null &&
                        contactMessage &&
                        contactMessage.length < 500
                    ) {
                        const contactUsData: ContactUsFormData = {
                            contactName,
                            email,
                            contactMessage,
                            phoneNumber: " " as unknown as number,
                        };
                        contactUsFormSubmit(contactUsData);
                        console.log("Message sent successfully! contact us submit working on it...");
                    }
                    break;
                case 'vendor':
                    if (
                        vendorFormSubmit &&
                        vendorBusinessName &&
                        vendorBusinessEmail.includes('@') &&
                        vendorBusinessEmail.includes('.') &&
                        vendorBusinessPhoneNumber !== null &&
                        vendorBusinessLicenseNumber !== null &&
                        vendorBusinessAddress
                    ) {
                        const vendorData: VendorFormData = {
                            vendorName,
                            vendorBusinessName,
                            vendorBusinessEmail,
                            vendorBusinessPhoneNumber,
                            vendorBusinessAddress,
                            vendorBusinessLicenseNumber,
                        };
                        vendorFormSubmit(vendorData);
                        console.log("Vendor registration successful! working on it...");
                    }
                    break;
                default:
                    break;
            }
            // Reset the form after submission
            resetForm();
        } else {
            if (snackbarState) {
                snackbarState.open = true;
                snackbarState.severity = "error";
                snackbarState.message = "Form submission failed. Please check the fields.";
            }
            console.log('Form submission failed. Please check the fields.');
        }
    }

    return (
        <Container maxWidth="xl" sx={{ height: "100%", mt: 3, mb: 6 }} style={{ width: containerWidth }}>
            <Box sx={{ height: "100%" }}>
                <Container sx={{ bgcolor: mode === "dark" ? "#47008F" : "#F5EBFF", height: "90vh", padding: "40px", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px" }}>
                    <CssBaseline />
                    <Box sx={{  bgcolor: mode === "dark" ? "primary.dark" : "primary.light", 
                                       height: "100%", 
                                       width: "100%", 
                                       overflow: "hidden", 
                                       borderRadius: "10px", 
                                       overflowY: "auto", 
                                       scrollbarColor: mode === "dark" ? "#47008F #F5EBFF" : "#F5EBFF #47008F", 
                                       scrollbarWidth: "thin",  
                                       }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {icon}
                            <Typography variant="h5" component="h1" sx={{ mt: 1 }}>{title}</Typography>

                            {includeSnackbarPopup && (
                                <Snackbar
                                    open={snackbarState?.open}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    sx={{ mt: 25, mr: 22 }}
                                    autoHideDuration={4000}
                                    onClose={handleSnackbarClosed}
                                >
                                    <Alert
                                        onClose={handleSnackbarClosed}
                                        severity={snackbarState?.severity || "info"}
                                        variant='filled'
                                        sx={{ width: '100%' }}>
                                        {snackbarState?.message}
                                    </Alert>
                                </Snackbar>
                            )}

                            {includeImageField && (
                                <Box sx={{
                                    height: "13rem",
                                    width: "100%",
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    overflow: "hidden"
                                }}
                                    mt={2}
                                    mb={2}
                                >
                                    <img src={MainImg} style={{ width: "70vw", maxHeight: "100%", objectFit: "cover", }} />
                                </Box>
                            )}


                            {/*Login fields*/}
                            {includeEmailField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!emailError}
                                    helperText={emailError ? "Invalid email address, must contain a '@' and '.' " : ""}
                                />
                            )}

                            {includePasswordField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={!!passwordError}
                                    helperText={passwordError ? "Password must be at least 6 characters" : ""}
                                />
                            )}

                            {/*Vendor fields*/}
                            {includeVendorNameField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="vendorName"
                                    label="Vendor Name"
                                    name="vendorName"
                                    autoComplete="vendorName"
                                    autoFocus
                                    value={vendorName}
                                    onChange={(e) => setVendorName(e.target.value)}
                                    error={!!vendorNameError}
                                    helperText={vendorNameError ? "Invalid Vendor Name" : ""}
                                />
                            )}

                            {includeVendorBusinessNameField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="vendorBusinessName"
                                    label="Vendor Business Name"
                                    name="vendorBusinessName"
                                    autoComplete="vendorBusinessName"
                                    autoFocus
                                    value={vendorBusinessName}
                                    onChange={(e) => setVendorBusinessName(e.target.value)}
                                    error={!!vendorBusinessNameError}
                                    helperText={vendorBusinessNameError ? "Invalid Vendor Business Name" : ""}
                                />
                            )}

                            {includeVendorBusinessAddressField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="vendorBusinessAddress"
                                    label="Vendor Business Address"
                                    name="vendorBusinessAddress"
                                    autoComplete="vendorBusinessAddress"
                                    autoFocus
                                    value={vendorBusinessAddress}
                                    onChange={(e) => setVendorBusinessAddress(e.target.value)}
                                    error={!!vendorBusinessAddressError}
                                    helperText={vendorBusinessAddressError ? "Invalid Vendor Business Address" : ""}
                                />
                            )}

                            {includeVendorBusinessEmailField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="vendorBusinessEmail"
                                    label="Vendor Business Email"
                                    name="vendorBusinessEmail"
                                    autoComplete="vendorBusinessEmail"
                                    autoFocus
                                    value={vendorBusinessEmail}
                                    onChange={(e) => setVendorBusinessEmail(e.target.value)}
                                    error={!!vendorBusinessEmailError}
                                    helperText={vendorBusinessEmailError ? "Invalid Vendor Business Email" : ""}
                                />
                            )}

                            {includeVendorBusinessPhoneNumberField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="vendorBusinessPhoneNumber"
                                    label="Vendor Business Phone Number"
                                    name="vendorBusinessPhoneNumber"
                                    autoComplete="vendorBusinessPhoneNumber"
                                    autoFocus
                                    value={vendorBusinessPhoneNumber}
                                    onChange={(e) => setVendorBusinessPhoneNumber(parseInt(e.target.value))}
                                    error={!!vendorBusinessPhoneNumberError}
                                    helperText={vendorBusinessPhoneNumberError ? "Invalid Vendor Business Phone Number" : ""}
                                />
                            )}

                            {includeVendorBusinessLicenseNumberField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="vendorBusinessLicenseNumber"
                                    label="Vendor Business License Number"
                                    name="vendorBusinessLicenseNumber"
                                    autoComplete="vendorBusinessLicenseNumber"
                                    autoFocus
                                    value={vendorBusinessLicenseNumber}
                                    onChange={(e) => setVendorBusinessLicenseNumber(parseInt(e.target.value))}
                                    error={!!vendorBusinessLicenseNumberError}
                                    helperText={vendorBusinessLicenseNumberError ? "Invalid Vendor Business License Number" : ""}
                                />
                            )}


                            {/*Registration fields*/}
                            {includeRegisterFirstNameField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="firstName"
                                    autoFocus
                                    value={registerFirstName}
                                    onChange={(e) => setRegisterFirstName(e.target.value)}
                                    error={!!registerFirstNameError}
                                    helperText={registerFirstNameError ? "Invalid First Name" : ""}
                                />
                            )}

                            {includeRegisterLastNameField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lastName"
                                    autoFocus
                                    value={registerLastName}
                                    onChange={(e) => setRegisterLastName(e.target.value)}
                                    error={!!registerLastNameError}
                                    helperText={registerLastNameError ? "Invalid Last Name" : ""}
                                />
                            )}

                            {includeRegisterPhoneNumberField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="phoneNumber"
                                    autoFocus
                                    value={registerPhoneNumber}
                                    onChange={(e) => setContactNumber(parseInt(e.target.value))}
                                    error={!!registerPhoneNumberError}
                                    helperText={registerPhoneNumberError ? "Invalid Phone Number" : ""}
                                />
                            )}

                            {includeRegisterEmailField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={registerEmail}
                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                    error={!!registerEmailError}
                                    helperText={registerEmailError ? "Invalid email address, must contain a '@' and '.' " : ""}
                                />
                            )}

                            {includeRegisterConfirmEmailField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="confirmEmail"
                                    label="Confirm Email Address"
                                    name="confirmEmail"
                                    autoComplete="confirmEmail"
                                    autoFocus
                                    value={registerConfirmEmail}
                                    onChange={(e) => setRegisterConfirmEmail(e.target.value)}
                                    error={registerEmailError !== registerConfirmEmailError}
                                    helperText={registerEmailError !== registerConfirmEmailError ? "Emails do not match" : ""}
                                />
                            )}

                            {includeRegisterPasswordField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={registerPassword}
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                    error={!!registerPasswordError}
                                    helperText={registerPasswordError ? "Password must be at least 6 characters" : ""}
                                />
                            )}

                            {includeRegisterConfirmPasswordField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    value={registerConfirmPassword}
                                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                                    error={registerPasswordError !== registerConfirmPasswordError}
                                    helperText={registerPasswordError !== registerConfirmPasswordError ? "Passwords do not match" : ""}
                                />
                            )}

                            {/* //ContactUs fields */}
                            {includeContactUsNameField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                    error={!!contactNameError}
                                    helperText={contactNameError ? "Invalid Name" : ""}
                                />
                            )}

                            {includeContactUsPhoneNumberField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="phoneNumber"
                                    autoFocus
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(parseInt(e.target.value))}
                                    error={!!contactNumberError}
                                    helperText={contactNumberError ? "Invalid Phone Number" : ""}
                                />
                            )}

                            {includeContactUsEmailField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    error={!!contactEmailError}
                                    helperText={contactEmailError ? "Invalid email address, must contain a '@' and '.' " : ""}
                                />
                            )}

                            {includeContactUsMessageField && (
                                <TextField
                                    sx={{ width: "75%" }}
                                    margin="normal"
                                    name="message"
                                    label="Message"
                                    multiline
                                    maxRows={4}
                                    id="message"
                                    value={contactMessage}
                                    onChange={(e) => setContactMessage(e.target.value)}
                                    inputProps={{ maxLength: 500 }}
                                    error={!!contactMessageError}
                                    helperText={contactMessageError && contactMessage.length < 10 ? "Message must be less than 500 characters" : ""}
                                />
                            )}

                            <form>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={loading}
                                    sx={{ mt: 3, mb: 2, width: "13rem", bgcolor: mode === "dark" ? "primary.light" : "primary.dark" }}
                                    onClick={formSubmitHandler}
                                >
                                    <Typography variant="body1">
                                        {buttonText}
                                    </Typography>
                                </Button>
                            </form>

                            {includeRegisterLinkField && (
                                <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", bgcolor: mode === "dark" ? "primary.dark" : "primary.light", width: "30%", mb: 2}}>
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Typography variant="subtitle1">
                                            Not a member?
                                        </Typography>
                                    </Box>

                                    <Link to="/register">
                                        <Typography variant="subtitle2" sx={{ mt: 1 }}>
                                            {"Register here"}
                                        </Typography>
                                    </Link>
                                </Container>
                            )}

                        </Box>
                    </Box>
                    </Container>
                </Box>
            </Container> 
        )
    }

    
