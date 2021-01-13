import React from "react";
import FormField from "../formField";

export default function Form() {
  return (
    <div className="register__wrap">
      <form action="/" method="POST" className="register__form">
        <FormField
          label="Họ và Tên"
          type="text"
          name="title"
          placeholder="Họ và tên bạn"
          required
        />
        <FormField
          label="Số điện thoại"
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          required
        />
        <FormField
          label="Email"
          type="text"
          name="email"
          placeholder="Email của bạn"
          required
        />
        <FormField
          label="Website"
          type="text"
          name="website"
          placeholder="Đường dẫn website https://"
          required
        />
        <FormField
          label="Tiêu đề"
          type="text"
          name="payment"
          placeholder="Tiêu đề liên hệ"
          required
        />
        <FormField
          label="Nội dung"
          type="text"
          name="content"
          style={{ height: "150px" }}
          required
        />

        <div className="btn-register btn-save">GỬI TIN</div>
      </form>
    </div>
  );
}
