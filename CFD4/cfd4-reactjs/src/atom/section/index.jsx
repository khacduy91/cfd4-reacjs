import React from "react";

export default function Section(props) {
  const { title, className, topdes, titleClass } = props;
  return (
    <section className={`section-${className}`}>
      <div className="container">
        <p className="top-des">{topdes}</p>
        <div className="textbox">
          <h2 className={`main-title ${titleClass}`}>{title}</h2>
        </div>
        {props.children}
      </div>
    </section>
  );
}
