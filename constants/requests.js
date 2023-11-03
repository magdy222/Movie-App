//const API_KEY = process.env.API_KEY;


export default {

    fetchTrending:{
        title: 'Trending',
        url: `/trending/all/week?api_key=5db3aa37eb1cad7c4ff22e1c4375f485&language=en-US&page=1`
    } ,
    fetchNowPlaying:{
        title: 'Now Playing',
        url: `/movie/now_playing?api_key=5db3aa37eb1cad7c4ff22e1c4375f485&language=en-US&page=1`
    },
    fetchTopRated:{
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=5db3aa37eb1cad7c4ff22e1c4375f485&language=en-US&page=1`
    } ,
    fetchUpcoming:{
        title: 'Upcoming',
        url: `/movie/upcoming?api_key=5db3aa37eb1cad7c4ff22e1c4375f485&language=en-US&page=1`
    },
    fetchPopularMovies:{
        title: 'Popular',
        url: `/movie/popular?api_key=5db3aa37eb1cad7c4ff22e1c4375f485&language=en-US&page=1`
    },
    fetchSearchMovies:{
        title: 'Search',
        url: '/search/movie?api_key=5db3aa37eb1cad7c4ff22e1c4375f485&language=en-US&page=1&query='
    }
};