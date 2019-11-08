import React, { Component } from 'react';

import { View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

const styles = StyleSheet.create({
  imgs: {
    height: 50,
    width: 50
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    marginTop: 20
  },
  texto: {
    marginVertical: 25,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    width: '75%',
    alignSelf: 'center',
    fontSize: 20,
  }
})

// import { Container } from './styles';

export default class pages extends Component {


  constructor() {
    super();
    this.state = {
      imagem: '',
      nome: 'Nome do usuario',
      email: 'Email',
      dataNascimento: '2019-01-01T00:00:0000'
    }
  }


  _tratarData = (data) => {
    let novaData = data.split('T')
    let isso = novaData[0].split('-');
    return isso[2] + '-' + isso[1] + '-' + isso[0]
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Image source={require('./../img/user_icon.png')} style={styles.imgs} />
    )
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{ width: '95%', marginTop: 15 }} onPress={() => console.log('atualizar')}>
          <Image source={require('./../img/edit_24px.png')} style={{ alignSelf: 'flex-end' }} />
        </TouchableOpacity>
        <Image source={this.state.imagem} style={styles.profilePic} />
        <View style={{ marginTop: 15 }}>
          <Text style={styles.texto}>{this.state.nome}</Text>
          <Text style={styles.texto}>{this.state.email}</Text>
          <Text style={styles.texto}>{this._tratarData(this.state.dataNascimento)}</Text>
        </View>
      </View>
    );
  }
}
