import React from 'react';
import {signin as strings} from 'src/locales';
import {Button, Text, Touchable} from 'src/components/common';
import {routes, HomeScreenProps} from 'src/types';
import testIds from 'src/test-ids';

type TempActionProps = {
  isSignedIn: boolean;
  navigation: HomeScreenProps['navigation'];
  googleSignOut: () => void;
};

export const TempActions = (props: TempActionProps): JSX.Element | null => {
  return props.isSignedIn ? (
    <>
      <Button
        testID={testIds.page.signin.cameraButton}
        onPress={() => {
          props.navigation.navigate(routes.Camera);
        }}
        title={strings.camera}
        accessibilityLabel={strings.camera}
      />
      <Touchable
        testID={testIds.page.signin.googleSignOutButton}
        onPress={props.googleSignOut}>
        <Text>Google sign out</Text>
      </Touchable>
    </>
  ) : null;
};
