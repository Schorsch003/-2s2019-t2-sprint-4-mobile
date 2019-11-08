import React, { Component } from 'react';

import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import Lista from './../components/lancamentosFlatList'

// import { Container } from './styles';

const styles = StyleSheet.create({
  imgs: {
    height: 50,
    width: 50
  },
})

mocked = [
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
  {
    img: 'https://www.ahnegao.com.br/wp-content/uploads/2017/10/img-1-3.jpg'
  },
]

export default class pages extends Component {


  constructor() {
    super();
    this.state = {
      listaRecentes: [],
      listaGeneros: [],
      listaAcao: []

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
      .catch(error => console.warn(error))
  }


  _recuperarLancamentosAcao = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/1')
      .then(x => x.json())
      .then(x => this.setState({ listaAcao: x }))
      .catch(error => console.warn(error))
  }

  _recuperarCategorias = async () => {
    await fetch('http://192.168.4.16:5000/api/categorias')
      .then(x => x.json())
      .then(x => this.setState({ listaGeneros: x }))
      .catch(error => console.warn(error))
  }




  componentDidMount() {
    this._recuperarLancamentosRecentes();
    this._recuperarCategorias();
    this._recuperarLancamentosAcao()
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
          <Lista titulo='Mais recentes' data={this.state.listaRecentes} />
          <Lista titulo='Ação' data={this.state.listaAcao} />


        </ScrollView>
      </View>
    );
  }
}
