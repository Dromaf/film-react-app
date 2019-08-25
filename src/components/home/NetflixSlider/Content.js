import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';

const Content = ({ moviesBd, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${moviesBd.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{moviesBd.title}</div>
        <div className="content__description">
        {moviesBd.description}
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
