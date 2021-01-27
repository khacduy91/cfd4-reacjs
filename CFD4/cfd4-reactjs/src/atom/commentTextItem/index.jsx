import React from "react";

export default function CommentTextItem(props) {
  const { name, des, content, date, className } = props;
  return (
    <div className={`text-item ${className}`}>
      <div className="info">
        <div className="name">
          <h2>{name}</h2>
          <p>{des}</p>
        </div>
        <div className="quotes">
          <img src="img/daunhay.svg" alt="" />
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="bottom">
        <span className="fb">
          <img src="img/facebook-app-symbol.svg" alt="" />
        </span>
        <span className="date"> {date} </span>
      </div>
    </div>
  );
}
