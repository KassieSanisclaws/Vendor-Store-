import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from "./apiSlice";

const VENDORS_URL = "api/vendors";

interface VendorProfile {
    vendorId: number;
    vendorName: string;
    businessEmail: string;
    phoneNumber: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    description: string;
    image: string;
    vendorRating: number
    vendorReviews: number;
    services: string;
    businessHours: string;
    businessLicenseNumber: number;
    greeting: string;
    activeStatus: boolean;
}

interface VendorState {
    vendorProfile: VendorProfile;
    loading: boolean;
    error: null | string;
};

const initialState: VendorState = {
    vendorProfile: {
        vendorId: 0,
        vendorName: "",
        businessEmail: "",
        phoneNumber: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
        description: "",
        image: "",
        vendorRating: 0,
        vendorReviews: 0,
        services: "",
        businessHours: "",
        businessLicenseNumber: 0,
        greeting: "",
        activeStatus: false,
    },
    loading: false,
    error: null,
};

const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setVendorProfile: (state, action) => {
            state.vendorProfile = action.payload;
        },

    },
});

export const vendorApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data: { 
                email: string, 
                password: string 
            }) => ({
              url: `${VENDORS_URL}/auth`,
              method: 'POST',
              body: data,
        }),
    }),
     logout: builder.mutation({
        query: () => ({
            url: `${VENDORS_URL}/logout`,
            method: 'POST',
        }),
     }),
    updateVendorProfile: builder.mutation({
        query: (data: {
            vendorId: number,
            profile: VendorProfile
        }) => ({
            url: `${VENDORS_URL}/profile/${data.vendorId}`,
            method: 'PUT',
            body: data.profile,
        }),
    })
}),
overrideExisting: false,
});

export const { useLoginMutation, useLogoutMutation, useUpdateVendorProfileMutation } = vendorApiSlice;

export default vendorSlice.reducer;