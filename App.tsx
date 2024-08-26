import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import GetStarted from './src/screens/getstarted';
import OnBoard1 from './src/screens/onboard1';
import OnBoard2 from './src/screens/onboard2';
import OnBoard3 from './src/screens/onboard3';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';

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
          name="getstarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="onboard1"
          options={{headerShown: false}}
          component={OnBoard1}
        />
        <Stack.Screen
          name="onboard2"
          options={{headerShown: false}}
          component={OnBoard2}
        />
        <Stack.Screen
          name="onboard3"
          options={{headerShown: false}}
          component={OnBoard3}
        />
        <Stack.Screen
          name="signin"
          options={{headerShown: false}}
          component={Signin}
        />
        <Stack.Screen
          name="signup"
          options={{headerShown: false}}
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
