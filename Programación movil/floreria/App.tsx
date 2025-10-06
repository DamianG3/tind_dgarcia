import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import Post from './screens/Post';

const Stack = createStackNavigator(); // Stack initialize

export default function App() {
  
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Splash'
        screenOptions={{
          headerStyle:{backgroundColor: '#662222'}, 
          headerTitleStyle:{color:'white', fontSize:20},
          // headerBackTitleStyle: { color: "white" },
          headerTintColor: "white"
          
        }}>

        <Stack.Screen name="Splash" component={Splash}
        options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}
        options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home}
        options={{title: "Para ti"}}/>
        <Stack.Screen name="Post" component={Post}
        options={{title: "Detalle del post"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

