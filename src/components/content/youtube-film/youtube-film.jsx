import React from "react";
import s from "./youtube-film.module.css";
import YoutubeFilmVideo from "./youtube-film-video/youtube-film-video";

const YoutubeFilm = () => {
  return (
    <section className={s.film_video}>
    <div class="wrapper">
        <h4 class="film-video-content-title">Video</h4>
        <div className={s.film_video_content_youtube}>
            <YoutubeFilmVideo />
         
        </div>
    </div>
</section>
  );
};

export default YoutubeFilm;