import { View, Text, ScrollView, Animated, SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MovieCard from '../components/MovieCard'
import tw from 'twrnc'
import SectionTitle from '../components/SectionTitle'

const LikedMovies = ({route}) => {

    const {movie} = route.params

    const fadeAnimation = useRef(new Animated.Value(0)).current

    const fadeAnimationHandler = () => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 1000,
        delay: 300,
        useNativeDriver: true,
      }).start();
    }
    useEffect(() => {
      fadeAnimationHandler()
    },[fadeAnimation])
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-900`}>
        <View style={tw` flex justify-start items-start mx-3 my-10`}>
            <SectionTitle title='Liked Movies' />
        </View>
        <Animated.ScrollView
        horizontal={false} 
        fadingEdgeLength={100} 
        style={[tw`flex-1 mx-1 my-3 `, {opacity: fadeAnimation}]}>
            <MovieCard movie={movie} />
        </Animated.ScrollView>
    </SafeAreaView>
  )
}

export default LikedMovies