import React, { Component } from 'react';

import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';

import DatePicker from 'react-native-datepicker'

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 80,
  },
  input: {
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    color: 'rgba(0,0,0,0.26)',
    fontSize: 20,
    marginVertical: 2,

  },
  form: {
    marginTop: 50
  },
  button: {
    fontSize: 30,
    color: '#fff',
    backgroundColor: 'red',
    width: '40%',
    alignSelf: 'center',
    borderRadius: 50,
    textAlign: 'center',
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    marginTop: 40,
  },
  date: {
    alignSelf: 'center',
    width: '80%',
    borderWidth: 0,
    borderColor: '#fff',
    textAlign: 'center',
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    color: 'rgba(0,0,0,0.26)',
    fontSize: 20,
    marginVertical: 2,
  }

})

export default class SignUp extends Component {

  static navigationOptions = {
    header: null
  }


  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      nome: '',
      dataNascimento: '',

    }
  }

  _irParaLogin = () => {
    this.props.navigation.navigate('Login')
  }

  _tratarData = (data) => {
    let val = data.split('-')
    return val[2] + '-' + val[1] + '-' + val[0] + 'T:00:00:0000'
  }

  _realizarCadastro = async () => {

    let dataTratada = this._tratarData(this.state.dataNascimento)


    // await fetch('http://192.168.1.108:5000/api/cadastro', {
    await fetch('http://192.168.4.16:5000/api/cadastro', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha,
        dataNascimento: dataTratada
      })
    })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <View >
        <Image source={require('./../img/Logo.png')} style={styles.logo} />
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder='Nome' onChangeText={x => this.setState({ nome: x })} />
          <TextInput style={styles.input} placeholder='Email' onChangeText={x => this.setState({ email: x })} />
          <TextInput secureTextEntry style={styles.input} placeholder='Senha' onChangeText={x => this.setState({ senha: x })} />
          <DatePicker
            mode="date" //The enum of date, datetime and time
            placeholder={this.state.dataNascimento}
            format="DD-MM-YYYY"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            style={styles.date}
            onDateChange={(date) => { this.setState({ dataNascimento: date }) }}
            customStyles={{
              dateInput: {
                borderWidth: 0,
                textAlign: 'center',
                borderBottomColor: '#707070',
              },

              placeholderText: {
                color: 'rgba(0,0,0,0.26)',
                fontSize: 20,
              },
              dateIcon: {
                height: 0,
                width: 0
              },


            }}
          />
        </View>
        <TouchableOpacity onPress={this._irParaLogin}>
          <Text style={styles.button}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
