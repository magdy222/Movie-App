import { View, Image  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
const Header = () => {

  const navigation = useNavigation()

  searchHandler = () => {
    navigation.navigate('Search')
  }
  return (
    <View style={tw`flex-row justify-between items-center mt-12 mx-5`}>
      <Ionicons name="ios-search" size={24} color="white" onPress={searchHandler}/>
        <Image source={require('../assets/logo.png')} style={{ width:96,height: 40 }} />
      <Foundation name="list" size={24} color="white" />
    </View>
  )
}

export default Header
