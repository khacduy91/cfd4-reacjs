import React from "react";
import HeaderContent from "../../components/headercontent";
import FooterContent from "../../components/footercontent";

export default function Home() {
  return (
    <>
      <HeaderContent />
      <main>
        <section className="section register">
          <div className="container">
            <div className="course">
              <h2 className="title">đăng ký</h2>
              <h2 className="type">thực chiến front-end căn bản </h2>
            </div>
            <div className="register__wrap">
              <form action="/" method="POST" className="register__form">
                <div className="field">
                  <label>
                    Họ và Tên<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue
                    placeholder="Họ và tên bạn"
                  />
                </div>
                <div className="field">
                  <label>
                    Số điện thoại<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="field">
                  <label>
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue
                    placeholder="Email của bạn"
                  />
                </div>
                <div className="field">
                  <label>
                    URL Facebook<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="facebook"
                    defaultValue
                    placeholder="https://facebook.com"
                  />
                </div>
                <div className="field">
                  <label>Hình thức thanh toán</label>
                  <input
                    type="text"
                    name="payment"
                    defaultValue
                    placeholder="Chuyển khoản"
                  />
                </div>
                <div className="field">
                  <label>Ý kiến cá nhân</label>
                  <input
                    type="text"
                    name="opinion"
                    defaultValue
                    placeholder="Định hướng và mong muốn của bạn"
                  />
                </div>
                <div
                  className="btn-register btn-save"
                  style={{ backgroundColor: "#00afab" }}
                >
                  ĐĂNG KÝ
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <FooterContent />
    </>
  );
}
