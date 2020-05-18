import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CustomButton from './CustomButton'

export default function HomeScreen() {
    const changeScreen = () => {
        console.log('Screen Changed')
    }

    return (
        <ImageBackground style={styles.container} source={require('../assets/background.jpg')}>
        <View style={styles.textCont} >
            <Text style={{...styles.headings, fontSize: 50}}>I build amazing experiences</Text>
            <Text 
            style={{...styles.headings, fontSize: 20, paddingTop: 10}}>
            UI/UX designer from Pakistan</Text>
            <View style={{paddingTop: 200}}>
                <CustomButton 
                    onPressEvent={changeScreen}
                />
            </View>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  textCont: {
    flex: 1,
    paddingTop: 80,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(23,19,19,0.3)',
    alignItems: 'center',
  },

  headings: {
    color: 'white', 
    textAlign: 'center',
    fontFamily: 'serif'
  }
});
