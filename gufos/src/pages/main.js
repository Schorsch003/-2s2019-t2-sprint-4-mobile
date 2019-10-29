import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    lista: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    itemLista: {
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 5,
        paddingVertical: 1,
    }
})


export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            eventos: [],

        }
    }

    componentDidMount() {
        this._carregarEventos();
    };

    _carregarEventos = async () => {
        await fetch('http://192.168.7.85:5000/api/eventos')
            .then(response => response.json())
            .then(data => this.setState({ eventos: data }))
            .catch(error => console.warn(error))
    };



    render() {
        return (
            <FlatList
                style={styles.lista}
                data={this.state.eventos}
                keyExtractor={item => item.idEvento}
                renderItem={({ item }) => (
                    <View style={styles.lista}>
                        <Text style={styles.itemLista}>Titulo: {item.titulo}</Text>
                        <Text style={styles.itemLista}>Descrição: {item.descricao}</Text>
                        <Text style={styles.itemLista}>Data do Evento: {item.dataEvento}</Text>
                        <Text style={styles.itemLista}>Localização: {item.localizacao}</Text>
                        <Text style={styles.itemLista}>Categoria: {item.idCategoriaNavigation.nome}</Text>
                    </View>
                )}
            />
        );
    }



}