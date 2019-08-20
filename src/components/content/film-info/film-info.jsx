import React from "react";
import s from "./film-info.module.css";

const FilmInfo = () => {
  return (
    <div >
        <h1 className={s.content_item_title}>
          The Last Jedi
          <span className={s.content_item_title_togle}>.</span>
        </h1>
        <p className={s.content_item_descr}>
          Wrath of the Titans is a 2012 3D epic action adventure fantasy film
          that is a sequel to the 2010 film Clash of the Titans. The film stars
          Sam Worthington, Rosamund Pike, Bill Nighy, Édgar Ramírez, Toby
          Kebbell, Danny Huston, Ralph Fiennes, and Liam Neeson, with Jonathan
          Liebesman directing a screenplay by Dan Mazeau and David Leslie
          Johnson. Wrath of the Titans takes place a decade after the events of
          the preceding film as the gods
        </p>
    </div>
  );
};

export default FilmInfo;
