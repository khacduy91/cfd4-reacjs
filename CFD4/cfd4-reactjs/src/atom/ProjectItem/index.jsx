import React from "react";

export default function ProjectItem(props) {
  const { imageUrl, imageAlt, name, makeBy } = props;
  return (
    <a href="/#" className="item col-md-6">
      <div className="wrap">
        <div className="cover">
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="makeby">{makeBy} </div>
        </div>
      </div>
    </a>
  );
}
