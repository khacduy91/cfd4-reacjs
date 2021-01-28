import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingApi from "../../../../atom/LoadingApi";
import userApi from "../../../../core/API/userApi";
import milisec_to_date from "../../../../core/milisec_to_date";
import Process from "./Process";

export default function Course() {
  //Get Data
  let [dataCourse, setDataCourse] = useState();
  useEffect(
    () =>
      userApi.getDataCourse().then((res) => {
        if (res) {
          setDataCourse(res);
        } else {
          setDataCourse("Bạn chưa đăng ký khoá học nào");
        }
      }),
    []
  );

  if (!dataCourse)
    return <LoadingApi>Các Khoá Học đang Loadding...</LoadingApi>;

  if (dataCourse === "Bạn chưa đăng ký khoá học nào")
    return <LoadingApi>Bạn chưa đăng ký khoá học nào...</LoadingApi>;

  console.log("render..");

  return (
    <div className="tab2">
      {dataCourse.data.map((ele, index) => (
        <div className="item" key={`dataCourse${index}`}>
          <div className="cover">
            <img src={ele.course.thumbnail.thumbnail["thumbnail-1"]} alt="" />
          </div>
          <div className="info">
            <Link to={`/course/${ele.course.slug}`} className="name">
              {ele.course.title}
            </Link>
            <div className="date">
              Khai giảng ngày {ele.course.opening_time}
            </div>
            <div className="row">
              <div>
                <img src="/img/clock.svg" alt="" className="icon" />
                54 giờ
              </div>
              <div>
                <img src="/img/play.svg" alt="" className="icon" />
                {ele.course.count_video} video
              </div>
              <div>
                <img src="/img/user.svg" alt="" className="icon" />
                20 học viên
              </div>
            </div>
            <Process
              opening_time={ele.course.opening_time}
              count_video={ele.course.count_video}
            />
            <div className="btn overlay round btn-continue">Tiếp tục học</div>
          </div>
        </div>
      ))}
    </div>
  );
}
