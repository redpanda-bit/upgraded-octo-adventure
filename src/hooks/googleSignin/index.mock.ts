import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import type {GoogleUserInfoType} from 'src/types';
import mocks from 'e2e/mocks';

export const useGoogleSignIn = () => {
  const [userInfo, setUserInfo] = React.useState<GoogleUserInfoType>({
    userInfo: null,
  });
  const [isSigninInProgress, setIsSigninInProgress] =
    React.useState<boolean>(false);

  const googleSignIn = React.useCallback(async () => {
    setIsSigninInProgress(true);
    setUserInfo({userInfo: mocks.googleUserMock});
    setIsSigninInProgress(false);
  }, []);

  const googleSignOut = React.useCallback(async () => {
    setUserInfo({userInfo: null});
  }, []);

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: [],
      webClientId: '1234567890',
      offlineAccess: true,
      hostedDomain: '',
      forceCodeForRefreshToken: true,
      accountName: '',
      iosClientId: '',
      googleServicePlistPath: '',
      openIdRealm: '',
      profileImageSize: 120,
    });
  }, []);

  return {googleSignIn, googleSignOut, userInfo, isSigninInProgress};
};
