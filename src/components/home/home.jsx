import React from "react";
import s from "./home.module.css";
import Slider from './NetflixSlider'
import MovieCard from "./movie-card/movie-card";



const Home = (props) => {
  return (
    <section id="content">
      <div className="wrapper">
        {props.moviesBd.map(moviesBd => (
          <MovieCard
            key={moviesBd.id}
            title={moviesBd.title}
            image={moviesBd.image}
            juicedBy={moviesBd.juicedBy}
            raiting={moviesBd.raiting}
            genre={moviesBd.genre}
            description={moviesBd.description}
            starringImg={moviesBd.starringImg[0]}
          />
        ))}
      </div>
      <Slider>
        {props.movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </section>
  );
};

export default Home;
