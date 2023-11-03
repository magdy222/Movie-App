import {  Image, TouchableOpacity , Text, View, Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

const MovieCard = ({movie}) => {

  const navigation = useNavigation()
  const handleMovieDetails = () => {
    navigation.navigate('MovieDetails', {movie}) 
  }

  const handleLikedMovies = () => {
    navigation.navigate('LikedMovies', {movie})
  }
  const formattedVoteAverage = movie.vote_average.toFixed(1); // Format vote average to two decimal places

  const opacity = useRef(new Animated.Value(0)).current;


  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, [opacity]);


  return (
    <TouchableOpacity
    style={[tw`flex flex-row justify-center mt-2 mx-2 `]}
    onPress={handleMovieDetails}
    
    >
      <View>
        <Image 
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} 
            style={tw`w-[220px] h-[280px] rounded-3xl mx-1`} 
            />
            <View style={tw`absolute bottom-60 right-0  mx-3 bg-black rounded-tl-3xl px-2 rounded-3xl`}>
              <Text style={tw`text-white font-semibold text-lg text-yellow-400`}>{formattedVoteAverage}</Text>
            </View>
            <View style={tw`absolute bottom-60 left-0  mx-3 px-2 rounded-3xl`}>
              <AntDesign name="heart" size={24} color="red" onLongPress={handleLikedMovies} />
            </View>
            <View style={tw` absolute bottom-3 left-1  mx-3 bg-black rounded-tl-3xl px-2 rounded-3xl`}>
              <Animated.Text 
              numberOfLines={1} 
              ellipsizeMode="tail" 
              style={[tw`text-white font-semibold text-lg text-yellow-400`, {opacity: opacity}]}>
                {movie.title || movie.original_name || movie.original_title }
              </Animated.Text>
            </View>
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard