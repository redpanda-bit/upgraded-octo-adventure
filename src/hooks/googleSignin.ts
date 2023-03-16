import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import type {GoogleUserInfoType} from 'src/types';

export const useGoogleSignIn = () => {
  const [userInfo, setUserInfo] = React.useState<GoogleUserInfoType>({
    userInfo: null,
  });
  const [isSigninInProgress, setIsSigninInProgress] =
    React.useState<boolean>(false);

  const googleSignIn = React.useCallback(async () => {
    try {
      setIsSigninInProgress(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo({userInfo});
    } catch (error) {
      console.error(error);
    } finally {
      setIsSigninInProgress(false);
    }
  }, []);

  const googleSignOut = React.useCallback(async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo({userInfo: null});
    } catch (error) {
      console.error(error);
    }
  }, [GoogleSignin]);

  return {googleSignIn, googleSignOut, userInfo, isSigninInProgress};
};
