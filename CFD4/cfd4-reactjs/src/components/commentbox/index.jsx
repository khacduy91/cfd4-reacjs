import React from "react";
import CommentTextItem from "../commentTextItem";

export default function CommentBox() {
  return (
    <div className="comment-box">
      <div className="inner_comment-box">
        <div className="item">
          <div className="text">
            <CommentTextItem
              name="Tiến Tài"
              des="Thành viên CFD1"
              content="Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                front-end qua khóa học. Like cho 4 mentor."
              date=" 08/09/2020 "
              className="it1 js-comment-active"
            />
            <CommentTextItem
              name="Nguyễn Thanh Tùng"
              des="Thành viên CFD1"
              content="Khoá học này thực sự rất chất lượng. Mình từ một người làm Sale,
              chưa biết gì về HTML, CSS, JS, mà giờ code được 1 web hoàn
              chỉnh. Mentor thì hỗ trợ nhiệt tình, lên lớp học lý thuyết xong
              là thực chiến luôn, về nhà thì livestream sửa bài, có khi tới
              1-2h sáng luôn. Sau khoá học thì được các mentor chia sẻ kinh
              nghiệm."
              date=" 12/09/2020 "
              className="it2"
            />
            <CommentTextItem
              name="Nguyễn Anh Tuấn"
              des="Thành viên CFD1"
              content="Mình đã từng tự học nhưng bị mất phương hướng trầm trọng, sau
              khóa học mình đã tự code được 2 dự án riêng, 4 mentor dạy và hỗ
              trợ học viên rất có tâm, chuyện livestream giải đáp thắc mắc cho
              học viên tới khuya là thường xuyên. Sau khóa học mình học được
              cách tạo giao diện sao cho đẹp tinh tế, thân thiện với người
              dùng."
              date=" 21/09/2020 "
              className="it3"
            />
            <CommentTextItem
              name="Phạm Thành Trung"
              des="Thành viên CFD1"
              content="Các mentor dạy có tâm, nhiệt tình. Mình là người chưa biết html
              và css, sau khóa học thì mình có thể tự tin code được giao diện
              theo thiết kế và cả việc xử lí các sự kiện bằng javascript và
              jquery."
              date=" 02/10/2020 "
              className="it4"
            />
          </div>

          <div className="images">
            <div className="img">
              <img src="img/member-1.jpg" alt="" />
            </div>
            <div className="img">
              <img src="img/img-member2.jpg" alt="" />
            </div>
            <div className="img">
              <img src="img/img-member3.jpg" alt="" />
            </div>
            <div className="img">
              <img src="img/img-member4.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="list-dots"></div>
        <div className="button button__left" />
        <div className="button button__right" />
      </div>
    </div>
  );
}
