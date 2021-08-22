import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

import loadingGif from './components/images/loading_netflix.gif'

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list);
      // console.log(list);

      // Pegando o FeaturedMovie
      const originals = list.filter((i) => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];

      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, `tv`)

      setFeaturedData(chosenInfo)

    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData
        && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> por Sandro Carvalho <br />
        Direitos de imagem para Netflix <br />
        Dados pegos no site themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src={loadingGif} alt="Carregando" />
        </div>
      }

    </div>
  );
};
