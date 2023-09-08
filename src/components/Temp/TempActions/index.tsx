import React from 'react';
import translate from 'src/locales';
import {Button, Text, Touchable} from 'src/components/common';
import testIds from 'src/test-ids';

type Props = {
  onCameraPress: () => void;
  isSignedIn: boolean;
  googleSignOut: () => void;
};

export const TempActions = (props: Props): JSX.Element | null => {
  return props.isSignedIn ? (
    <>
      <Button
        testID={testIds.page.signin.cameraButton}
        onPress={props.onCameraPress}
        title={translate('signin.camera')}
        accessibilityLabel={translate('signin.camera')}
      />
      <Touchable
        testID={testIds.page.signin.googleSignOutButton}
        onPress={props.googleSignOut}>
        <Text>Google sign out</Text>
      </Touchable>
    </>
  ) : null;
};
