import React, { Component } from 'react';

import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginTop: 80,
    },
    input: {
        alignSelf: 'center',
        width: '80%',
        textAlign: 'center',
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        color: 'rgba(0,0,0,0.26)',
        fontSize: 20,
        marginVertical: 10
    },
    form: {
        marginTop: 50
    },
    button: {
        fontSize: 30,
        color: '#fff',
        backgroundColor: 'red',
        width: '40%',
        alignSelf: 'center',
        borderRadius: 50,
        textAlign: 'center',
        borderColor: '#000',
        borderWidth: 1,
        height: 50,
        marginTop: 40,
    }
})

export default class SignIn extends Component {

    static navigationOptions = {
        header: null
    }


    constructor() {
        super();
        this.state = {
            email: '',
            senha: ''
        }
    }

    _irParaHome = async (token) => {
        if (token !== null) {
            try {
                await AsyncStorage.setItem('@opflix:token', token);
                this.props.navigation.navigate('Main')
            } catch (x) {
                console.warn('não tá nulo, mas tá dando erro');
            }
        } else {
            console.warn('tá nulo')
        }
    }

    _irParaCadastro = () => {
        this.props.navigation.navigate('Cadastro')
    }

    _realizarLogin = async () => {
        await fetch('http://192.168.4.16:5000/api/login', {
            // await fetch('http://192.168.1.108:5000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            })
        })
            .then(x => x.json())
            .then(x => this._irParaHome(x.token))
            .catch(error => console.warn(error))
    }


    render() {
        return (
            <View >
                <Image source={require('./../img/Logo.png')} style={styles.logo} />
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder='Email' onChangeText={x => this.setState({ email: x })} />
                    <TextInput secureTextEntry style={styles.input} placeholder='Senha' onChangeText={x => this.setState({ senha: x })} />
                </View>
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._irParaCadastro}>
                    <Text >Não possui login? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
