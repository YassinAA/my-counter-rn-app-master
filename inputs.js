import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    state = {
        email: '',
        password: '',
        nom:''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    handleNom = (text) => {
        this.setState({ nom: text })
    }
    login = (email, pass,nom) => {
        alert('email: ' + email + ' password: ' + pass + ' Bienvenu à toi : ' + nom + '  :) ')
    }
    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Email"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleEmail}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Password"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Nom"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleNom}/>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.password, this.state.nom)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})