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
        sinopse: '  A pacata rotina da cidade é abalada quando filhotes começam a desaparecer e tudo o que pode ser encontrado delas são partes de seus corpos. Logo, os integrantes do "Puppys Club" acabam ficando face a face com o responsável pelos crimes: o palhaço Doggywise.',
    }
]

export default class lancamentos extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            backgroundColor: '',
            titulo: '',
            dataLancamento: '',
            categoria: '',
            tipo: '',
            imagem: '',
            plataforma: '',
            sinopse: '',
            tempoDuracao: null,
        }
    }


    _recuperarLancamentoPorId = async (id) => {
        await fetch('http://192.168.4.16:5000/api/lancamentos/' + id)
            .then(x => x.json())
            .then(x => this.setState(
                {
                    titulo: x.titulo,
                    dataLancamento: x.dataLancamento,
                    categoria: x.idCategoriaNavigation.nome,
                    tipo: x.idTipoNavigation.nome,
                    imagem: x.imagem,
                    plataforma: x.plataformaNavigation.nome,
                    sinopse: x.sinopse,
                    tempoDuracao: x.tempoDuracao,
                })
            )
            .catch(error => console.log(error))
    }

    _sla = () => {
        const { navigation } = this.props;
        const a = navigation.getParam('id', null);
        this._recuperarLancamentoPorId(a)
    }


    componentDidMount() {
        this._sla()
    }

    _favoritar = () => {
        if (this.state.backgroundColor !== '#FF0000') {
            this.setState({ backgroundColor: '#FF0000' })
        } else {
            this.setState({ backgroundColor: '#CCCCCC' })
        }
    }

    _tratarData = (data) => {
        let dataRetirada = data.split('T')[0]
        let valores = dataRetirada.split('-')
        return valores[2] + '/' + valores[1] + '/' + valores[0]
    }


    render() {

        return (


            <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>

                <View style={{ height: '35%' }}>
                    <Image source={{ uri: this.state.imagem }} style={{ height: '100%', width: '100%', position: 'absolute'}} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                        <Image source={require('./../img/back_arrow.png')} style={{
                            position: 'relative',
                            top: 15,
                            left: 15,
                            borderWidth: 1,
                            borderRadius: 40,
                            tintColor: '#ccc'
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 15, width: '70%', color: '#ccc' }}>{this.state.titulo}</Text>
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
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: '#ccc' }}>Lançamento: </Text>
                        <Text style={{ color: '#ccc' }}>{this.state.dataLancamento}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: '#ccc' }}>Gênero: </Text>
                        <Text style={{ color: '#ccc' }}>{this.state.categoria}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: '#ccc' }}>Duracao: </Text>
                        <Text style={{ color: '#ccc' }}>{this.state.tempoDuracao} {(this.state.tipo === 'Filme') ? 'min' : 'eps'}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, color: '#ccc' }}>Sinopse</Text>
                        <Text style={{ fontSize: 18, marginLeft: 15, marginRight: 15, color: '#ccc' }}>{this.state.sinopse}</Text>
                    </View >
                </View>
            </View >
        );
    }
}
