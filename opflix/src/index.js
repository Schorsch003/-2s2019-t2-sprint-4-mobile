import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Main from './pages/main'
import User from './pages/user'
import Selected from './pages/lancamentoSelecionado'

import React from 'react'
import { Image, AsyncStorage } from 'react-native'

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


const SelectedStack = createStackNavigator({
    Selected: {
        screen: Selected,
        navigationOptions: {
            header: null
        }
    }
})

const _validarToken = () => {
    let user = _userLogado();
    if (user === null)
        return false
    return true
}


_userLogado = async () => {
    let jwtDecode = require('jwt-decode');
    let token = await AsyncStorage.getItem('@opflix:token')
    let values = jwtDecode(token);
    return values;
}

const UserStack = createStackNavigator({
    User: {
        screen: User
    }
})



const Navigator = createBottomTabNavigator({
    Main: {
        screen: MainStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./img/list_icon.png')} style={{ height: 50, width: 50 }} tintColor={tintColor} />
            )
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            // tabBarIcon: ({tintColor}) => <Image source={require('./img/user_icon.png')} color={tintColor} />
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./img/user_icon.png')} style={{ height: 50, width: 50 }} tintColor={tintColor} />

            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#ff0000',
        inactiveTintColor: '#ddd',
        activeBackgroundColor: '#444444',
        inactiveBackgroundColor: '#000000',
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
})


export default createAppContainer(
    createSwitchNavigator(
        {
            Auth, Navigator, SelectedStack, MainStack, UserStack
        }, {
        initialRouteName: (_validarToken()) ? 'Navigator' : 'Auth'
        // initialRouteName: 'SelectedStack'
    }
    )

);