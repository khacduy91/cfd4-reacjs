import React from "react";

export default function Section(props) {
  const { title, type, className, introduce } = props;
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {introduce}
        <div className="course">
          <h2 className="title">{title}</h2>
          <h2 className="type">{type}</h2>

          {props.children}
        </div>
      </div>
    </section>
  );
}
