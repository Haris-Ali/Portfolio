import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CustomButton from '../customComponents/CustomButton'

export default function Home({ navigation }) {
    const changeScreen = () => {
        navigation.navigate('Portfolio')
    }

    return (
        <ImageBackground style={styles.container} source={require('../assets/background.jpg')}>
          <View style={styles.textCont}>
              <View style={{paddingRight: 180, flexDirection: 'row'}}>
                <View style={{backgroundColor: '#88bef5', width: 30, height: 5}}></View>
                <View style={{backgroundColor: '#086972', width: 30, height: 5}}></View>
                <View style={{backgroundColor: '#17b978', width: 30, height: 5}}></View>
                <View style={{backgroundColor: '#3b5441', width: 30, height: 5}}></View>
              </View>
              <Text style={{...styles.headings, fontSize: 50}}>I build amazing experiences</Text>
              <Text 
              style={{...styles.headings, fontSize: 17, paddingTop: 10}}>
              Full stack developer from Pakistan</Text>
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
