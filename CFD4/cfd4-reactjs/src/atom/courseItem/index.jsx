import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CourseItem({
  thumbnail,
  course_status,
  user,
  heart,
  share,
  title,
  slug,
  short_description,
  teacher,
}) {
  let [badge, setBadge] = useState();
  let [badgeColor, setBadgeColor] = useState();

  useEffect(() => {
    switch (course_status) {
      case "sap-khai-gian":
        setBadge("Sắp khai giảng");
        setBadgeColor("#5a46ff");
        break;
      case "dang-dien-ra":
        setBadge("Đang diễn ra");
        setBadgeColor("#f4744b");
        break;
      case "da-ket-thuc":
        setBadge("Đã kết thúc");
        setBadgeColor("#797979");
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={`/course/${slug}`}>
          <img src={thumbnail?.link || ""} alt={title} />
          <span className={`badge b1`} style={{ background: `${badgeColor}` }}>
            {badge}
          </span>
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
