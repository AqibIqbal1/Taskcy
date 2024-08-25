import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import OnBoard1 from './src/screens/onboard1';
import GetStarted from './src/screens/getstarted';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="onboard1"
          options={{headerShown: false}}
          component={OnBoard1}
        />
        <Stack.Screen
          name="getstarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
