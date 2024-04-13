import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userApiSlice } from './Features/Slices/userSlice';
import authSlice from './Features/Slices/authSlice';


export const store = configureStore({
  reducer: {
    // Add reducers here:
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

