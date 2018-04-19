import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

const Screens = StackNavigator(
   {
       Home: {
           screen: HomeScreen,
       },
       Result: {
           screen: ResultScreen
       }
   },
   {
       initialRouteName: 'Home',
   }
);

export default Screens;