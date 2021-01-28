import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";
import CourseItem from "../../atom/courseItem";
import LoadingApi from "../../atom/LoadingApi";
import pageApi from "../../core/API/pageApi";

export default function CourseDetails() {
  //GET Data
  let [dataCourse, setDataCourse] = useState();
  let [dataCourseRelate, setDataCourseRelate] = useState();

  let routerMatch = useRouteMatch();

  useEffect(() => {
    Promise.all([
      pageApi.courseDetail(routerMatch.params.slug),
      pageApi.courseReLate(routerMatch.params.slug),
    ]).then((res) => {
      console.log(res, "res");
      setDataCourse(res[0].data);
      setDataCourseRelate(res[1].data);
    });
  }, []);

  //JS
  useEffect(() => {
    function coursePage() {
      let $ = window.$;
      function courseDetailAccordion() {
        $(".accordion .accordion__title").on("click", function (e) {
          e.preventDefault();
          // $(this).closest('.accordion').siblings('.active').removeClass('active')
          $(this).next().stop().slideToggle(200);

          let $accordion = $(this).closest(".accordion");
          if ($accordion.hasClass("active")) {
            $accordion.removeClass("active");
          } else {
            $accordion.addClass("active");
          }
          $(this)
            .closest(".accordion")
            .siblings(".active")
            .removeClass("active")
            .find(".content")
            .stop()
            .slideUp(200);
        });
      }
      courseDetailAccordion();
    }
    setTimeout(coursePage, 100);
  }, []);

  if (!dataCourse) return <LoadingApi>Khoá học đang loading..</LoadingApi>;

  const {
    title,
    opening_time,
    count_video,
    long_description,
    schedule,
    teacher,
    content,
    required,
    benefits,
  } = dataCourse;
  return (
    <main className="course-detail" id="main">
      <section className="banner style2" style={{ background: "#cde6fb" }}>
        <div className="container">
          <div className="info">
            <h1>{title}</h1>
            <div className="row">
              <div className="date">
                <strong>Khai giảng:</strong> {opening_time}
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> {count_video}
              </div>
            </div>
            <div
              className="btn white round"
              style={{ "--color-btn": "#70b6f1" }}
            >
              đăng ký
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>{" "}
              <span>giới thiệu</span>
            </div>
            <div className="money">4.000.000 VND</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">{long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>

          {/* Content  */}
          {content.map((ele, index) => (
            <div className="accordion" key={index}>
              <div className="accordion__title">
                <div className="date">Ngày {index + 1}</div>
                <h3>{ele.title}</h3>
              </div>
              <div className="content">{ele.content}</div>
            </div>
          ))}

          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            {/* Required  */}
            {required.map((ele, index) => (
              <div className="col-md-6" key={index}>
                {ele.content}
              </div>
            ))}
          </div>

          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            {benefits.map((ele, index) => (
              <div className="col-md-6" key={index}>
                {ele.content}
              </div>
            ))}
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">
              *Lịch học và thời gian có thể thống nhất lại theo số đông học
              viên.
            </div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> {opening_time} <br />
            <strong>Thời gian học: </strong> {schedule}
          </p>

          {/* Teacher  */}
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src={teacher.avatar.link} alt="" />
              </div>
              <div className="info">
                <div className="name">{teacher.title}</div>
                <div className="title">{teacher.position}</div>
                <p className="intro">{teacher.description}</p>
                <p>
                  <strong>Website:</strong> <a href="/#">{teacher.website}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
            <div className="btn main btn-register round">đăng ký</div>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="/#" className="cover">
                  <img src="/img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="/#">
                    React JS
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="/#" className="cover">
                  <img src="/img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="/#">
                    Animation
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="/#" className="cover">
                  <img src="/img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="/#">
                    Scss, Grunt JS và Boostrap 4
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Relate  */}
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {dataCourseRelate &&
              dataCourseRelate.map((ele, index) => (
                <CourseItem {...ele} key={index} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
