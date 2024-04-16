import { useState, useEffect } from 'react'
import { useThemeMode } from '../../main';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
import { Container, Paper, TextField, Snackbar, Button, Alert, Box, CssBaseline, Stack, CircularProgress } from '@mui/material';
import { setCredentials } from '../../../Redux-Store/Features/Slices/authSlice';
import { useUpdateUserProfileMutation } from '../../../Redux-Store/Features/Slices/userSlice';

function UserProfile() {
     const { mode } = useThemeMode();
     const { userInfo } = useSelector((state: any) => state.auth);
     const [loading, setLoading] = useState(false);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
     const [address, setAddress] = useState("");
     const [city, setCity] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [errorMessage, setErrorMessage] = useState("");
     const [successMessage, setSuccessMessage] = useState("");
     const dispatch = useDispatch();
     const navigate = useNavigate();
    const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  useEffect(() => {
    // Fetch user data here
    // Update state with user data
    // Handle loading state
    setName(userInfo.name || "" );
    setEmail(userInfo.email || "");
    setPhoneNumber(userInfo.phoneNumber || "");
    setAddress(userInfo.address || "");
    setCity(userInfo.city || "");
    }, [userInfo.setName, userInfo.setEmail, userInfo.setPhoneNumber]);

    
    const updateProfileHandler = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        if (!name || !email || !phoneNumber || !address || !city || !password || !confirmPassword) {
            setErrorMessage("Please fill in all fields");
            setLoading(false);
            return;
        } 
        
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            setLoading(false);
            return;
        } 

        try {
            const resp = await updateProfile({
                _id: userInfo._id, 
                name,
                email,
                phoneNumber,
                address,
                city,
                password,
            }).unwrap();
            dispatch(setCredentials({...resp}));
            //Success Toast/ Snackbar Popup
            setSuccessMessage("Profile updated successfully");
            navigate("/user-profile");
        } catch (error) {
            setErrorMessage("An error occurred while updating profile");
            console.log("Error updating profile", error);
        } finally {
            setLoading(false);
        }
  };

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
      <Container maxWidth="xl" sx={{ height: "100%", width:"40vw",  mt: 3, mb: 6, bgcolor: mode === "dark" ? "#A2F3D1" : "#29AB87", padding: "40px", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px" }}>
          <Paper sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", height: "100%", width: "100%", overflow: "hidden", borderRadius: "10px", overflowY: "auto", scrollbarColor: mode === "dark" ? "#29AB87 #A2F3D1" : "#A2F3D1 #29AB87", scrollbarWidth: "thin", }}>
         <CssBaseline />
              <form onSubmit={updateProfileHandler}>
                  <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      margin="normal"
                  />
                  <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      margin="normal"
                  />
                  <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      margin="normal"
                  />
                  <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      margin="normal"
                  />
                  <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      margin="normal"
                  />
                  <TextField
                      type="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      margin="normal"
                  />
                  <TextField
                      type="password"
                      label="Confirm Password"
                      variant="outlined"
                      fullWidth
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      margin="normal"
                  />
                  <Button type="submit" variant="contained" color="primary" disabled={isLoading} sx={{ mt: 2, mb: 2}}>
                      {isLoading ? 'Updating...' : 'Update Profile'}
                  </Button>
              </form>
              <Snackbar open={!!errorMessage} autoHideDuration={6000} onClose={() => setErrorMessage('')}>
                  <Alert severity="error">{errorMessage}</Alert>
              </Snackbar>
              <Snackbar open={!!successMessage} autoHideDuration={6000} onClose={() => setSuccessMessage('')}>
                  <Alert severity="success">{successMessage}</Alert>
              </Snackbar>
        </Paper>
    </Container>
    </>
  )
}

export default UserProfile;