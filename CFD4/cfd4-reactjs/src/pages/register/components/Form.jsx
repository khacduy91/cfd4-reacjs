import React, { useContext, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { AppContext } from "../../../App";
import FormField from "../../../atom/formField";
import userApi from "../../../core/API/userApi";
import { useAuth } from "../../../hook/useAuth";
import useFormValidate from "../../../hook/useFormValidate";

export default function Form() {
  let routerMatch = useRouteMatch();
  let { form, inputChange, error, submit } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      fb: "",
    },
    {
      rule: {
        name: {
          required: true,
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        email: {
          required: true,
          pattern: "email",
        },
        fb: {
          required: true,
          pattern: "facebook",
        },
      },
      message: {
        name: {
          pattern: "Ho va ten không đúng định dạng",
        },
      },
    }
  );

  let auth = useAuth();
  let appContext = useContext(AppContext);

  let [errorBtnClick, setErrorBtnClick] = useState("");

  async function _btnClick(e) {
    e.preventDefault();
    console.log(form, "form");

    let error = submit();
    if (Object.keys(error).length === 0) {
      userApi.register(form, routerMatch.params.slug).then((res) => {
        console.log(res);
        if (res.success) {
          appContext.openRegisterSuccess();
        }
      });
    }

    setErrorBtnClick(error);
  }

  return (
    <>
      <div className="form">
        <FormField
          label="Họ và Tên"
          type="text"
          name="name"
          placeholder="Họ và tên bạn"
          required
          onChange={(e) => inputChange(e)}
          errorMsg={error.name}
        />
        <FormField
          label="Số điện thoại"
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          required
          onChange={(e) => inputChange(e)}
          errorMsg={error.phone}
        />
        <FormField
          label="Email"
          type="text"
          name="email"
          placeholder="Email của bạn"
          required
          onChange={(e) => inputChange(e)}
          errorMsg={error.email}
        />
        <FormField
          label="Facebook"
          type="text"
          name="fb"
          placeholder="Đường dẫn website https://"
          required
          onChange={(e) => inputChange(e)}
          errorMsg={error.website}
        />
        <label className="disable">
          <p>Sử dụng COIN</p>
          <div className="checkcontainer">
            Hiện có <strong>300 COIN</strong>
            {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
            {/* Cần ít nhất 200 COIN để giảm giá */}
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark" />
          </div>
        </label>
        <label>
          <p>Hình thức thanh toán</p>
          <div className="select">
            <div className="head">Chuyển khoản</div>
            <div className="sub">
              <a href="/#">Chuyển khoản</a>
              <a href="/#">Thanh toán tiền mặt</a>
            </div>
          </div>
        </label>
        <label>
          <p>Ý kiến cá nhân</p>
          <input
            type="text"
            placeholder="Mong muốn cá nhân và lịch bạn có thể học."
          />
        </label>
        <div className="btn main rect" onClick={_btnClick}>
          đăng ký
        </div>
      </div>
    </>
  );
}
