import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    nome:{
        fontSize:30,
        alignSelf:'center'
    }
});


export default class Profile extends Component {
    render() {
        return (
            <View>
                <Text>Profile</Text>
                <Text style={styles.nome}>Gabriel Schorsch Amadeu</Text>
            </View>
        );
    }
}