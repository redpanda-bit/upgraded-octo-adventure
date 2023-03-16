// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useGoogleSignIn} from './src/hooks/googleSignin';
import {GoogleSigninButton, Touchable} from './src/components/common';
import testIds from './src/test-ids';

export function HomeScreen() {
  const {userInfo, googleSignIn, googleSignOut, isSigninInProgress} =
    useGoogleSignIn();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
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
    </View>
  );
}

export function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
