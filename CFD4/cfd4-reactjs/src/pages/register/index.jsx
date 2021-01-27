import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import LoadingApi from "../../atom/LoadingApi";
import pageApi from "../../core/API/pageApi";
import Form from "./components/Form";

export default function Register(props) {
  let routerMatch = useRouteMatch();

  let [dataCourse, setDataCourse] = useState();

  useEffect(() => {
    pageApi.courseDetail(routerMatch.params.slug).then((res) => {
      if (res) {
        setDataCourse(res);
      } else {
        setDataCourse("notfound");
      }
    });
  }, []);

  if (!dataCourse)
    return <LoadingApi>Trang đăng ký đang loading ...</LoadingApi>;
  if (dataCourse === "notfound")
    return <LoadingApi>Khoa học không tồn tại</LoadingApi>;

  const { title, count_video, opening_time } = dataCourse.data;
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">{title} </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> {opening_time}
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> {count_video}
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>

            {/* form  */}
            <Form />
          </div>
        </div>
      </section>
      {/* <div class="register-success">
        <div class="contain">
            <div class="main-title">đăng ký thành công</div>
            <p>
                <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                hoặc số điện thoại của bạn.
            </p>
        </div>
        <a href="//" class="btn main rect">về trang chủ</a>
    </div> */}
    </main>
  );
}
