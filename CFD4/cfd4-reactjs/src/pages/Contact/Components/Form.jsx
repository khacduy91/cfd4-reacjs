import React, { useContext } from "react";
import { AppContext } from "../../../App";
import FormField from "../../../atom/formField";
import pageApi from "../../../core/API/pageApi";
import useFormValidate from "../../../hook/useFormValidate";

export default function Form({ SetStatusSubmit }) {
  let { form, inputChange, error, submit } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
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
      },
      message: {
        name: {
          pattern: "Ho va ten không đúng định dạng",
        },
      },
    }
  );

  let appContext = useContext(AppContext);

  async function _btnClick(e) {
    e.preventDefault();
    console.log(form, "form");

    let error = submit();
    if (Object.keys(error).length === 0) {
      pageApi.contact(form).then((res) => {
        if (res.success) {
          appContext.openRegisterSuccess();
          appContext.setNameRegister(form.name);
        }
      });
    }
  }

  return (
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
      <label>
        <p>Website</p>
        <input type="text" placeholder="Đường dẫn website http://" />
      </label>
      <label>
        <p>
          Tiêu đề<span>*</span>
        </p>
        <input type="text" placeholder="Tiêu đề liên hệ" />
      </label>
      <label>
        <p>
          Nội dung<span>*</span>
        </p>
        <textarea name id cols={30} rows={10} defaultValue={""} />
      </label>
      <div className="btn main rect" onClick={(e) => _btnClick(e)}>
        đăng ký
      </div>
    </div>
  );
}
