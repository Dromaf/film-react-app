import React from "react";
import s from "./raiting-info.module.css";
import imdb from "./img/imdb.png";

const RaitingInfo = () => {
  return (
    <div className={s.content_item_info}>
      <div className={`${s.content_item_info_rating} ${s.slam}`}>
        <img src={imdb} className={s.content_item_info_rating_img} alt={imdb} />
        <span>7.6 / 10</span>
      </div>
      <div className={`${s.content_item_info_country} ${s.slam}`}>Holywood</div>
      <div className={s.content_item_info_language}>English</div>
    </div>
  );
};

export default RaitingInfo;
