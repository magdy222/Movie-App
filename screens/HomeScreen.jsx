import {  ScrollView, View , Animated} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import tw from 'twrnc'
import SectionTitle from '../components/SectionTitle'
import requests from '../constants/requests'
import Results from '../constants/Results'
import axios from 'axios'



const HomeScreen = () => {

  const [trendingMoviesData, setTrendingMoviesData] = useState([])
  const [topRatedMoviesData, setTopRatedMoviesData] = useState([])
  const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState([])
  const [upcomingMoviesData, setUpcomingMoviesData] = useState([])
  const [popularMoviesData, setPopularMoviesData] = useState([])

  const fadeAnimationOne = useRef(new Animated.Value(0)).current
  const fadeAnimationTwo = useRef(new Animated.Value(0)).current

  const fadeAnimationHandlerOne = () => {
    Animated.timing(fadeAnimationOne, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }
  const fadeAnimationHandlerTwo = () => {
    Animated.timing(fadeAnimationTwo, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }


  const fetchTrendingMoviesData = async() => {
  
    const req = await axios.get(`https://api.themoviedb.org/3/${requests.fetchTrending.url}`)
    const data = req.data
    const movies = data.results
    setTrendingMoviesData(movies)
    
  }

  const fetchTopRatedMoviesData = async() => {
    const req = await axios.get(`https://api.themoviedb.org/3/${requests.fetchTopRated.url}`)
    const data = req.data
    const movies = data.results
    setTopRatedMoviesData(movies)
    
  }

  const fetchNowPlayingMoviesData = async() => {
    const req = await axios.get(`https://api.themoviedb.org/3/${requests.fetchNowPlaying.url}`)
    const data = req.data 
    const movies = data.results
    setNowPlayingMoviesData(movies)


  }

  const fetchUpcomingMoviesData = async() => {
    const req = await axios.get(`https://api.themoviedb.org/3/${requests.fetchUpcoming.url}`)
    const data = req.data
    const movies  = data.results
    setUpcomingMoviesData(movies)
    
  }

  const fetchPopularMoviesData = async() => {
    const req = await axios.get(`https://api.themoviedb.org/3/${requests.fetchPopularMovies.url}`)
    const data = req.data
    const movies = data.results
    setPopularMoviesData(movies)
  }

  useEffect(() => {
    fetchTrendingMoviesData()
    fetchTopRatedMoviesData()
    fetchNowPlayingMoviesData()
    fetchUpcomingMoviesData()
    fetchPopularMoviesData()
    fadeAnimationHandlerOne()
    fadeAnimationHandlerTwo()
  },[fadeAnimationOne, fadeAnimationTwo])

 
  return (
    <Animated.ScrollView style={[tw`flex-1 bg-gray-900 `, {opacity: fadeAnimationOne}]}>
      <View>
        <Header/>
      </View>
      <Animated.View style={[tw`flex flex-row justify-between items-center `, {opacity: fadeAnimationTwo}]}>
        <View>
          <SectionTitle title='Trending'/>
          <Results result={trendingMoviesData}/>
        </View>
      </Animated.View>
      <Animated.View style={[tw`flex flex-row justify-between items-center `, {opacity: fadeAnimationTwo}]}>
        <View>
          <SectionTitle title='Top Rated'/>
          <Results result={topRatedMoviesData}/>
        </View>
      </Animated.View>
      <Animated.View style={[tw`flex flex-row justify-between items-center `, {opacity: fadeAnimationTwo}]}>
        <View>
          <SectionTitle title='Now Playing'/>
          <Results result={nowPlayingMoviesData}/>
        </View>
      </Animated.View>
      <Animated.View style={[tw`flex flex-row justify-between items-center `, {opacity: fadeAnimationTwo}]}>
        <View>
          <SectionTitle title='Upcoming'/>
          <Results result={upcomingMoviesData}/>
        </View>
      </Animated.View>
      <Animated.View style={[tw`flex flex-row justify-between items-center `, {opacity: fadeAnimationTwo}]}>
        <View>
          <SectionTitle title='Popular'/>
          <Results result={popularMoviesData}/>
        </View>
      </Animated.View>
      </Animated.ScrollView>
  )
}

export default HomeScreen

