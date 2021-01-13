import React from "react";

export default function CourseItem(props) {
  const {
    imageAlt,
    imageUrl,
    title,
    des,
    avatarAlt,
    avatarImageUrl,
    name,
  } = props;
  return (
    <div className="col-md-4 course__item">
      <a className="course__item-img" href="/">
        <img src={imageUrl} alt={imageAlt} />
      </a>
      <div className="course__item-info">
        <div className="course__item-wrap">
          <h2 className="course__item-title">{title}</h2>
          <p className="course__item-des">{des}</p>
        </div>
        <div className="course__item-details">
          <div className="teacher">
            <div className="avatar">
              <img src={avatarImageUrl} alt={avatarAlt} />
            </div>
            <div className="name">{name}</div>
          </div>
          <a href="/#" className="btn btn-register">
            Đăng ký
          </a>
        </div>
      </div>
    </div>
  );
}
