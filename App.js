import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Entypo } from '@expo/vector-icons';


import MainTabScreen from './screens/MainTabScreen'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import About from './components/About'
import Hire from './components/Hire'


const Drawer = createDrawerNavigator()

function HamburgerMenu() {
  return (
    <Drawer.Navigator
    drawerPosition="right"
    drawerContentOptions={{
      labelStyle: { fontSize: 24, color: 'black', fontFamily: 'serif', padding: 5 },
      itemStyle: { marginLeft: 10 }
    }}
    >
        <Drawer.Screen 
          name="Home" 
          component={MainTabScreen}
          options={{
            drawerIcon: () => <Entypo name="home" size={24} color="black"/> 
          }}  
        />
        <Drawer.Screen 
          name="Portfolio" 
          component={Portfolio}
          options={{
            drawerIcon: () => <Entypo name="briefcase" size={24} color="black"/>
          }}
        />
        <Drawer.Screen 
          name="Skills" 
          component={Skills}
          options={{
            drawerIcon: () => <Entypo name="pencil" size={24} color="black"/>
          }}
        />
        <Drawer.Screen 
          name="About Me" 
          component={About}
          options={{
            drawerIcon: () => <Entypo name="info" size={24} color="black"/>
          }}
        />
        <Drawer.Screen 
          name="Hire Me" 
          component={Hire}
          options={{
            drawerIcon: () => <Entypo name="email" size={24} color="black"/>
          }}  
        />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <HamburgerMenu />
    </NavigationContainer> 
  )
}