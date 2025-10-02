import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createStackNavigator(); // Stack initialize

export default function App() {

  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Splash'>

        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

