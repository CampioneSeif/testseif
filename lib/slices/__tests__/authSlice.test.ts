import { configureStore } from '@reduxjs/toolkit';
import authReducer, { logout } from '../authSlice';
import { User } from '../../../types/user';

// Mock the storage module
jest.mock('../../storage', () => ({
  storage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  },
}));

// Mock the AuthApi
jest.mock('../../../services/AuthApi', () => ({
  api: {
    endpoints: {
      verifyUser: {
        matchFulfilled: jest.fn((action) => action.type === 'api/verifyUser/fulfilled'),
        matchRejected: jest.fn((action) => action.type === 'api/verifyUser/rejected'),
      },
      login: {
        matchFulfilled: jest.fn((action) => action.type === 'api/login/fulfilled'),
      },
      verifyOtp: {
        matchFulfilled: jest.fn((action) => action.type === 'api/verifyOtp/fulfilled'),
      },
    },
  },
}));

// Helper to create mock user
const createMockUser = (overrides: Partial<User> = {}): User => ({
  id: 1,
  email: 'test@example.com',
  full_name: 'John Doe',
  sex: 'M',
  phone: '1234567890',
  otpCodes: [],
  roleCode: 'USER',
  role: {
    id: 1,
    name: 'User',
    code: 'USER',
    description: 'Regular user',
    role_type_id: '1',
  },
  token: 'test-token',
  status: 'ACTIVE',
  firstLogin: false,
  ...overrides,
});

describe('authSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
  });

  describe('initial state', () => {
    it('should have correct initial state', () => {
      const state = store.getState().auth;
      expect(state).toEqual({
        isAuth: null,
        phone: null,
        user: null,
        token: null,
      });
    });
  });

  describe('logout action', () => {
    it('should reset auth state on logout', () => {
      // First set some state
      store = configureStore({
        reducer: {
          auth: authReducer,
        },
        preloadedState: {
          auth: {
            isAuth: true,
            phone: '1234567890',
            user: createMockUser({ full_name: 'Test User' }),
            token: { access_token: 'test-token', refresh_token: 'refresh-token' },
          },
        },
      });

      store.dispatch(logout());
      const state = store.getState().auth;

      expect(state.isAuth).toBeNull();
      expect(state.user).toBeNull();
      expect(state.token).toBeNull();
    });
  });

  describe('verifyUser matcher', () => {
    it('should set user and isAuth to true when user has full_name and is ACTIVE', () => {
      const mockUser = createMockUser();

      store.dispatch({
        type: 'api/verifyUser/fulfilled',
        payload: mockUser,
      });

      const state = store.getState().auth;
      expect(state.user).toEqual(mockUser);
      expect(state.isAuth).toBe(true);
    });

    it('should set isAuth to false when user has empty full_name', () => {
      const mockUser = createMockUser({ full_name: '' });

      store.dispatch({
        type: 'api/verifyUser/fulfilled',
        payload: mockUser,
      });

      const state = store.getState().auth;
      expect(state.user).toEqual(mockUser);
      expect(state.isAuth).toBe(false);
    });

    it('should set isAuth to false when user status is not ACTIVE', () => {
      const mockUser = createMockUser({ status: 'INACTIVE' });

      store.dispatch({
        type: 'api/verifyUser/fulfilled',
        payload: mockUser,
      });

      const state = store.getState().auth;
      expect(state.user).toEqual(mockUser);
      expect(state.isAuth).toBe(false);
    });

    it('should clear auth state when verifyUser is rejected', () => {
      // Set initial state
      store = configureStore({
        reducer: {
          auth: authReducer,
        },
        preloadedState: {
          auth: {
            isAuth: true,
            phone: '1234567890',
            user: createMockUser({ full_name: 'Test User' }),
            token: { access_token: 'test-token', refresh_token: 'refresh-token' },
          },
        },
      });

      store.dispatch({
        type: 'api/verifyUser/rejected',
      });

      const state = store.getState().auth;
      expect(state.user).toBeNull();
      expect(state.isAuth).toBe(false);
      expect(state.token).toBeNull();
    });
  });

  describe('verifyOtp matcher', () => {
    it('should set token when OTP verification succeeds with tokens', () => {
      const mockPayload = {
        phone: '1234567890',
        tokens: {
          access_token: 'new-access-token',
          refresh_token: 'new-refresh-token',
        },
      };

      store.dispatch({
        type: 'api/verifyOtp/fulfilled',
        payload: mockPayload,
      });

      const state = store.getState().auth;
      expect(state.token).toEqual(mockPayload.tokens);
    });

    it('should not set token when payload has no tokens (first login)', () => {
      const mockPayload = {
        phone: '1234567890',
      };

      store.dispatch({
        type: 'api/verifyOtp/fulfilled',
        payload: mockPayload,
      });

      const state = store.getState().auth;
      expect(state.token).toBeNull();
    });

    it('should handle invalid OTP verification response', () => {
      store.dispatch({
        type: 'api/verifyOtp/fulfilled',
        payload: null,
      });

      const state = store.getState().auth;
      // State should remain unchanged
      expect(state.token).toBeNull();
    });
  });
});
