import React, { Component } from 'react';

import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
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
  titleLight: {
    color: '#000',
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
      listaAventura: [],
      loading: 0,
      timeout: 0

    }
  }


  _recuperarLancamentosRecentes = async () => {
    this._loadingStart();
    await fetch('http://192.168.4.16:5000/api/lancamentos/recentes', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(x => x.json())
      .then(x => this.setState({ listaRecentes: x }))
      .then(this._recuperarLancamentosAcao())
    // .catch(error => console.warn(error))
  }

  _loadingStart = () => {
    this.setState({ loading: 1 })
  }

  _loadingEnd = () => {
    this.setState({ loading: 0 })

  }

  _recuperarLancamentosAcao = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/1')
      .then(x => x.json())
      .then(x => this.setState({ listaAcao: x }))
      .then(this._recuperarLancamentosTerror())
    // .catch(error => console.warn(error))
  }

  _recuperarLancamentosTerror = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/3')
      .then(x => x.json())
      .then(x => this.setState({ listaTerror: x }))
      .then(this._recuperarLancamentosFiccao())

    // .catch(error => console.warn(error))
  }

  _recuperarLancamentosFiccao = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/4')
      .then(x => x.json())
      .then(x => this.setState({ listaFiccao: x }))
      .then(this._recuperarLancamentosAnimacao())

    // .catch(error => console.warn(error))
  }

  _recuperarLancamentosAnimacao = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/5')

      .then(x => x.json())
      .then(x => this.setState({ listaAnimacao: x }))
      .then(this._recuperarLancamentosAventura())

    // .catch(error => console.warn(error))
  }
  _recuperarLancamentosAventura = async () => {
    await fetch('http://192.168.4.16:5000/api/lancamentos/genero/6')
      .then(x => x.json())
      .then(x => {
        this.setState({ listaAventura: x })
        this._loadingEnd()
        setTimeout(this.setState({ timeout: 1 }), 5000)
      }

      )
    // .then(this._loadingEnd())

    // .catch(error => console.warn(error))
  }

  componentDidMount() {
    this._recuperarLancamentosRecentes();
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Image source={require('./../img/list_icon.png')} style={styles.imgs} />
    )
  }

  render() {
    return (
      <View>
        {(this.state.loading === 1) ?
          (<View style={{ height: '100%', justifyContent: 'center' }}>
            <ActivityIndicator size='large' style={{ alignSelf: 'center' }} />
          </View>

          )
          :
          (
            <View>
              <ScrollView>
                <Text style={styles.titleLight}>Mais recentes</Text>
                <FlatList
                  data={this.state.listaRecentes}
                  style={styles.lista}
                  horizontal={true}
                  keyExtractor={x => x.titulo}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                      <Image source={{ uri: item.imagem }} style={styles.img} />
                    </TouchableOpacity>
                  )
                  } />
                <Text style={styles.titleLight}>Ação</Text>
                <FlatList
                  data={this.state.listaAcao}
                  style={styles.lista}
                  horizontal={true}
                  keyExtractor={x => x.titulo}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                      <Image source={{ uri: item.imagem }} style={styles.img} />
                    </TouchableOpacity>
                  )
                  } />
                <Text style={styles.titleLight}>Terror</Text>
                <FlatList
                  data={this.state.listaTerror}
                  style={styles.lista}
                  horizontal={true}
                  keyExtractor={x => x.titulo}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                      <Image source={{ uri: item.imagem }} style={styles.img} />
                    </TouchableOpacity>
                  )
                  } />
                <Text style={styles.titleLight}>Ficção Científica</Text>
                <FlatList
                  data={this.state.listaFiccao}
                  style={styles.lista}
                  horizontal={true}
                  keyExtractor={x => x.titulo}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                      <Image source={{ uri: item.imagem }} style={styles.img} />
                    </TouchableOpacity>
                  )
                  } />
                <Text style={styles.titleLight}>Animação</Text>
                <FlatList
                  data={this.state.listaAnimacao}
                  style={styles.lista}
                  horizontal={true}
                  keyExtractor={x => x.titulo}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                      <Image source={{ uri: item.imagem }} style={styles.img} />
                    </TouchableOpacity>
                  )
                  } />
                <Text style={styles.titleLight}>Aventura</Text>
                <FlatList
                  data={this.state.listaAventura}
                  style={styles.lista}
                  horizontal={true}
                  keyExtractor={x => x.titulo}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Selected', { "id": item.idLancamento }) }} >
                      <Image source={{ uri: item.imagem }} style={styles.img} />
                    </TouchableOpacity>
                  )
                  } />
              </ScrollView>
            </View>
          )}

      </View>
    );
  }
}
