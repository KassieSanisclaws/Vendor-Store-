import { apiSlice } from './apiSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//All backend for users starts with api/users.
const USERS_URL = "api/users";

interface Favorites {
    userId: number;
    vendorId: number; 
    serviceName: string;
    price: number;
    rating: number;
    image: string;
}

interface Reservation {
    userId: number;
    vendorId: number;
    serviceName: string;
    price: number;
    rating: number;
    image: string;
    date: string;
    time: string;
    duration: number;
}

interface Payment {
    userId: number;
    vendorId: number;
    serviceName: string;
    price: number;
    rating: number;
    image: string;
    date: string;
    time: string;
    duration: number;
    paymentMethod: string;
    cardNumber: number;
    expiryDate: string;
    cvv: number;
}

interface Order {
    userId: number;
    vendorId: number;
    serviceName: string;
    price: number;
    rating: number;
    image: string;
    date: string;
    time: string;
    duration: number;
    paymentMethod: string;
    cardNumber: number;
    expiryDate: string;
    cvv: number;
    status: string;
}

interface UserProfile {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    greeting: string;
};

interface UserState {
   profile: UserProfile;
   favorites: Favorites[];
   reservations: Reservation[];
   payments: Payment[];
   orders: Order[]; 
   loading: boolean;
  error: null | string;
}

const initialState: UserState = {
    profile: {
        firstName: "",
        lastName: "",
        phoneNumber: 0,
        address: "",
        city: "",
        province: "",
        postalCode: "",
        greeting: "",
    },
    favorites: [],
    reservations: [],
    payments: [],
    orders: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorites>) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((favorite) => favorite.vendorId !== action.payload);
    },
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.reservations.push(action.payload);
    },
    deleteReservation: (state, action: PayloadAction<number>) => {
      state.reservations = state.reservations.filter((reservation) => reservation.vendorId !== action.payload);
    },
    addPayment: (state, action: PayloadAction<Payment>) => {
      state.payments.push(action.payload);
    },
    // deletePayment: (state, action: PayloadAction<number>) => {
    //   state.payments = state.payments.filter((payment) => payment.vendorId !== action.payload);
    // },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter((order) => order.vendorId !== action.payload);
    },
  },
});

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: {
              email: string, 
              password: string,
         }) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data: {
               username: string, 
               email: string, 
               password: string, 
               phoneNumber: number,

         }) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
        query: () => ({
            url: `${USERS_URL}/logout`,
            method: "POST",
        }),
    }),
    updateUserProfile: builder.mutation({
        query: (data: {
               userId: number,
               profile: UserProfile
            }) => ({
            url: `${USERS_URL}/profile/${data.userId}`,
            method: "PUT",
            body: data.profile,
        }),
    }),

  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useUpdateUserProfileMutation } = userApiSlice;

export default userSlice.reducer;