const API_KEY = "445e238f9deedc5029d639e00c25d2ab";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&original_language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  // fetchPops : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en=US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchLatest: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
};

export default request;
