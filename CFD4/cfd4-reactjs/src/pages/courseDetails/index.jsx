import React from "react";

import HeaderContent from "../../components/headercontent";
import FooterContent from "../../components/footercontent";
import Section from "../../components/section";
import CourseItem from "../../components/courseItem";
export default function CourseDetails() {
  return (
    <>
      <HeaderContent />
      <main>
        {/* Banner  */}
        <div className="banner__course">
          <div className="banner__course--inner">
            <h2>Thực chiến</h2>
            <h2>Front-End Căn Bản</h2>
            <div className="banner__course--info">
              <p className="info">
                {" "}
                <span>Khai giảng:</span> 12/10/2020
              </p>
              <p className="info">
                {" "}
                <span>Thời lượng:</span> 18 buổi
              </p>
            </div>
            <a href="/#" className="btn btn-round">
              Đăng ký
            </a>
          </div>
          <div className="inner__bottom">
            <div className="video">
              <img src="/img/play.svg" alt="" />
              <span>Video giới thiệu</span>
            </div>
            <div className="price">4.000.000 VND</div>
          </div>
        </div>

        {/* Course Content  */}
        <section className="content__course">
          <div className="container">
            <div className="info__teach">
              Many Laravel apps don’t warrant the complexity of a full front-end
              framework like Vue or React. In this series, we’ll walk through a
              handful of simple ways to add dynamic functionality to your apps.
            </div>
            <div className="info__video">
              <h2 className="title">giới thiệu về khóa học</h2>
              <div
                className="video"
                style={{ backgroundImage: "url(/img/video.jpg)" }}
              >
                <div className="btn-play">
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 79 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="39.4761"
                      cy="38.9106"
                      rx="39.4673"
                      ry="38.8686"
                      fill="#F4F7F6"
                    />
                    <path
                      d="M49.3438 39.2343L35.0369 47.3691V31.0995L49.3438 39.2343Z"
                      fill="#49C5B6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="info__course">
              <h2 className="title">nội dung khóa học</h2>
              <div className="item__course">
                <div className="item__course--tt">
                  <span className="day">Ngày 1</span>
                  <span className="details">Giới thiệu HTML, SEO, BEM.</span>
                </div>
                <div className="item__course--dropdown">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </div>
              </div>
              <div className="item__course">
                <div className="item__course--tt">
                  <span className="day">Ngày 2</span>
                  <span className="details">CSS, CSS3, Flexbox, Grid</span>
                </div>
                <div className="item__course--dropdown">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </div>
              </div>
              <div className="item__course">
                <div className="item__course--tt">
                  <span className="day">Ngày 3</span>
                  <span className="details">Media Queries</span>
                </div>
                <div className="item__course--dropdown">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </div>
              </div>
              <div className="item__course">
                <div className="item__course--tt">
                  <span className="day">Ngày 4</span>
                  <span className="details">Boostrap 4</span>
                </div>
                <div className="item__course--dropdown">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </div>
              </div>
              <div className="item__course">
                <div className="item__course--tt">
                  <span className="day">Ngày 5</span>
                  <span className="details">
                    Thực hành dự án website Landing Page
                  </span>
                </div>
                <div className="item__course--dropdown">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </div>
              </div>
              <div className="item__course">
                <div className="item__course--tt">
                  <span className="day">Ngày 6</span>
                  <span className="details">
                    Cài đặt Grunt và cấu trúc thư mục dự án
                  </span>
                </div>
                <div className="item__course--dropdown">
                  I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions.
                </div>
              </div>
            </div>
            <div className="required">
              <h2 className="title">yêu cầu cần có</h2>
              <div className="row row-check">
                <div className="col-md-6">Đã từng học qua HTML, CSS</div>
                <div className="col-md-6">
                  Cài đặt phần mềm Photoshop, Adobe illustrator, Skype
                </div>
              </div>
              <h2 className="title">hình thức học</h2>
              <div className="row row-check">
                <div className="col-md-6">
                  Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.
                </div>
                <div className="col-md-6">
                  Dạy và thực hành thêm bài tập online thông qua Skype.
                </div>
                <div className="col-md-6">
                  Được các mentor và các bạn trong team CFD hổ trợ thông qua
                  group CFD Facebook hoặc phần mềm điều kiển máy tính.
                </div>
                <div className="col-md-6">
                  Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.
                </div>
              </div>
            </div>
            <div className="date-study">
              <h2 className="title">
                lịch học
                <span>
                  *Lịch học và thời gian có thể thống nhất lại theo số động học
                  viên.
                </span>
              </h2>
              <p>
                <strong>Ngày bắt đầu: </strong> 23/11/2020 <br />
                <strong>Thời gian học: </strong> Thứ 2, Thứ 4, Thứ 6 từ
                18h45-21h45
              </p>
            </div>
            <div className="teacher">
              <h2 className="title">Người dạy</h2>
              <div className="teacher__info">
                <div className="avatar">
                  <img src="/img/avt1.jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">TRẦN NGHĨA</div>
                  <div className="title">
                    Founder CFD &amp; Creative Front-End Developer
                  </div>
                  <div className="intro">
                    My education, career, and even personal life have been
                    molded by one simple principle; well designed information
                    resonates with people and can change lives.I have a passion
                    for making information resonate. It all starts with how
                    people think. With how humans work. As humans we have
                    learned how to read and write and while that is incredible,
                    we are also already hard-wired to do some things a bit more
                    "automatically"
                  </div>
                  <div className="website">
                    <strong>Website:</strong> http://nghiatran.info
                  </div>
                </div>
              </div>
            </div>
            <div className="action">
              <div className="action-wrap">
                <div className="member">
                  <img src="/img/customer.svg" alt="" />
                  <span>12 bạn đã đăng ký</span>
                </div>
                <div className="btn btn-round">đăng ký</div>
              </div>
              <div className="btn btn-continue btn-share">
                <img src="/img/facebook-app-symbol.svg" alt="" />
                <span>Chia sẻ</span>
              </div>
            </div>
          </div>
        </section>

        <Section title="Dự án" type="học viên">
          <div className="row">
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-7.jpg"
              title="Furnitown"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-8.jpg"
              title="GboxMB"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-9.jpg"
              title="Kymco"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
          </div>
        </Section>

        <Section title="Khoá học" type="Liên quan" className="related">
          <div className="row">
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-7.jpg"
              title="Furnitown"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-8.jpg"
              title="GboxMB"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-9.jpg"
              title="Kymco"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
          </div>
        </Section>
      </main>
      <FooterContent />
    </>
  );
}
