import React, { useEffect, useState } from "react";
import CourseItem from "../../atom/courseItem";
import LoadingApi from "../../atom/LoadingApi";
import pageApi from "../../core/API/pageApi";

export default function Course() {
  let [dataCourses, setDataCourses] = useState();
  useEffect(
    () =>
      pageApi.course().then((res) => {
        console.log(res, "coursesApi");
        setDataCourses(res);
      }),
    []
  );
  if (!dataCourses) return <LoadingApi>Trang khoá học đang loading</LoadingApi>;
  return (
    <main className="homepage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC CFD</h2>
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">ONLINE</h2>
          </div>
          <div className="list row">
            {dataCourses.online.map((ele, index) => (
              <CourseItem {...ele} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-2 section-blue">
        <div className="container">
          <div className="textbox ">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">OFFLINE</h2>
          </div>
          <div className="list row">
            {dataCourses.offline.map((ele, index) => (
              <CourseItem {...ele} key={index} />
            ))}
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </main>
  );
}
