import React from "react";
import s from "./poster.module.css";
import filmbg from './img/filmbg.jpg'

const Poster = () => {
  return (
    <div className={s.content_item_poster}>
      <img src={filmbg} alt={filmbg} className={s.content_item_poster_img}/>
    </div>
  );
};

export default Poster;
