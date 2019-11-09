import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Main from './pages/main'
import User from './pages/user'
import Selected from './pages/lancamentoSelecionado'

const Auth = createStackNavigator({
    Login: {
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
}, {
    tabBarOptions: {
        activeBackgroundColor: '#FF5454',
        inactiveBackgroundColor: '#FF0000',
        activeTintColor: '#fff',
        inactiveTintColor: '#ddd',
        showLabel: false,
        showIcon: true,
        labelStyle: {
            fontSize: 20,
        },
        style: {
            width: '100%',
            height: 60
        }
    },
}
)

const SelectedStack = createStackNavigator({
    Selected: {
        screen: Selected
    }
})

export default createAppContainer(
    createSwitchNavigator(
        {
            Auth, Navigator, SelectedStack
        }, {
        initialRouteName: 'Navigator'
    }
    )

);