import React from "react";
import { Link } from "react-router-dom";

export default function CourseItem({
  thumbnail,
  badge,
  badgeClass,
  user,
  heart,
  share,
  title,
  slug,
  short_description,
  teacher,
}) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={`/course/${slug}`}>
          <img src={thumbnail?.link || ""} alt={title} />
          <span className={`badge ${badgeClass}`}>{badge}</span>
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="/img/icon-user-white.svg" alt="" />
                {user}
              </div>
              <div className="heart">
                <img src="/img/icon-heart.svg" alt="" /> {heart}
              </div>
            </div>
            <div className="share">
              <img src="/img/icon-viewmore.svg" alt="" /> {share}
            </div>
          </div>
        </Link>
        <div className="info">
          <Link className="name" to={`/course/${slug}`}>
            {title}
          </Link>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img
                src={teacher?.avatar?.thumbnail["thumbnail-1"] || ""}
                alt={teacher?.title}
              />
            </div>
            <div className="name">{teacher?.title || ""}</div>
          </div>
          <Link to={`/register/${slug}`} className="register-btn">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}
