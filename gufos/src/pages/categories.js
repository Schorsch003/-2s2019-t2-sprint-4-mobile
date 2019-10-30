import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

// import { Container } from './styles';

const styles = StyleSheet.create({
    imgs: {
        height: 40,
        width: 40
    }
})

export default class pages extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
                <Image source={require('./../assets/img/category.jpg')} style={styles.imgs} />
        )
    }

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        this._recuperarListaCategorias();
    }

    _recuperarListaCategorias = async () => {
        await fetch('http://192.168.7.85:5000/api/categorias')
            .then(x => x.json())
            .then(x => this.setState({ lista: x }))
            .catch(erro => console.warn(erro))
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.lista}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.nome}</Text>
                        </View>
                    )}
                />

            </View>);
    }
}
