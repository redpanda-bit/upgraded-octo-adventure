import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HeaderBackButton,
  HeaderBackButtonProps,
} from '@react-navigation/elements';
import {View, Text} from 'src/components/common';
import routes, {HomeScreen, CameraScreen} from 'src/routes';
import testIds from 'src/test-ids';
import translate from 'src/locales';

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
        <Stack.Screen
          name={routes.Home}
          component={HomeScreen}
          options={{title: translate('common.home')}}
        />
        <Stack.Screen
          name={routes.Details}
          component={DetailsScreen}
          options={{title: translate('common.details')}}
        />
        <Stack.Screen
          name={routes.Camera}
          component={CameraScreen}
          options={{
            title: translate('common.camera'),
            headerLeft: (props: HeaderBackButtonProps) => {
              const navigation = useNavigation();
              return (
                <HeaderBackButton
                  {...props}
                  testID={testIds.page.camera.backButton}
                  onPress={navigation.goBack}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
