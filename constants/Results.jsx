import { View, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import MovieCard from '../components/MovieCard'
//import { Dimensions } from 'react-native'

const Results = ({result}) => {

  //const cardWidth = 400;
  //const screenWidth = Dimensions.get('window').width;
  //const initialOffset = (screenWidth - cardWidth) / 2; // Calculate the initial offset
  
  if(!result) {
    result = []
  }
  return (

    <ScrollView 
      horizontal={true} 
      fadingEdgeLength={100} 
      style={tw`flex-1 mx-1 my-3`}
    >
    <View style={tw`flex-1 flex-row justify-center`}>
      {
        result.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </View>
    </ScrollView>
  )
    }

export default Results