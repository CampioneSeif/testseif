import authReducer, { logout } from '../authSlice';

describe('authSlice - Unit Tests', () => {
  describe('initial state', () => {
    it('should return initial state when passed undefined', () => {
      const initialState = authReducer(undefined, { type: 'unknown' });
      
      expect(initialState).toEqual({
        isAuth: null,
        phone: null,
        user: null,
        token: null,
      });
    });
  });

  describe('logout reducer', () => {
    it('should reset auth state on logout', () => {
      const previousState = {
        isAuth: true,
        phone: '1234567890',
        user: {
          id: 1,
          email: 'test@example.com',
          full_name: 'Test User',
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
        },
        token: { access_token: 'test-token', refresh_token: 'refresh-token' },
      };

      const nextState = authReducer(previousState, logout());

      expect(nextState.isAuth).toBeNull();
      expect(nextState.user).toBeNull();
      expect(nextState.token).toBeNull();
      // phone is not reset in logout action
      expect(nextState.phone).toBe('1234567890');
    });

    it('should handle logout when already logged out', () => {
      const previousState = {
        isAuth: null,
        phone: null,
        user: null,
        token: null,
      };

      const nextState = authReducer(previousState, logout());

      expect(nextState).toEqual({
        isAuth: null,
        phone: null,
        user: null,
        token: null,
      });
    });

    it('should preserve phone number after logout', () => {
      const previousState = {
        isAuth: true,
        phone: '9876543210',
        user: {
          id: 1,
          email: 'test@example.com',
          full_name: 'Test User',
          sex: 'M',
          phone: '9876543210',
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
        },
        token: { access_token: 'test-token', refresh_token: 'refresh-token' },
      };

      const nextState = authReducer(previousState, logout());

      expect(nextState.phone).toBe('9876543210');
    });
  });

  describe('state immutability', () => {
    it('should not mutate the original state', () => {
      const originalState = {
        isAuth: true,
        phone: '1234567890',
        user: {
          id: 1,
          email: 'test@example.com',
          full_name: 'Test User',
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
        },
        token: { access_token: 'test-token', refresh_token: 'refresh-token' },
      };

      const stateCopy = JSON.parse(JSON.stringify(originalState));
      authReducer(originalState, logout());

      // Original state should not be modified
      expect(originalState).toEqual(stateCopy);
    });
  });
});
