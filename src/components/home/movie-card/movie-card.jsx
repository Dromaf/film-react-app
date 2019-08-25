import React from "react";
import s from "./movie-card.module.css";

const MovieCard = (props) => {
  return (
    <div className={s.card} key={props.id}>
      <a href="info/">
        <div className={s.poster}>
          <img src={props.image} />
        </div>
        <div className={s.details}>
          <h2>
          {props.title}
            <br />
            <span> {props.juicedBy}</span>
          </h2>

          <div className={s.rating}>
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <span>{props.raiting}</span>
          </div>

          <div className={s.tags}>
            <span className={s.tags_name}>{props.genre}</span>
          </div>

          <div className={s.info}>
            <p>
            {props.description}
            </p>
          </div>

          <div className={s.star}>
            <h4>Актеры</h4>
            <ul>
              <li>
                <img src={props.starringImg} />
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
