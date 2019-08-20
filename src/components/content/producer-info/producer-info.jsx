import React from "react";
import s from "./producer-info.module.css";
import Producer from "./producer/producer";

const ProducerInfo = () => {
  return (
    <section className={s.actor_content}>
      <div class="wrapper">
        <h4 className={s.actor_content_title}>Producer</h4>
        <div className={s.actor_content_container}>
          <Producer />
  
        </div>
      </div>
    </section>
  );
};

export default ProducerInfo;
