import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const SectionTitle = ({title}) => {
  return (
    <View style={tw`mt-7 mx-5`}>
        <Text style={tw`text-lg font-semibold text-white`}>
            {title}
        </Text>
    </View>
  )
}

export default SectionTitle