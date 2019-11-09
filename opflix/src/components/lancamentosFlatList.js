import React, { Component } from 'react';

import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 100,
        marginHorizontal: 20
    },
    lista: {
        marginVertical: 15,
    },
    title: {
        fontSize: 17,
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        marginBottom: 15,
        width: '60%',
        marginLeft: 10,
    }
})




export default class components extends Component {

    constructor(props) {
        super(props);

    }


    _irParaSelected = (id) => {
        this.props.navigation.navigate('selectedTitle', { idLancamento: id })
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>{this.props.titulo}</Text>
                <FlatList
                    data={this.props.data}
                    style={styles.lista}
                    horizontal={true}
                    renderItem={({ item }) => (
                        // <TouchableOpacity onPress={() => console.warn(item.titulo)}>
                        <TouchableOpacity onPress={() => this._irParaSelected(1)} >
                            <Image source={{ uri: item.imagem }} style={styles.img} />
                        </TouchableOpacity>
                    )
                    } />
            </View>

        );
    }
}
