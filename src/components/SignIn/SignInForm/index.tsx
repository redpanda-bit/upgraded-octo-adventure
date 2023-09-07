import React from 'react';
import testIds from 'src/test-ids';
import translate from 'src/locales';
import {
  View,
  InputWithLabel,
  Button,
  GoogleSigninButton,
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
        autoCorrect={false}
        autoComplete={'username'}
        spellCheck={false}
        label={translate('signin.username')}
        labelTestID={testIds.page.signin.usernameLabel}
        testID={testIds.page.signin.usernameInput}
        value={username}
        onChangeText={setUsername}
      />
      <InputWithLabel
        secureTextEntry={true}
        label={translate('signin.password')}
        labelTestID={testIds.page.signin.passwordLabel}
        testID={testIds.page.signin.passwordInput}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        testID={testIds.page.signin.signinBtn}
        onPress={() => {}}
        title={translate('signin.submit')}
        accessibilityLabel={translate('signin.submit')}
      />
      <GoogleSigninButton
        testID={testIds.page.signin.googleSignInButton}
        className="w-[192] h-[48]"
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
        disabled={isSigninInProgress}
      />
    </View>
  );
};
