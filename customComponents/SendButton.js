import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SendButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.buttonCont}>
                <Text style={styles.buttonText}>Send now!</Text>
                <View>
                    <Feather name="send" size={16} color="white"/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonCont: {
        flexDirection: 'row',
        width: 150,
        marginTop: 10,
        padding: 15,
        backgroundColor: 'cornflowerblue',
        justifyContent: 'space-between'
    }, 

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'serif',
    }, 
})

export default SendButton;