import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home';

import CustonDrawer from '../components/CustomDrawer';

export default function Routes() {
    const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator
    drawerContent={CustonDrawer}
    screenOptions={{
        drawerInactiveTintColor:'gray',
        drawerActiveTintColor:'#00ff',
    }}
    >
       
        <Drawer.Screen name='Home' component={Home}/>
       
    </Drawer.Navigator>
  )
}