import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-google-signin/google-signin', () => {
  return {
    GoogleSignin: {
      configure: jest.fn(),
      signIn: jest.fn(),
      signOut: jest.fn(),
      revokeAccess: jest.fn(),
      isSignedIn: jest.fn(),
      getCurrentUser: jest.fn(),
      getTokens: jest.fn(),
    },
    statusCodes: {
      SIGN_IN_CANCELLED: 'SIGN_IN_CANCELLED',
      IN_PROGRESS: 'IN_PROGRESS',
      PLAY_SERVICES_NOT_AVAILABLE: 'PLAY_SERVICES_NOT_AVAILABLE',
      SIGN_IN_REQUIRED: 'SIGN_IN_REQUIRED',
    },
  };
});
