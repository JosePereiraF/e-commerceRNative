import { View, Text } from 'react-native'
import React, {} from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


export default function CustonDrawer(props) {
  return (
    <DrawerContentScrollView>
        <View
        style={{
            width:"100%",
            height:85,
            alignItems:"center",
            justifyContent:"center"
        }}
        >
        {/* <Text style={{ fontSize: 18, marginTop: 5, color: "#000" }}>
          {logado}
        </Text>  */}
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}