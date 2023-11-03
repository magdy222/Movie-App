import { View, Image, TouchableOpacity , Text, Animated} from 'react-native'
import React, {useRef, useEffect} from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

  const navigation = useNavigation()

  const moveAnimation = useRef(new Animated.Value(0)).current

  const handleMoveAnimation = () =>{
    Animated.spring(moveAnimation, {
      toValue: 1,
      friction: 1,
      tension: 0.5,
      delay: 300,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    handleMoveAnimation()
  },[moveAnimation])

  const handleNavigation = () =>{
    navigation.navigate("Home")
  }

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-900`}>
        <View>
           <Image source={require('../assets/logo.png')} style={{ width: 280, height: 115 }} />
        </View>
            <Animated.View style={{transform: [
                    {
                        translateY: moveAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0 ],
                        })
                    }
                ]}}>
                <TouchableOpacity 
                style={tw`bg-red-600 p-3 rounded-lg mt-15 `}
                onPress={handleNavigation}
                >
                    <Text style={tw`text-white font-bold text-2xl`}>Get Started</Text>
                </TouchableOpacity>
            </Animated.View>
    </View>
  )
}

export default Welcome