import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Main from './pages/main'
import User from './pages/user'

const Auth = createStackNavigator({
    SignIn: {
        screen: SignIn
    },
    Cadastro: {
        screen: SignUp
    }
})

const Navigator = createBottomTabNavigator({
    Main: {
        screen: Main
    },
    User: {
        screen: User
    }
})

export default createAppContainer(
    createSwitchNavigator(
        {
            Auth, Navigator
        }, {
        initialRouteName: 'Auth'
    }
    )

);