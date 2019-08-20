import React from "react";
import s from "./producer.module.css";
import actor from './img/actor.png';

const Producer = () => {
  return (
          <article className={s.actor_content_container_item}>
            <img src={actor} alt={actor} className={s.actor_content_container_img} />
            <div className={s.actor_content_container_block}>
              <div className={s.actor_content_container_info}>Directed by</div>
              <div className={s.actor_content_container_text}>Jonathan Liebesman</div>
            </div>
          </article>     
  );
};

export default Producer;