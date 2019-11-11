import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Main from './pages/main'
import User from './pages/user'
import Selected from './pages/lancamentoSelecionado'

import React from 'react'
import { Image } from 'react-native'

const Auth = createStackNavigator({
    Login: {
        screen: SignIn
    },
    Cadastro: {
        screen: SignUp
    }
})

const MainStack = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null,
        }
    }
})


const SelectedStack = createStackNavigator(
    {
        Selected: {
            screen: Selected,
            navigationOptions: {
                header: null
            }
        }
    }
)


const Navigator = createBottomTabNavigator({
    Main: {
        screen: MainStack,
        navigationOptions: {
            tabBarIcon: () => (
                <Image source={require('./img/list_icon.png')} style={{ height: 50, width: 50 }} />
            )
        }
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

export default createAppContainer(
    createSwitchNavigator(
        {
            Auth, Navigator, SelectedStack, MainStack
        }, {
        initialRouteName: 'Navigator'
    }
    )

);