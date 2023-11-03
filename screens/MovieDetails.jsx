import {Image, ScrollView, Text, View, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import tw from 'twrnc'
import { Foundation } from '@expo/vector-icons';
import SectionTitle from '../components/SectionTitle';
import Results from '../constants/Results';



const MovieDetails = ({route}) => {

    const {movie} = route.params

    const [similarMovies, setSimilarMovies] = useState([])
    
    const moveAnimationOne = useRef(new Animated.Value(0)).current
    const fadeAnimation = useRef(new Animated.Value(0)).current

    const moveAnimationHandlerOne = () => {
      Animated.spring(moveAnimationOne, {
        toValue: 1,
        friction: 2,
        tension: 0.5,
        useNativeDriver: true
      }).start();
    }

    const fadeAnimationHandler = () => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 1000,
        delay: 300,
        useNativeDriver: true,
      }).start();
    }
    const fetchSimilarMovies = async() => {
      const req = await fetch(`https://api.themoviedb.org/3/${movie.media_type}/${movie.id}/similar?api_key=5db3aa37eb1cad7c4ff22e1c4375f485&language=en-US&page=1`).then(res => res.json())
      const res = req.results
      setSimilarMovies(res)
    }

    useEffect(() => {
      fetchSimilarMovies()
      moveAnimationHandlerOne()
      fadeAnimationHandler()
    },[moveAnimationOne, fadeAnimation])
    
    const formattedVoteAverage = movie.vote_average.toFixed(1); // Format vote average to two decimal places
    
  return (
    <ScrollView 
      fadingEdgeLength={200}
      fadingEdgeColor="white"
      endFillColor={'white'}
      style={tw`flex-1 bg-gray-900 `}
    >
      <Animated.View style={{ 
            flex: 1 ,
            transform: [
                {
                    translateY: moveAnimationOne.interpolate({
                        inputRange: [0, 1],
                        outputRange: [200, 0 ],
                    })
                }
            ]
            }}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` || 
          `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}} 
          style={tw`w-full h-[400px] `}  
          resizeMode='cover'
         />
      </Animated.View>
      <View style={tw`flex-1 flex-col justify-center items-center my-10`}>
          <Animated.Text style={[tw`text-3xl font-bold text-white my-5`, {opacity: fadeAnimation}]}>{movie.title || movie.original_name || movie.original_title}</Animated.Text>
        <View style={tw`flex-1 flex-row justify-between items-center gap-5 my-3`}>
          <Text style={tw`text-lg font-semibold text-white`}>
             {movie.release_date ? movie.release_date : movie.first_air_date} </Text>
          <Text style={tw`text-lg font-semibold text-gray-400`}>{movie.vote_count}</Text>
          <Animated.Text style={[tw`text-lg font-semibold text-yellow-400`, {opacity: fadeAnimation}]}>{formattedVoteAverage}</Animated.Text>
        </View>
        <View style={tw`flex-1 flex-row justify-start items-center gap-10 my-3`}>
            <Text style={tw`text-2xl font-semibold text-yellow-400`}>Trailer :</Text>
              {movie.video ? 
              <Foundation name="play-video" size={80} color="white"/> :
              <Text style={tw`text-lg font-semibold text-white`}>No Trailer Available </Text>}
        </View>          
        <View style={tw`flex-1 justify-between items-center mx-3 my-3`}>
          <Text style={tw`text-sm font-semibold text-gray-400`}>{movie.overview} </Text>
        </View>
      </View>
        <View style={tw`flex-1`}>
          <Text style={tw`text-xl font-bold text-white mx-5`}>Casting</Text>
          <View style={tw`flex-1 flex-row justify-between items-center gap-2 mx-2 my-3`}>
            <Image 
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` || 
                      `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}} 
                      style={tw`w-20 h-20 rounded-full`}
            />
            <Image 
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` || 
                      `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}} 
                      style={tw`w-20 h-20 rounded-full`}
            />
            <Image 
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` || 
                      `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}} 
                      style={tw`w-20 h-20 rounded-full`}
            />
            <Image 
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` || 
                      `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}} 
                      style={tw`w-20 h-20 rounded-full`}
            />
          </View>
        </View>
        {similarMovies ? (
        <ScrollView>
          <View style={tw`flex flex-row justify-between items-center `}>
          <View>
              <SectionTitle title='Similar Movies'/>
              <Results result={similarMovies}/>
          </View>
        </View>
        </ScrollView> 
        ) : ''}
    </ScrollView>
  )
}

export default MovieDetails
