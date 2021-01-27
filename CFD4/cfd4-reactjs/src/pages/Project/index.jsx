import React from "react";
import ProjectItem from "../../atom/ProjectItem";

export default function Project() {
  return (
    <main className="projectpage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">dự án</h2>
          <p className="top-des">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
            tincidunt elementum sem non luctus
          </p>
          <div className="list row">
            <ProjectItem
              imageUrl="/img/project/project (2).jpg"
              imageAlt=""
              name="furnitown"
              makeBy="Hoàn thành với Trần Nghĩa"
            />
            <ProjectItem
              imageUrl="/img/project/project (1).jpg"
              imageAlt=""
              name="kymco"
              makeBy="Hoàn thành với Huỳnh Tiến Tài"
            />
            <ProjectItem
              imageUrl="/img/project/project (3).jpg"
              imageAlt=""
              name="gboxmb"
              makeBy="Hoàn thành bởi Nguyễn Văn Tuấn"
            />
            <ProjectItem
              imageUrl="/img/project/project (4).jpg"
              imageAlt=""
              name="wooder"
              makeBy="Hoàn thành bởi Nguyễn Đức Huy"
            />
            <ProjectItem
              imageUrl="/img/project/project (5).jpg"
              imageAlt=""
              name="gboxmb"
              makeBy="Hoàn thành bởi Nguyễn Văn Tuấn"
            />
            <ProjectItem
              imageUrl="/img/project/project (6).jpg"
              imageAlt=""
              name="wooder"
              makeBy="Hoàn thành bởi Nguyễn Đức Huy"
            />
            <ProjectItem
              imageUrl="/img/project/project (1).jpg"
              imageAlt=""
              name="gboxmb"
              makeBy="Hoàn thành bởi Nguyễn Văn Tuấn"
            />
            <ProjectItem
              imageUrl="/img/project/project (2).jpg"
              imageAlt=""
              name="wooder"
              makeBy="Hoàn thành bởi Nguyễn Đức Huy"
            />
          </div>
          <div className="bottom">
            <div className="btn overlay round btn-more">tải thêm</div>
          </div>
        </div>
      </section>
    </main>
  );
}
