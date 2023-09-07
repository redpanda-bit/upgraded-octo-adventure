import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import translate from 'src/locales';
import {Button, Text, Touchable} from 'src/components/common';
import routes from 'src/routes';
import testIds from 'src/test-ids';

import type {RootStackParamList} from 'src/types';

type Props = NativeStackScreenProps<RootStackParamList, routes.Home> & {
  isSignedIn: boolean;
  googleSignOut: () => void;
};

export const TempActions = (props: Props): JSX.Element | null => {
  return props.isSignedIn ? (
    <>
      <Button
        testID={testIds.page.signin.cameraButton}
        onPress={() => {
          props.navigation.navigate(routes.Camera);
        }}
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
