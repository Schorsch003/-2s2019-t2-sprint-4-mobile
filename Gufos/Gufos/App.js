/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image

} from 'react-native';
const App = () => {
    let teste = '';
    const img = 'https://cdn.betterttv.net/emote/5ba53bab8a8548129c5e1325/3x' 
     return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       <View style={styles.tudo}>
         <View>
           <Text style={styles.amareloEAzul}>Hello World</Text>
         </View>
         <View style={styles.viewMargin}>
           <TextInput placeholderTextColor='#000' placeholder="Placeholder" style={styles.inputTexto} onChangeText={(valor) => teste = valor}/>
           <Button title='Teste' onPress={() => alert(teste)}/>
         </View>

         <View style={styles.viewMargin}>
            <Image source={{uri:img}} style={styles.imagem}/>
         </View>
       </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({

  tudo:{
    backgroundColor:'#fafafa'
  },

  amareloEAzul:{
    color:'#ffff00',
    backgroundColor:'#0008ff',
    fontSize:24
  },

  inputTexto: {
    borderColor:'#000',
    borderWidth: 1,
    marginBottom:15,
    marginHorizontal:5
  },

  

  viewMargin:{
    marginTop:30,
    marginBottom:30,
  },

  imagem:{
    width:400,
    height:400
  }
});

export default App;
