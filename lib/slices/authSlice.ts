import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services/AuthApi';
import { User } from '../../types/user';
import { storage } from '../storage';

type AuthState = {
  isAuth: boolean | null;
  user: User | null;
  phone: string | null;
  token: { access_token: string; refresh_token: string } | null | undefined;
};

const initialState: AuthState = {
  isAuth: null,
  phone: null,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = null;
      state.user = null;
      state.token = null;
      // Remove token asynchronously (fire and forget)
      storage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.verifyUser.matchFulfilled, (state, { payload }) => {
      // Store user data regardless of full_name status
      state.user = payload;

      if (payload.full_name !== '' && payload.status === 'ACTIVE') {
        state.isAuth = true;
      } else {
        // User exists but profile incomplete
        state.isAuth = false;
      }
    });
    builder.addMatcher(api.endpoints.verifyUser.matchRejected, (state) => {
      // Token invalid or expired, clear auth state
      state.user = null;
      state.isAuth = false;
      state.token = null;
    });
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
      // OTP request doesn't return user data or token yet
      // Just mark that OTP was sent successfully
      // Token and user will be set after OTP verification
      console.log('OTP request successful:', payload);
    });
    builder.addMatcher(api.endpoints.verifyOtp.matchFulfilled, (state, { payload }) => {
      console.log('OTP Verification Payload:', payload);

      // Check if payload exists
      if (!payload) {
        console.error('Invalid OTP verification response');
        return;
      }
    
      // Only set token if user is not first login and status is ACTIVE
      if (payload.tokens) {
        state.token = payload.tokens;
        // Store token asynchronously (fire and forget)
        storage.setItem('token', payload.tokens.access_token);
        storage.setItem('phone', payload.phone);
      } else {
        // First login - don't set token yet, user needs to complete profile
        state.token = null;
      }
      if (payload.status === 'ACTIVE') {
        state.isAuth = true;
        state.user = payload.user || null;
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
