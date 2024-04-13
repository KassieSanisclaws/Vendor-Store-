import React, { useState, useEffect } from 'react'
import { useThemeMode } from '../../main';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
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

     const dispatch = useDispatch();
     const navigate = useNavigate();

    const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  useEffect(() => {
    // Fetch user data here
    // Update state with user data
    // Handle loading state
    setName(userInfo.name);
    setEmail(userInfo.email);
    setPhoneNumber(userInfo.phoneNumber);
    
    }, [userInfo.setName, userInfo.setEmail, userInfo.setPhoneNumber]);

    
    const updateProfileHandler = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        if (!name || !email || !phoneNumber || !address || !city || !password || !confirmPassword) {
            setLoading(false);
            return;
        } else if (password !== confirmPassword) {
        } else {
            console.log(updateProfileHandler)
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
            
            navigate("/user-profile");
        } catch (error) {
            console.log("Error updating profile", error);
        }
      
  };

  return (
    <div>User profile</div>
  )
}

export default UserProfile;