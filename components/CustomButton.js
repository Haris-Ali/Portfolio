import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const CustomButton = ({ onPressEvent }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPressEvent}>
            <View style={styles.buttonCont}>
                <Text style={styles.buttonText}>See my work</Text>
                <View>
                    <Entypo name="eye" size={24} color="white"/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonCont: {
        flexDirection: 'row',
        width: '62%',
        alignSelf: 'center',
        padding: 15,
        backgroundColor: 'cornflowerblue',
        justifyContent: 'space-between'
    }, 

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'serif',
    }, 

    buttonIcon: {
        
    }
})

export default CustomButton;