// const API_KEY = '73b0eee2504d44982b835c5d750c9459'
// const API_URL_BASE = 'https://api.themoviedb.org/3'

/*
    Originais da Netflix

*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      }, {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`),
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`);
          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
