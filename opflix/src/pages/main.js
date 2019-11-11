import React, { Component } from 'react';

import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import Lista from './../components/lancamentosFlatList'

// import { Container } from './styles';

const styles = StyleSheet.create({
  imgs: {
    height: 50,
    width: 50
  },
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





mocked = [
  {
    titulo: 'It: a coisínea',
    dataLancamento: '2019-01-01T00:00:0000',
    idGenero: 1,
    idGeneroNavigation: {
      idGenero: 1,
      nome: 'Terror'
    },
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
]

export default class pages extends Component {


  constructor() {
    super();
    this.state = {
      listaRecentes: [],
      listaGeneros: [],
      listaAcao: [],
      listaTerror: [],
      listaFiccao: [],
      listaAventura: []

    }
  }


  _recuperarLancamentosRecentes = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/recentes', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(x => x.json())
      .then(x => this.setState({ listaRecentes: x }))
    // .catch(error => console.warn(error))
  }


  _recuperarLancamentosAcao = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/1')
      .then(x => x.json())
      .then(x => this.setState({ listaAcao: x }))
    // .catch(error => console.warn(error))
  }

  _recuperarLancamentosTerror = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/3')
      .then(x => x.json())
      .then(x => this.setState({ listaTerror: x }))
    // .catch(error => console.warn(error))
  }

  _recuperarLancamentosFiccao = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/4')
      .then(x => x.json())
      .then(x => this.setState({ listaFiccao: x }))
    // .catch(error => console.warn(error))
  }

  _recuperarLancamentosAnimacao = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/5')
      .then(x => x.json())
      .then(x => this.setState({ listaAnimacao: x }))
    // .catch(error => console.warn(error))
  }
  _recuperarLancamentosAventura = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/6')
      .then(x => x.json())
      .then(x => this.setState({ listaAventura: x }))
    // .catch(error => console.warn(error))
  }

  _recuperarCategorias = async () => {
    await fetch('http://192.168.4.16:5000/api/categorias')
      .then(x => x.json())
      .then(x => this.setState({ listaGeneros: x }))
    // .catch(error => console.warn(error))
  }




  componentDidMount() {
    this._recuperarLancamentosRecentes();
    this._recuperarCategorias();
    this._recuperarLancamentosAcao();
    this._recuperarLancamentosTerror();
    this._recuperarLancamentosFiccao();
    this._recuperarLancamentosAnimacao();
    this._recuperarLancamentosAventura();
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Image source={require('./../img/list_icon.png')} style={styles.imgs} />
    )
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>Mais recentes</Text>
          <FlatList
            data={this.state.listaRecentes}
            style={styles.lista}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                <Image source={{ uri: item.imagem }} style={styles.img} />
              </TouchableOpacity>
            )
            } />
          <Text style={styles.title}>Ação</Text>
          <FlatList
            data={this.state.listaAcao}
            style={styles.lista}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                <Image source={{ uri: item.imagem }} style={styles.img} />
              </TouchableOpacity>
            )
            } />
          <Text style={styles.title}>Terror</Text>
          <FlatList
            data={this.state.listaTerror}
            style={styles.lista}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                <Image source={{ uri: item.imagem }} style={styles.img} />
              </TouchableOpacity>
            )
            } />
          <Text style={styles.title}>Ficção Científica</Text>
          <FlatList
            data={this.state.listaFiccao}
            style={styles.lista}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                <Image source={{ uri: item.imagem }} style={styles.img} />
              </TouchableOpacity>
            )
            } />
          <Text style={styles.title}>Animação</Text>
          <FlatList
            data={this.state.listaAnimacao}
            style={styles.lista}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                <Image source={{ uri: item.imagem }} style={styles.img} />
              </TouchableOpacity>
            )
            } />
          <Text style={styles.title}>Aventura</Text>
          <FlatList
            data={this.state.listaAventura}
            style={styles.lista}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                <Image source={{ uri: item.imagem }} style={styles.img} />
              </TouchableOpacity>
            )
            } />
        </ScrollView>
      </View>
    );
  }
}
