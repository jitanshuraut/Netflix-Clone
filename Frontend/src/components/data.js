async function fetchMoviesJSON(type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/trending/${type}/week?api_key=51a0653b3a7a336ce55faa7b301472bd`);
    const movies = await response.json();
    return movies;
  }

  async function fetchtvJSON() {
    if(localStorage.getItem("movie")==null){

    
    const response = await fetch(`
https://api.themoviedb.org/3/tv/popular?api_key=51a0653b3a7a336ce55faa7b301472bd&language=en-US&page=1`);
    const movies = await response.json();
    localStorage.setItem('movies',JSON.stringify(movies));
    console.log("fetch")
    return movies;
    }
    else{
      console.log("local")
      return localStorage.getItem('movies');

    }
  }

  async function fetchpersonJSON(id) {
    const response = await fetch(`
    https://api.themoviedb.org/3/person/${id}?api_key=51a0653b3a7a336ce55faa7b301472bd&language=en-US`);
    const movies = await response.json();
    return movies;
  }

  async function fetchmovJSON(page,type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/${type}/popular?api_key=51a0653b3a7a336ce55faa7b301472bd&language=en-US&page=${page}`);
    const movies = await response.json();
    return movies;
  }

  async function fetchsearchJSON(movie,page) {
    const response = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=51a0653b3a7a336ce55faa7b301472bd&language=en-US&query=${movie}&page=${page}&include_adult=false`);
    const movies = await response.json();
    return movies;
  }

  async function fetchupmovJSON() {
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=51a0653b3a7a336ce55faa7b301472bd&language=en-US&page=1`);
    const movies = await response.json();
    return movies;
  }

  async function fetchupcomingJSON(page,type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/${type}/upcoming?api_key=51a0653b3a7a336ce55faa7b301472bd&language=en-US&page=${page}`);
    const movies = await response.json();
    return movies;
  }

  async function fetchHistroyJSON(page,type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/${type}?api_key=51a0653b3a7a336ce55faa7b301472bd&with_genres=36&page=${page}`);
    const movies = await response.json();
    return movies;
  }

  async function fetchActionJSON(page,type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/${type}?api_key=51a0653b3a7a336ce55faa7b301472bd&with_genres=28&page=${page}`);
    const movies = await response.json();
    return movies;
  }
  async function fetchComdeyJSON(page,type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/${type}?api_key=51a0653b3a7a336ce55faa7b301472bd&with_genres=35&page=${page}`);
    const movies = await response.json();
    return movies;
  }
  async function fetchFamilyJSON(page,type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/${type}?api_key=51a0653b3a7a336ce55faa7b301472bd&with_genres=10751&page=${page}`);
    const movies = await response.json();
    return movies;
  }
  async function fetchHorrorJSON(page,type) {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/${type}?api_key=51a0653b3a7a336ce55faa7b301472bd&with_genres=27&page=${page}`);
    const movies = await response.json();
    return movies;
  }
  async function fetchrtvJSON() {
    const response = await fetch(`
    https://api.themoviedb.org/3/tv/top_rated?api_key=51a0653b3a7a336ce55faa7b301472bd&language=en-US&page=1`);
    const movies = await response.json();
    return movies;
  }
  export{fetchMoviesJSON,fetchActionJSON,fetchComdeyJSON,fetchFamilyJSON,fetchHorrorJSON,fetchHistroyJSON,fetchtvJSON,fetchmovJSON,fetchupmovJSON,fetchrtvJSON,fetchsearchJSON,fetchpersonJSON,fetchupcomingJSON}