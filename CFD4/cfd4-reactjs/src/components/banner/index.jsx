import React from "react";

export default function Banner(props) {
  const { imageUrl, headline, des, cta } = props;
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="inner__banner">
        <h2>{headline}</h2>
        <p>{des}</p>
        <a href="//#" className="btn btn-round">
          {cta}
        </a>
      </div>
    </div>
  );
}
