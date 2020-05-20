import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { Entypo } from '@expo/vector-icons';


import HomeStackScreen from './HomeScreen'
import PortfolioStackScreen from './PortfolioScreen'
import Skills from '../components/Skills'
import Hire from '../components/Hire'


const Tab = createMaterialBottomTabNavigator()

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStackScreen}
                options={{
                    tabBarColor: '#88bef5',
                    tabBarIcon: () => <Entypo name="home" size={24} color="white"/>
                }}
            />
            <Tab.Screen 
                name="Portfolio" 
                component={PortfolioStackScreen}
                options={{
                    tabBarColor: '#086972',
                    tabBarIcon: () => <Entypo name="briefcase" size={24} color="white"/>
                }}
            />
            <Tab.Screen 
                name="Skills" 
                component={Skills}
                options={{
                    tabBarColor: '#17b978',
                    tabBarIcon: () => <Entypo name="pencil" size={24} color="white"/>
                }}
            />
            <Tab.Screen 
                name="Hire Me" 
                component={Hire}
                options={{
                    tabBarColor: '#3b5441',
                    tabBarIcon: () => <Entypo name="email" size={24} color="white"/>
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen;