import React from "react";

export default function PaymentItem(props) {
  const {
    title,
    subtitle1,
    content1,
    tt1,
    subtitle2,
    content2,
    tt2,
    subtitle3,
    content3,
    tt3,
  } = props;
  return (
    <div className="payment__item" style={{ textAlign: "left" }}>
      <div className="payment__item--wrap">
        <h2 className="title">{title}</h2>
        <div className="details">
          <h3 className="sub__title">{subtitle1}</h3>
          {content1}
          <div className="tt">{tt1}</div>
          <h3 className="sub__title">{subtitle2}</h3>
          {content2}
          <div className="tt">{tt2}</div>
          <h3 className="sub__title">{subtitle3}</h3>
          {content3}
          <div className="tt">{tt3}</div>
        </div>
      </div>
    </div>
  );
}
