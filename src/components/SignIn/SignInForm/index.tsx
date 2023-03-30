import React from 'react';
import testIds from 'src/test-ids';
import {signin as strings} from 'src/locales';

import {
  View,
  Text,
  InputWithLabel,
  Button,
  GoogleSigninButton,
  Touchable,
} from 'src/components/common';

type SignInFormProps = {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isSignedIn: boolean;
  googleSignIn: () => void;
  isSigninInProgress: boolean;
};

export const SignInForm = (props: SignInFormProps): JSX.Element | null => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    isSignedIn,
    googleSignIn,
    isSigninInProgress,
  } = props;
  if (isSignedIn) {
    return null;
  }
  return (
    <View testID={testIds.page.signin.signInForm}>
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
      <GoogleSigninButton
        testID={testIds.page.signin.googleSignInButton}
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
        disabled={isSigninInProgress}
      />
    </View>
  );
};
