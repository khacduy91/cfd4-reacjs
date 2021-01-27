import React, { useEffect, useState } from "react";
import CourseItem from "../../atom/courseItem";
import Banner from "./component/banner";
import Section from "../../atom/section";
import Different from "./component/different";
import Testimonial from "./component/testimonial";
import Gallery from "./component/gallery";
import Action from "./component/action";

import pageApi from "../../core/API/pageApi";
import LoadingApi from "../../atom/LoadingApi";

export default function Home() {
  //fetchAPI

  let [dataHome, setDataHome] = useState();

  useEffect(() => {
    pageApi.home().then((res) => {
      setDataHome(res);
      console.log(res);
    });
  }, []);

  if (!dataHome) return <LoadingApi>Home đang loading ....</LoadingApi>;
  return (
    <main className="homepage" id="main">
      <Banner />
      <Section
        topdes="The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal"
        title="Khóa học Offline"
        className="courseoffline"
      >
        <div className="list row">
          {/* DataOffline  */}

          {dataHome.offline.map((ele, index) => (
            <CourseItem {...ele} key={index} />
          ))}
        </div>
      </Section>

      <Section className="courseonline" title="Khóa học Online">
        <div className="list row">
          {/* DataOnline  */}

          {dataHome.online.map((ele, index) => (
            <CourseItem {...ele} key={index} />
          ))}
        </div>
      </Section>

      <Different />
      {/* <section class="section-3">
        <div class="container">
          <div class="video">
            <iframe
              id="video-intro"
              src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              allowscriptaccess="always"
              title="1"
            ></iframe>

            <div class="video-src" data-src="/video/CFD-video-intro.mp4"></div>
            <div class="play-btn btn-video-intro">
              <img src="/img/play-video-btn.png" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      <Testimonial data={dataHome.review} />
      <Gallery data={dataHome.gallery} />
      <Action />
    </main>
  );
}
