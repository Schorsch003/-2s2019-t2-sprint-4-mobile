import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import SignInScreen from './pages/signin'
import CategoriesScreen from './pages/categories'
import { AsyncStorage } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


const AuthStack = createStackNavigator({
    Sign: { screen: SignInScreen }
})

const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen,
        },
        Profile: {
            screen: ProfileScreen
        },
        Categorias: {
            screen: CategoriesScreen
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#aa4fff',
            inactiveBackgroundColor: '#ba70ff',
            activeTintColor: '#ddd',
            inactiveTintColor: '#eee',
            showLabel: false,
            showIcon: true,
            labelStyle: {
                fontSize: 30,
            },
            style: {
                width: '100%',
                height: 60
            }
        },
    }

);

const isLoginValid = async () => {
    let jwtDecode = require('jwt-decode')
    let token = await AsyncStorage.getItem('@gufos:token');
    let decoded = jwtDecode(token);
    console.warn(decoded)
    if (decoded !== null && decoded.exp * 1000 <= Date.now()) {
        return true
    } else {
        return false
    }

}

export default createAppContainer(
    createSwitchNavigator({
        MainNavigator, AuthStack
    }, {
        initialRouteName: (AsyncStorage.getItem('@gufos:token') !== null && isLoginValid ) ? 'MainNavigator' : 'AuthStack',
        // initialRouteName: 'AuthStack'
    })
);