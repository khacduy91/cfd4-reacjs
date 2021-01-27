import React, { useReducer } from "react";
import FormField from "../formField";
import Reducer from "./reducer";

export default function CooperateForm() {
  const [state, dispatch] = useReducer(Reducer, {
    data: {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      note: "",
    },
    error: {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      note: "",
    },
  });

  function getFormData(e) {
    //dispatch
    dispatch({
      type: "GET_FORMDATA",
      data: { ...state.data, [state.data[e.target.name]]: [e.target.value] },
    });
  }

  function submit() {
    dispatch({
      type: "SUBMIT",
      data: state.data,
      error: state.error,
    });
  }

  const error = state.error;
  const errorStyle = {
    textAlign: "right",
    display: "block",
    paddingBottom: "10px",
    paddingRight: "50px",
    color: "red",
    fontStyle: "italic",
    fontSize: "12px",
  };

  return (
    <div className="form">
      <FormField
        label="Họ và Tên"
        type="text"
        name="name"
        placeholder="Họ và tên bạn"
        required
        onChange={(e) => getFormData(e)}
        errorMsg={error.name}
        errorStyle={errorStyle}
      />
      <FormField
        label="Số điện thoại"
        type="text"
        name="phone"
        placeholder="Số điện thoại"
        required
        onChange={(e) => getFormData(e)}
        errorMsg={error.phone}
        errorStyle={errorStyle}
      />
      <FormField
        label="Email"
        type="text"
        name="email"
        placeholder="Email của bạn"
        required
        onChange={(e) => getFormData(e)}
        errorMsg={error.email}
        errorStyle={errorStyle}
      />
      <FormField
        label="Website"
        type="text"
        name="website"
        placeholder="Đường dẫn website https://"
        required
        onChange={(e) => getFormData(e)}
        errorMsg={error.website}
        errorStyle={errorStyle}
      />
      <FormField
        label="Tiêu đề"
        type="text"
        name="title"
        placeholder="Tiêu đề liên hệ"
        onChange={(e) => getFormData(e)}
        errorMsg={error.title}
        errorStyle={errorStyle}
      />
      <FormField
        label="Nội dung"
        type="text"
        name="note"
        style={{ height: "150px" }}
        onChange={(e) => getFormData(e)}
      />

      <div className="btn main rect" onClick={() => submit()}>
        GỬI TIN
      </div>
    </div>
  );
}
