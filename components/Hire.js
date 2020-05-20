import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';
import SendButton from '../customComponents/SendButton'


import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Hire({ navigation }) {
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
            <View style={{paddingRight: 133, flexDirection: 'row', paddingTop: 25}}>
                <View style={{backgroundColor: '#88bef5', width: 20, height: 5}}></View>
                <View style={{backgroundColor: '#086972', width: 20, height: 5}}></View>
                <View style={{backgroundColor: '#17b978', width: 20, height: 5}}></View>
                <View style={{backgroundColor: '#3b5441', width: 20, height: 5}}></View>
            </View>
            <View>
                <Text style={styles.hireHeading}>Let's Connect!</Text>
            </View>
            <View style={styles.formCont}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View>
                        <Text style={styles.formText}>Your Name: </Text>
                        <TextInput style={styles.formTextInput}/>
                    </View>
                    <View>
                        <Text style={styles.formText}>Your Eamil: </Text>
                        <TextInput style={styles.formTextInput}/>
                    </View>
                </View>
                <View style={{paddingLeft: 25, paddingTop: 10}}>
                    <Text style={styles.formText}>Your Message: </Text>
                    <TextInput style={{...styles.formTextInput, width: 358, height: 100}}/>
                </View>
                <View style={{paddingLeft: 25}}>
                    <SendButton />
                </View>
            </View>
            <View style={styles.socialMediaCont}>
                <View style={styles.socialMediaLinks}>
                    <MaterialIcons name="email" size={32} color="white"/>
                    <Text style={styles.socialMediaTexts}>abcd@gmail.com</Text>
                </View>
                <View style={styles.socialMediaLinks}>
                    <MaterialCommunityIcons name="github-box" size={32} color="white"/>
                    <Text style={styles.socialMediaTexts}>github.com/abcd</Text>
                </View>
                <View style={styles.socialMediaLinks}>
                    <MaterialCommunityIcons name="linkedin-box" size={32} color="white"/>
                    <Text style={styles.socialMediaTexts}>linkedin.com/abc</Text>
                </View>
            </View>
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

    hireHeading: {
        fontSize: 40,
        fontFamily: 'serif',
        textAlign: 'center',
        color: 'white'
    }, 

    formCont: {
        paddingTop: 30,
        alignSelf: 'stretch',
        paddingBottom: 50,
    },  

    formText: {
        fontSize: 16,
        fontFamily: 'serif',
        color: 'white',
    },

    formTextInput: {
        borderWidth: 1,
        borderColor: 'white',
        width: 150,
        textAlign: 'left',
        fontFamily: 'serif',
        color: 'white',
        paddingLeft: 5
    }, 

    socialMediaCont: {
        backgroundColor: 'rgba(23,19,19,0.3)',
        alignSelf: 'stretch',
        alignItems: 'center'
    },

    socialMediaLinks: {
        flexDirection: 'row',
        padding: 10,
    }, 

    socialMediaTexts: {
        fontFamily: 'serif',
        fontSize: 32,
        color: 'white',
        paddingLeft: 15,
    }

})