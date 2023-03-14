// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import testIds from 'src/test-ids';
import {signin as strings} from 'src/locales';

import {View, Text, TextInput, Button} from './src/components/common';

export function HomeScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <Text testID={testIds.page.signin.usernameLabel}>{strings.username}</Text>
      <TextInput
        testID={testIds.page.signin.usernameInput}
        value={username}
        onChangeText={setUsername}
      />
      <Text testID={testIds.page.signin.passwordLabel}>{strings.password}</Text>
      <TextInput
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
