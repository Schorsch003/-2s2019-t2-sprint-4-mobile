import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/signin'
import SignUp from './pages/signup'

const Auth = createStackNavigator({
    SignIn: {
        screen: SignIn
    },
    Cadastro: {
        screen: SignUp
    }
})

// const Navigator = createBottomTabNavigator({
//     Main: {

//     },
//     User: {

//     }
// })

export default createAppContainer(
    Auth
);