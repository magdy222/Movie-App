import { View, TextInput, SafeAreaView, Image , ScrollView, Animated} from 'react-native'
import React, {useEffect, useState, useRef } from 'react'
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import search from '../assets/search.png'
import axios from 'axios';
import SectionTitle from './SectionTitle';
import MovieCard from './MovieCard';
//import Results from '../constants/Results';


const Search = () => {

  const [value, setValue] = useState([])
  const fadeAnimation = useRef(new Animated.Value(0)).current

  const fadeAnimationHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }

  const fetchSearchMovies = async( value ) => {
    const req = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=5db3aa37eb1cad7c4ff22e1c4375f485`)
    const data = req.data
    const movies = data.results
    setValue(movies)
    console.log(movies)
    
  }

    const handleSearch = (value) => {
      fetchSearchMovies(value)
    }

    useEffect(() => {
      fadeAnimationHandler()
    },[fadeAnimation])


  return (
    <SafeAreaView style={tw`flex-1 bg-gray-900`}>
        <View style={tw`flex-row justify-between items-center gap-15 mt-15 mx-3 bg-white rounded-3xl px-5 py-2`}>
            <TextInput 
            placeholder='Search Movie' 
            placeholderTextColor="black" 
            style={tw`text-lg font-semibold mx-5 px-1`}
            onChangeText={handleSearch}
            />
            <Feather name="search" size={24} color="black" />
        </View>
        <View style={tw`flex-1 justify-center items-center mx-5  my-5`}>
          <SectionTitle title='Search Results' />
            <Animated.ScrollView 
              horizontal={false} 
              fadingEdgeLength={100} 
              style={[tw`flex-1 mx-1 my-3`, {opacity: fadeAnimation}]}>
                    {value.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </Animated.ScrollView>
        </View>
        {!value ? (<View style={tw`flex-1 justify-center items-center mx-5`}>
            <Image source={search} resizeMode='cover' style={tw` w-[320px] h-[300px]`}/>
        </View>) : '' }

    </SafeAreaView>
  )
}

export default Search