import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

// import { Container } from './styles';

mocked = [
    {
        idLancamento: 1,
        titulo: 'It: a coisínea',
        dataLancamento: '2019-01-01T00:00:0000',
        idGenero: 1,
        idGeneroNavigation: {
            idGenero: 1,
            nome: 'Terror'
        },
        imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg',
        duracao: 120,
        idTipo: 1,
        idTipoNavigation: {
            idTipo: 1,
            nome: 'Filme'
        },
        sinopse: '  A pacata rotina da cidade é abalada quando crianças começam a desaparecer e tudo o que pode ser encontrado delas são partes de seus corpos. Logo, os integrantes do "Losers Club" acabam ficando face a face com o responsável pelos crimes: o palhaço Pennywise.',

    }
]

export default class pages extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            buttonStyle: {

            },
            backgroundColor: '',
        }
    }

    _favoritar = () => {
        if (this.state.backgroundColor !== 'red') {
            this.setState({ backgroundColor: 'red' })
        } else {
            this.setState({ backgroundColor: 'black' })
        }
    }

    _tratarData = (data) => {
        let dataRetirada = data.split('T')[0]
        let valores = dataRetirada.split('-')
        return valores[2] + '/' + valores[1] + '/' + valores[0]
    }

    _irParaMain = () => {
        this.props.navigation.navigate('MenuPrincipal')
    }

    render() {
        return (
            <View style={{ height: '100%' }}>
                <View style={{ height: '35%' }}>
                    <Image source={{ uri: mocked[0].imagem }} style={{ height: '100%', width: '100%', position: 'absolute' }} />
                    <TouchableOpacity onPress={() => this._irParaMain}>
                        <Image source={require('./../img/back_arrow.png')} style={{
                            position: 'relative',
                            top: 15,
                            left: 15,
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 40,
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>{mocked[0].titulo}</Text>
                    <TouchableOpacity onPress={() => this._favoritar()}>
                        <Image source={require('./../img/heart.png')} style={{
                            height: 50,
                            width: 50,
                            marginRight: 30,
                            tintColor: this.state.backgroundColor,
                        }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Lançamento: </Text>
                        <Text>{this._tratarData(mocked[0].dataLancamento)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Gênero: </Text>
                        <Text>{mocked[0].idGeneroNavigation.nome}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Duracao: </Text>
                        <Text>{mocked[0].duracao} {(mocked[0].idTipoNavigation.nome === 'Filme') ? 'min' : 'eps'}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Sinopse</Text>
                        <Text style={{ fontSize: 18, marginLeft: 15, marginRight: 15 }}>{mocked[0].sinopse}</Text>
                    </View >
                </View>
            </View >
        );
    }
}
