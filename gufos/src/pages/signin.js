import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

export default class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            email: 'admin@admin.com',
            senha: '123456'
        };
    }

    

    _irParaHome = async (token) => {
        if (token !== null) {
            try {
                await AsyncStorage.setItem('@gufos:token', token);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {

            }
        }
    }

    _realizarLogin = async () => {
        // console.warn(this.state.email + this.state.senha)
        await fetch('http://192.168.7.85:5000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            })
        })
            .then(response => response.json())
            //sharedpreference
            .then(data => this._irParaHome(data.token))
            .catch(error => console.warn(error))
    }


    render() {

        return (
            <View>
                <TextInput placeholder='Email' onChangeText={(email => this.setState({ email: email }))} />
                <TextInput secureTextEntry={true} placeholder='Senha' onChangeText={(senha => this.setState({ senha: senha }))} />
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
