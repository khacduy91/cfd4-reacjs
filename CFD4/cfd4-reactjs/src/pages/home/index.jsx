import React from "react";
import HeaderContent from "../../components/headercontent";
import FooterContent from "../../components/footercontent";
import CourseItem from "../../components/courseItem";
import Banner from "../../components/banner";
import Section from "../../components/section";
import CommentBox from "../../components/commentbox";

export default function Home() {
  return (
    <>
      <HeaderContent />
      <main>
        {/* Banner  */}

        <Banner
          imageUrl="/img/img-home.jpg"
          headline="Thực chiến"
          des="Để trở thành creative front-end developer"
          cta="Khoá học"
        />

        {/* Course Online  */}

        <Section
          title="Khoá học"
          type="online"
          className="online"
          introduce={
            <div className="introduce">
              The readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </div>
          }
        >
          <div className="row">
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-1.jpg"
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-2.jpg"
              title="React JS"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-3.jpg"
              title="Animation"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
          </div>
          <div className="row">
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-4.jpg"
              title=" Scss, Grunt JS và Boostrap 4"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />

            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-5.jpg"
              title="UX/UI Design"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />

            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-6.jpg"
              title="Web Responsive"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
          </div>
        </Section>

        {/* Course offline */}

        <Section title="Khoá học" type="offine" className="offline">
          <div className="row">
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-7.jpg"
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />

            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-8.jpg"
              title="Front-end nâng cao"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
            <CourseItem
              imageAlt="alter"
              imageUrl="/img/img-9.jpg"
              title="Laravel framework"
              des="One of the best corporate fashion brands in Sydney"
              avatarAlt=""
              avatarImageUrl="/img/avt.png"
              name="Trần Nghĩa"
            />
          </div>
        </Section>

        {/* Specials  */}

        <section className="section different">
          <div className="container">
            <div className="row">
              <div className="title-different col md-6">
                <h2>
                  những điều
                  <br />
                  <span>đặc biệt</span> tại cfd
                </h2>
                <div className="img-wrap">
                  <div className="img-item img-1">
                    <img src="img/img-d-1.jpg" alt="" />
                  </div>
                  <div className="img-item img-2">
                    <img src="img/img-d-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="content-different col-md-6">
                <div className="content__item">
                  <h2>Không cam kết đầu ra</h2>
                  <p>
                    Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu
                    như cả người hướng dẫn và người học không thật sự tâm huyết
                    và cố gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các
                    thành viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                  </p>
                </div>
                <div className="content__item">
                  <h2>Không phải một lớp học</h2>
                  <p>
                    CFD không phải một lớp học thuần túy, tất cả thành viên là
                    một team, cùng hổ trợ, chia sẻ và giúp đỡ nhau trong suốt
                    quá trình học và sau này, với sự hướng dẫn tận tâm của các
                    thành viên đồng sáng lập CFD.
                  </p>
                </div>
                <div className="content__item">
                  <h2>Không để ai bị bỏ lại phía sau</h2>
                  <p>
                    Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ
                    được đội ngũ CFD kèm cặp đặc biệt, cùng sự hổ trợ từ các
                    thành viên khác trong team. Vì mục tiêu cuối cùng là hoàn
                    thành khóa học thật tốt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment  */}
        <Section title="Cảm nhận" type="Thành viên" className="comment">
          <CommentBox />
        </Section>

        {/* Team  */}
        <Section title="Chúng ta" type="Là một team" className="team">
          <div className="slider">
            <div className="slider--item">
              <img src="img/slider1.jpg" alt="" />
            </div>
            <div className="slider--item">
              <img src="img/slider2.jpg" alt="" />
            </div>
            <div className="slider--item">
              <img src="img/slider3.png" alt="" />
            </div>
            <div className="slider--item">
              <img src="img/slider4.jpg" alt="" />
            </div>
          </div>
        </Section>

        {/* Ready  */}
        <section className="section ready">
          <div className="container">
            <div className="inner__ready">
              <h3>
                Bạn đã sẵn sàng tham gia cùng CFD để tạo ra những sản phẩm có
                giá trị chưa?
              </h3>
              <a href="/#" className="btn btn-round">
                Đăng ký
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterContent />
    </>
  );
}
