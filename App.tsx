// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import testIds from 'src/test-ids';
import {signin as strings} from 'src/locales';
import {View, Text, InputWithLabel, Button} from 'src/components/common';
import routes from 'src/routes';

export function HomeScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
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
    </>
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
      <Stack.Navigator initialRouteName={routes.Home}>
        <Stack.Screen name={routes.Home} component={HomeScreen} />
        <Stack.Screen name={routes.Details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
