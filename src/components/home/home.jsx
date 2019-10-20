import React from "react";
import Slider from "./NetflixSlider";
import MovieCard from "./movie-card/movie-card";

const Home = props => {
  return (
    <section id="content">
      <Slider>
        {props.moviesBd.map(moviesBd => (
          <Slider.Item moviesBd={moviesBd} key={moviesBd.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
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
            starringImg={moviesBd.starringImg}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
