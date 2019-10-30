import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage } from 'react-native'

const styles = StyleSheet.create({
    nome: {
        fontSize: 20,
        alignSelf: 'center',
    },
    flexRow: {
        flexDirection: "row"
    },
    imgs: {
        height: 40,
        width: 40
    }
});


export default class Profile extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image source={require('./../assets/img/userIcon.png')} style={styles.imgs} />
        )
    }

    constructor() {
        super();
        this.state = {
            token: null,
            emailUser: null,
            exp: null
        }
    }


    componentDidMount() {
        this._buscarDadosDoStorage();
        this._recuperarEmailToken();
        this._recuperarEmailToken();
    }

    _buscarDadosDoStorage = async () => {
        try {
            const tokenStorage = await AsyncStorage.getItem('@gufos:token');
            if (tokenStorage !== null) {
                this.setState({ token: tokenStorage });
            }
        } catch (error) {
            console.warn(error);
        }
    }

    _recuperarEmailToken = async () => {
        let jwtDecode = require('jwt-decode')
        let token = await AsyncStorage.getItem('@gufos:token');
        let decoded = jwtDecode(token);
        console.warn(decoded)
        if (decoded !== null) {
            this.setState({ emailUser: decoded.email })
        }

    }

    render() {

        // console.warn(AsyncStorage.getItem('@gufos:token') !== null && this.state.exp * 1000 > Date.now())
        return (
            <View >
                <Text>Profile</Text>
                <View style={styles.flexRow}>
                    <Image style={{ width: 80, height: 80 }} source={{ uri: 'https://static-s.aa-cdn.net/img/gp/20600010880974/jZfvyLKHS0VAtzT96SnNvVnHRqxDHnILZOFfMKaEtnsDm1Dy6xuGNSWapSonsAuW5d06=s300?v=1' }} />
                    <Text style={styles.nome}>Gabriel Schorsch Amadeu</Text>
                </View>
                <Text>{this.state.emailUser}</Text>
                {/* <Text>{this.state.exp}</Text> */}
            </View>
        );
    }
}