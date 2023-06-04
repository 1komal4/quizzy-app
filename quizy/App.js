import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Screens
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="quiz" component={Quiz} />
        <Stack.Screen name="result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;