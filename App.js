import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MovieDetails from './screens/MovieDetails';
import Search from './components/Search';
import LikedMovies from './screens/LikedMovies';
import Welcome from './screens/Welcome';


export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="LikedMovies" component={LikedMovies} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  );
}
