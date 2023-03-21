import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import type {GoogleUserInfoType} from 'src/types';

GoogleSignin.configure({
  scopes: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ], // what API you want to access on behalf of the user, default is email and profile
  webClientId: process.env.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: process.env.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export const useGoogleSignIn = () => {
  const [userInfo, setUserInfo] = React.useState<GoogleUserInfoType>({
    userInfo: null,
  });
  const [isSigninInProgress, setIsSigninInProgress] =
    React.useState<boolean>(false);

  const googleSignIn = React.useCallback(async () => {
    console.log('**LOG** real signin in!:');
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
