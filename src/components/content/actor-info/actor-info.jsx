import React from "react";
import s from "./actor-info.module.css";
import Actor from "../actor-info/actor/actor";

const ActorInfo = () => {
  return (
    <section className={s.actor_content}>
      <div class="wrapper">
        <h4 className={s.actor_content_title}>Actor</h4>
        <div className={s.actor_content_container}>
          <Actor />
        </div>
      </div>
    </section>
  );
};

export default ActorInfo;
