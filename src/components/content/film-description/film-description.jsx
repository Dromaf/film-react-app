import React from "react";
import s from "./film-description.module.css";
import FilmDescriptionText from "./film-description-text/film-description-text";
import FilmDescriptionMeta from "./film-description-meta/film-description-meta";

const FilmDescription = () => {
  return (
    <section class="film-content">
      <div class="wrapper">
        <h4 class="film-content-title">Info</h4>
        <div className={s.film_content_detail_info}>
          <FilmDescriptionText />
          <div className={s.film_content_detail_film_info}>
           <FilmDescriptionMeta />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmDescription;
