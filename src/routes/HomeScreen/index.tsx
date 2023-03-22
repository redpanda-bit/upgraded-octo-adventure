import React from 'react';
import {
  View,
  Text,
  InputWithLabel,
  Button,
  GoogleSigninButton,
  Touchable,
} from 'src/components/common';
import {signin as strings} from 'src/locales';
import {useGoogleSignIn} from 'src/hooks';
import testIds from 'src/test-ids';

import type {HomeScreenProps} from 'src/types';

export function HomeScreen(props: HomeScreenProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {userInfo, googleSignIn, googleSignOut, isSigninInProgress} =
    useGoogleSignIn();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <InputWithLabel
        label={strings.username}
        labelTestID={testIds.page.signin.usernameLabel}
        testID={testIds.page.signin.usernameInput}
        value={username}
        onChangeText={setUsername}
      />
      <InputWithLabel
        label={strings.password}
        labelTestID={testIds.page.signin.passwordLabel}
        testID={testIds.page.signin.passwordInput}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        testID={testIds.page.signin.signinBtn}
        onPress={() => {}}
        title={strings.submit}
        accessibilityLabel={strings.submit}
      />
      {userInfo.userInfo ? (
        <Touchable
          testID={testIds.page.signin.googleSignOutButton}
          onPress={googleSignOut}>
          <Text>Google sign out</Text>
        </Touchable>
      ) : (
        <GoogleSigninButton
          testID={testIds.page.signin.googleSignInButton}
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={googleSignIn}
          disabled={isSigninInProgress}
        />
      )}
      <Button
        testID={testIds.page.signin.cameraButton}
        onPress={() => {}}
        title={strings.camera}
        accessibilityLabel={strings.camera}
      />
    </View>
  );
}
