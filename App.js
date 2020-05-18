import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import HomeScreen from './components/HomeScreen'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import About from './components/About'
import Hire from './components/Hire'


/*const Tab = createMaterialBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={HomeScreen} />
      <Tab.Screen name="Skills" component={SettingsScreen} />
      <Tab.Screen name="Hire Me" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
*/

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
          component={StackScreens}
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

const Stack = createStackNavigator()

function StackScreens() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={({ navigation }) => ({
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
        headerRight: () => <AntDesign 
        name="bars" size={32} color="white" style={{marginRight: 20}} onPress={() => {navigation.openDrawer()}}/>
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen}/> 
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <HamburgerMenu />
    </NavigationContainer> 
  )
}