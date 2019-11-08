import React, { Component } from 'react';

import { View, Image, StyleSheet } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  imgs: {
    height: 40,
    width: 40
  }
})

export default class pages extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
      <Image source={require('./../img/list_icon.png')} style={styles.imgs} />
    )
  }
  render() {
    return (
      <View>
        
      </View>
    );
  }
}
