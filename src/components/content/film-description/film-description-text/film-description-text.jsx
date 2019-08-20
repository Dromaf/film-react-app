import React from "react";
import s from "./film-description-text.module.css";

const FilmDescriptionText = () => {
  return (
    
          <div className={s.film_content_detail_text}>
            <span className={s.film_data_descr_text}>
              Adventure, Drama, Science Fiction
            </span>
           <span>
              Legendary Entertainment, Syncopy, Lynda Obst Productions
           </span>
                  {/*  <div>
          <span className={s.meta_data_descr}>
            Mankind was born on Earth. It was never meant to die here.{" "}
          </span>
          <span>
            Interstellar chronicles the adventures of a group of explorers who
            make use of a newly discovered wormhole to surpass the limitations
            on human space travel and conquer the vast distances involved in an
            interstellar voyage.
          </span>
        </div>*/}
          </div>
         
  );
};

export default FilmDescriptionText;
