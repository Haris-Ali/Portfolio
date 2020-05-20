import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Linking, Image, ScrollView } from 'react-native';


import { AntDesign } from '@expo/vector-icons';


export default function Portfolio() {
    return (
        <ImageBackground style={styles.container} source={require('../assets/background.jpg')}>
            <ScrollView style={styles.projectScroll}>
                <View style={{paddingLeft: 100, flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#88bef5', width: 20, height: 5}}></View>
                    <View style={{backgroundColor: '#086972', width: 20, height: 5}}></View>
                    <View style={{backgroundColor: '#17b978', width: 20, height: 5}}></View>
                    <View style={{backgroundColor: '#3b5441', width: 20, height: 5}}></View>
                </View>
                <Text style={{...styles.text, fontSize: 40, paddingBottom: 20}}>Portfolio</Text>
                <View style={styles.projectCont}>
                    <Image style={styles.projectImages} source={require('../assets/project1.jpg')}/>
                    <View style={{flexDirection: 'row'}}>
                        <AntDesign 
                            style={styles.githubIcon}
                            name="github" 
                            size={24} 
                            color="white"
                            onPress={() => Linking.openURL('https://github.com/Haris-Ali/ReactNativeProject')}
                        />
                        <Text style={styles.text}>Todo App</Text>
                    </View>
                </View>
                <View style={styles.projectCont}>
                    <Image style={styles.projectImages} source={require('../assets/project2.jpg')}/>
                    <View style={{flexDirection: 'row'}}>
                        <AntDesign 
                            style={styles.githubIcon}
                            name="github" 
                            size={24} 
                            color="white"
                            onPress={() => Linking.openURL('https://github.com/Haris-Ali/ReactNativeQuizApp')}
                        />
                        <Text style={styles.text}>Quiz App</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    projectScroll: {
        width: '80%',
        paddingTop: 20
    },

    projectCont: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(23,19,19,0.3)',
    },

    projectImages: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },

    text: {
        fontFamily: 'serif',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
    },

    githubIcon: {
        alignSelf: 'center',
        paddingRight: 10
    }
})