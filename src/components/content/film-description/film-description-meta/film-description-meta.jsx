import React from "react";
import s from "./film-description-meta.module.css";

const FilmDescriptionMeta = () => {
  return (
            <div>
              <span>Original Release:</span>
              <span className={s.meta_data}>2014-11-05</span>
              { /* <div>
              <span>Running Time:</span>
              <span className={s.meta_data}>169 mins </span>
            </div>
            <div>
              <span>Box Office:</span>
              <span className={s.meta_data}>$675,120,017</span>
            </div>
            <div>
              <span>Vote Average:</span>
              <span className={s.meta_data}>8.2 / 10</span>
            </div>*/}
            </div>
        
  );
};

export default FilmDescriptionMeta;
