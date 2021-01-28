import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import Coin from "./component/Coin";
import Course from "./component/course";
import Info from "./component/info";
import Payment from "./component/payment";
import Project from "./component/project";

export default function Profile() {
  let auth = useAuth();

  return (
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src="/img/avatar-lg.png" alt="" />
            <div className="camera" />
          </div>
          <div className="name">{auth.login.name}</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink to="/profile">Thông tin tài khoản</NavLink>
              <NavLink to="/profile/course">Khóa học của bạn</NavLink>
              <NavLink to="/profile/project">Dự án đã làm</NavLink>
              <NavLink to="/profile/payment">Lịch sử thanh toán</NavLink>
              <NavLink to="/profile/coin">Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Switch>
                <Route exact path="/profile" component={Info} />
                <Route exact path="/profile/course" component={Course} />
                <Route exact path="/profile/project" component={Project} />
                <Route exact path="/profile/payment" component={Payment} />
                <Route exact path="/profile/coin" component={Coin} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
