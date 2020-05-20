import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Octicons } from '@expo/vector-icons';


import Home from '../components/Home'


const HomeStack = createStackNavigator()

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#121617',
                    height: 100
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontFamily: 'serif',
                    fontSize: 32,
                    letterSpacing: 3,
                    marginLeft: 20,
                },
                headerTitle: 'HA',
                headerRight: () => <Octicons 
                name="three-bars" size={32} color="white" style={{marginRight: 20}} onPress={() => {navigation.openDrawer()}}/>
            }}
        >
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    )   
}

export default HomeStackScreen;