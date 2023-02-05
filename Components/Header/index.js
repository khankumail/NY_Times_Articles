import React from "react";
import { View, Text } from 'react-native';

export const Header = (props) => {
    return (
      <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start' }}>
        <Text style={{fontWeight:'bold', fontSize:20, color:'white',marginLeft:20}}>
          {props.name}
        </Text>
          
      </View>
    )
  }