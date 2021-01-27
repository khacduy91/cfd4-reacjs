import React, { useContext, useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { AppContext } from "../../App";
import pageApi from "../../core/API/pageApi";
import { useAuth } from "../../hook/useAuth";

let $ = window.$;

export default function HeaderContent({ openPopupLogin }) {
  //Show Menu
  useEffect(() => {
    $(".menu-hambeger").on("click", function () {
      $("body").toggleClass("menu-is-show");
    });

    $("#header nav ul").on("click", function (e) {
      e.stopPropagation();
    });
    $(".overlay_nav").on("click", function (e) {
      $("body").removeClass("menu-is-show");
    });

    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        $("body").removeClass("menu-is-show");
      }
    });
  }, []);

  //Page transition
  let history = useHistory();
  function delayLink(e) {
    e.preventDefault();
    let payloading = document.querySelector(".pageLoading");
    let div = payloading.querySelector(".loading");

    let scale =
      (Math.sqrt(
        Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2)
      ) /
        100) *
      2;
    div.style.transform = `translate(-50%, -50%) scale(${scale})`;
    div.style.opacity = `1`;
    div.style.left = `${e.clientX}px`;
    div.style.top = `${e.clientY}px`;
    setTimeout(() => {
      history.push(e.target.href?.replace(window.location.origin, "") || "/");
      $(".overlay_nav").trigger("click");
    }, 300);
    setTimeout(() => {
      div.style.transform = `translate(-50%, -50%) scale(${0})`;
    }, 600);
  }

  //Context
  let appContext = useContext(AppContext);
  let auth = useAuth();

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger">
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link onClick={delayLink} to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            {auth.login ? (
              <div className="have-login">
                <div className="account">
                  <a href="/#" className="info">
                    <div className="name">{auth.login.name}</div>
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <Link onClick={delayLink} to="/profile/course">
                    Khóa học của tôi
                  </Link>
                  <Link onClick={delayLink} to="/profile">
                    Thông tin tài khoản
                  </Link>
                  <Link onClick={auth.logout} to="/">
                    Đăng xuất
                  </Link>
                </div>
              </div>
            ) : (
              <div className="not-login bg-none">
                <Link
                  className="btn-register"
                  to=""
                  onClick={() => appContext.openPopupLogin()}
                >
                  Đăng nhập
                </Link>
                <Link
                  to=""
                  className="btn main btn-open-login"
                  onClick={() => appContext.openPopupRegister()}
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="/#">Đăng nhập</a>
            <a href="/#">Đăng ký</a>
          </li>
          <li className="active">
            <Link onClick={delayLink} to="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link onClick={delayLink} to="/team">
              CFD Team
            </Link>
          </li>
          <li>
            <Link onClick={delayLink} to="/course">
              Khóa Học
            </Link>
          </li>
          <li>
            <Link onClick={delayLink} to="/project">
              Dự Án
            </Link>
          </li>
          <li>
            <Link onClick={delayLink} to="/contact">
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>

      <div className="overlay_nav"></div>
    </>
  );
}
