import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';


import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Skills({ navigation }) {
    const toggleDrawer = () => {
        navigation.openDrawer()
    }
    
    return (
        <ImageBackground style={styles.container} source={require('../assets/background.jpg')}>
            <View style={styles.headerCont}>
                <Text style={styles.headerText}>HA</Text>
                <Octicons 
                    name="three-bars" 
                    size={32} 
                    color="white" 
                    style={{marginRight: 20}} 
                    onPress={toggleDrawer}
                />
            </View>
            <View style={{paddingRight: 55, flexDirection: 'row', paddingTop: 25}}>
                <View style={{backgroundColor: '#88bef5', width: 20, height: 5}}></View>
                <View style={{backgroundColor: '#086972', width: 20, height: 5}}></View>
                <View style={{backgroundColor: '#17b978', width: 20, height: 5}}></View>
                <View style={{backgroundColor: '#3b5441', width: 20, height: 5}}></View>
            </View>
            <View>
                <Text style={styles.skillsHeading}>My Skills</Text>
            </View>
            <ScrollView style={styles.cont}>
                <View style={styles.skillsCont}>
                    <Entypo name="browser" size={80} color="white"/>
                    <View style={styles.textCont}>
                        <Text style={styles.skillsText}>HTML5</Text>
                        <Text style={styles.skillsText}>CSS3</Text>
                        <Text style={styles.skillsText}>Javascript</Text>
                    </View>
                </View>
                <View style={styles.skillsCont}>
                    <Entypo name="code" size={80} color="white"/>
                    <View style={styles.textCont}>
                        <Text style={styles.skillsText}>PHP</Text>
                        <Text style={styles.skillsText}>Laravel</Text>
                        <Text style={styles.skillsText}>Node</Text>
                    </View>
                </View>
                <View style={styles.skillsCont}>
                    <Entypo name="database" size={80} color="white"/>
                    <View style={styles.textCont}>
                        <Text style={styles.skillsText}>SQL</Text>
                        <Text style={styles.skillsText}>Firebase</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    headerCont: {
        paddingTop: 50,
        flexDirection: 'row',
        alignSelf: 'stretch',
        height: 100,
        justifyContent: 'space-between'
    }, 

    headerText: {
        color: 'white',
        fontSize: 32,
        fontFamily: 'serif',
        paddingLeft: 36,
        letterSpacing: 3
    }, 


    skillsHeading: {
        fontSize: 40,
        fontFamily: 'serif',
        textAlign: 'center',
        color: 'white'
    }, 

    cont: {
        width: '80%',
        paddingTop: 20
    }, 

    skillsCont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(23,19,19,0.3)',
        padding: 10,
        height: 150,
        alignItems: 'center'
    }, 

    textCont: {
        borderColor: '#17b978',
        borderWidth: 2,
        borderRadius: 50,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    skillsText: {
        fontFamily: 'serif',
        fontSize: 16,
        color: 'white',
        padding: 2
    }
})