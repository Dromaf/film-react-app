import React from "react";
import s from "./actor-info.module.css";
import Actor from "../actor-info/actor/actor";

const ActorInfo = (props) => {
  return (
    <section className={s.actor_content}>
      <div class="wrapper">
        <h4 className={s.actor_content_title}>Actor</h4>
        <div className={s.actor_content_container}>
          <Actor moviesBd={props.moviesBd}/>
        </div>
      </div>
    </section>
  );
};

export default ActorInfo;
