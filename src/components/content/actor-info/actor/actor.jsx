import React from "react";
import s from "./actor.module.css";
import actor from './img/actor.png';

const Actor = (props) => {
  return (
          <article className={s.actor_content_container_item}>
            <img src={actor} alt={actor} className={s.actor_content_container_img} />
            <div className={s.actor_content_container_block}>
              <div className={s.actor_content_container_info}>Directed by</div>
              <div className={s.actor_content_container_text}></div>
            
            </div>
          </article>     
  );
};

export default Actor;