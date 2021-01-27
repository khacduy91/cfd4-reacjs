import React, { useContext } from "react";
import reactDOM from "react-dom";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function RegisterSuccess(props, ref) {
  let appContext = useContext(AppContext);

  function _btnClick() {
    appContext.closeRegisterSuccess();
  }

  //Style
  const styleRegister = {
    background: "white",
    width: "80%",
    padding: "5%",
    textAlign: "center",
  };
  return reactDOM.createPortal(
    <div
      className="popup-form popup-login"
      ref={ref}
      style={{ display: "none" }}
    >
      <div className="register-success" style={styleRegister}>
        <div className="contain">
          <div className="main-title">đăng ký thành công</div>
          <p>
            <strong>
              Chào mừng {props.name} đã trở thành thành viên mới của CFD Team.
            </strong>
            <br />
            Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi
            sẽ chủ động liên lạc với bạn thông qua facebook hoặc số điện thoại
            của bạn.
          </p>
        </div>
        <Link to="/" className="btn main rect" onClick={_btnClick}>
          về trang chủ
        </Link>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default React.forwardRef(RegisterSuccess);
