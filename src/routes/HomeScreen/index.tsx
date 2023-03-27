import React from 'react';
import {View} from 'src/components/common';
import {useGoogleSignIn} from 'src/hooks';

import type {HomeScreenProps} from 'src/types';

import {SignInForm} from 'src/components/SignIn/SignInForm';
import {TempActions} from 'src/components/Temp/TempActions';

export function HomeScreen(props: HomeScreenProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {userInfo, googleSignIn, googleSignOut, isSigninInProgress} =
    useGoogleSignIn();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SignInForm
        isSignedIn={!!userInfo.userInfo}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        googleSignIn={googleSignIn}
        isSigninInProgress={isSigninInProgress}
      />
      <TempActions
        isSignedIn={!!userInfo.userInfo}
        navigation={props.navigation}
        googleSignOut={googleSignOut}
      />
    </View>
  );
}
