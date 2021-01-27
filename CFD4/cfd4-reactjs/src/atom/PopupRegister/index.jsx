import React, { useContext } from "react";
import reactDOM from "react-dom";
import { AppContext } from "../../App.jsx";
import useFormValidate from "../../hook/useFormValidate.jsx";

const styles = {
  errorText: {
    paddingLeft: 0,
    fontWeight: 400,
  },
};

function PopupRegister(props, ref) {
  //Validate Login

  let { form, inputChange, error, submit } = useFormValidate(
    //initialState
    {
      username: "",
      email: "",
      password: "",
    },
    //Validate
    {
      rule: {
        name: {
          required: true,
        },
        username: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
        },
      },
      message: {
        title: {
          required: "Ho va ten la bat buoc",
        },
        email: {
          pattern: "Email không đúng định dạng",
        },
        password: {
          min: "Password phải dài hơn 6 kí tự",
          max: "Password không được dài hơn 32 kí tự",
        },
      },
    }
  );

  //Submit
  function _btnClick(e) {
    e.preventDefault();

    let error = submit();
    if (Object.keys(error).length === 0) {
      fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("res ", res);
          appContext.closePopupLogin();
          appContext.closePopupRegister();
        });
    }
  }

  //Context
  let appContext = useContext(AppContext);

  return reactDOM.createPortal(
    <div
      className="popup-form popup-login"
      style={{ display: "none" }}
      ref={ref}
    >
      <div className="wrap">
        <div className="ct_login">
          <h2 className="title">Đăng ký</h2>
          <input
            type="text"
            placeholder="Ho va ten"
            name="name"
            onChange={inputChange}
            value={form.title}
          />
          {error.name && (
            <p className="error-text" style={styles.errorText}>
              {error.name}
            </p>
          )}
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={inputChange}
            value={form.username}
          />
          {error.username && (
            <p className="error-text" style={styles.errorText}>
              {error.username}
            </p>
          )}
          <input
            type="password"
            placeholder="Mật khẩu"
            name="password"
            onChange={inputChange}
            value={form.password}
          />
          {error.password && (
            <p className="error-text" style={styles.errorText}>
              {error.password}
            </p>
          )}

          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>

              <p>Nhớ mật khẩu</p>
            </label>
            <a
              href="javascriptjavascript:void(0)"
              className="forget"
              onClick={appContext.openPopupLogin}
            >
              Đăng nhập
            </a>
          </div>
          <div className="btn rect main btn-login" onClick={_btnClick}>
            Đăng ký
          </div>
          <div className="text-register" style={{}}>
            <strong>hoặc đăng ký bằng</strong>
          </div>
          <div>
            <div className="btn btn-icon rect white btn-google">
              <img src="img/google.svg" alt="" />
              Google
            </div>
          </div>
          <div className="close" onClick={appContext.closePopupRegister}>
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default React.forwardRef(PopupRegister);
