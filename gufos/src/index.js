import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    navigator: {

    }
})

const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen
        },
        Profile: {
            screen: ProfileScreen
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor:'#ba70ff',
            inactiveBackgroundColor:'#aa4fff',
            activeTintColor: '#ddd',
            inactiveTintColor: '#eee',
            labelStyle: {
                fontSize: 30,
            }
        },
    }

);

export default createAppContainer(MainNavigator)