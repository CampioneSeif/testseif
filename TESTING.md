# Testing Guide for Mobile Shop

This document provides information about the testing setup and how to run tests for the mobile shop application.

## Test Setup

The project uses **Jest** as the testing framework with **React Native Testing Library** for component testing.

### Test Configuration

- **Jest Config**: `jest.config.js`
- **Setup File**: `jest.setup.js`
- **Babel Config**: `babel.config.js`

### Dependencies

```json
{
  "@testing-library/react-native": "^12.4.3",
  "@types/jest": "^29.5.12",
  "babel-jest": "^29.7.0",
  "jest": "^30.2.0",
  "react-test-renderer": "19.1.0"
}
```

## Running Tests

### Run all tests
```bash
pnpm test
```

### Run tests in watch mode
```bash
pnpm test:watch
```

### Run tests with coverage
```bash
pnpm test:coverage
```

### Run specific test file
```bash
pnpm test -- path/to/test-file.test.ts
```

## Test Structure

### Current Test Coverage

#### ✅ Passing Tests

1. **Storage Utility Tests** (`lib/__tests__/storage.test.ts`)
   - Tests for AsyncStorage wrapper
   - Get, set, and remove operations
   - Multiple key handling
   - 7 tests passing

2. **Auth Slice Tests** (`lib/slices/__tests__/authSlice.unit.test.ts`)
   - Redux slice logic
   - Logout action
   - State immutability
   - 5 tests passing

3. **Auth Slice Integration Tests** (`lib/slices/__tests__/authSlice.test.ts`)
   - RTK Query integration
   - Verify user, login, OTP verification
   - 10 tests passing

4. **Basic Tests** (`sum.test.js`)
   - Example test
   - 1 test passing

**Total: 4 test suites, 22 tests passing**

#### ⚠️ Component Tests (Requires Additional Setup)

The Toaster component tests (`components/common/__tests__/Toaster.test.tsx`) require additional React Native environment setup. These tests are currently skipped due to native module dependencies.

## Writing Tests

### Example: Testing a Redux Slice

```typescript
import authReducer, { logout } from '../authSlice';

describe('authSlice', () => {
  it('should handle logout action', () => {
    const previousState = {
      isAuth: true,
      user: mockUser,
      token: mockToken,
    };

    const nextState = authReducer(previousState, logout());

    expect(nextState.isAuth).toBeNull();
    expect(nextState.user).toBeNull();
  });
});
```

### Example: Testing Async Storage

```typescript
import { storage } from '../storage';

describe('storage utility', () => {
  it('should store and retrieve values', async () => {
    await storage.setItem('key', 'value');
    const result = await storage.getItem('key');
    expect(result).toBe('value');
  });
});
```

## Mocked Modules

The following modules are mocked in `jest.setup.js`:

- `expo-router` - Navigation
- `expo-font` - Font loading
- `expo-splash-screen` - Splash screen
- `@react-native-async-storage/async-storage` - Storage
- `react-native-ui-lib` - UI components
- `@expo/vector-icons` - Icons
- `react-native-svg` - SVG components

## Coverage Reports

Coverage reports are generated in the `coverage/` directory:

- **HTML Report**: `coverage/index.html`
- **LCOV Report**: `coverage/lcov.info`
- **Text Summary**: Displayed in terminal

Current coverage:
- Statements: ~7%
- Branches: ~3%
- Functions: ~5%
- Lines: ~7%

## Best Practices

1. **Test File Naming**: Use `.test.ts` or `.test.tsx` suffix
2. **Test Location**: Place tests in `__tests__` folders next to source files
3. **Descriptive Names**: Use clear, descriptive test names
4. **Arrange-Act-Assert**: Follow AAA pattern
5. **Mock External Dependencies**: Mock API calls, navigation, etc.
6. **Test Behavior, Not Implementation**: Focus on what the code does, not how

## Troubleshooting

### Tests not found
- Ensure test files match the pattern: `**/__tests__/**/*.test.[jt]s?(x)`
- Check `testPathIgnorePatterns` in `jest.config.js`

### Module not found errors
- Check that all dependencies are installed: `pnpm install`
- Verify module paths in `moduleNameMapper` in `jest.config.js`

### React Native component errors
- Ensure proper mocks are set up in `jest.setup.js`
- Check that `__DEV__` and `__fbBatchedBridgeConfig` globals are defined

## Future Improvements

- [ ] Increase test coverage to >80%
- [ ] Add integration tests for API calls
- [ ] Set up E2E testing with Detox or Maestro
- [ ] Add snapshot testing for UI components
- [ ] Configure CI/CD pipeline for automated testing
- [ ] Add visual regression testing

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Testing React Native Apps](https://reactnative.dev/docs/testing-overview)
