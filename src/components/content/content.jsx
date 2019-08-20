import React from "react";
import s from "./content.module.css";
import Poster from "./poster/poster";
import RaitingInfo from "./raiting-info/raiting-info";
import FilmInfo from "./film-info/film-info";
import ButtonInfo from "./button-info/button-info";
import ActorInfo from "./actor-info/actor-info";
import ProducerInfo from "./producer-info/producer-info";
import FilmDescription from "./film-description/film-description";
import YoutubeFilm from "./youtube-film/youtube-film";

const Content = () => {
  return (
    <div>
      <section id="content">
        <div class="wrapper">
          <div className={`${s.content_item} ${s.text}`}>
            <RaitingInfo />
            <FilmInfo />
            <ButtonInfo />
          </div>
          <Poster />
        </div>
      </section>
        <ProducerInfo />
        <ActorInfo />
        <FilmDescription />
        <YoutubeFilm />
    </div>
  );
};

export default Content;
