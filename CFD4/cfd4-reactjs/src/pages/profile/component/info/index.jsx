import React, { useEffect, useState } from "react";
import FormField from "../../../../atom/formField";
import LoadingApi from "../../../../atom/LoadingApi";
import userApi from "../../../../core/API/userApi";
import clearInput from "../../../../core/clearInput";
import { useAuth } from "../../../../hook/useAuth";
import useFormValidate from "../../../../hook/useFormValidate";

export default function Info() {
  //Get data

  let [dataInfo, setDataInfo] = useState();
  useEffect(
    () =>
      userApi.getDataProfile().then((res) => {
        console.log(res, "a");
        if (res) {
          setDataInfo(res);
        } else if (res) {
          setDataInfo("K tim thay thong tin ng dung");
          console.log(res);
        }
      }),
    []
  );

  //Chang info
  let { form, inputChange, error, submit } = useFormValidate(
    {
      name: "",
      phone: "",
      fb: "",
      skype: "",
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
        fb: {
          required: true,
          pattern: "facebook",
        },
        skype: {
          required: true,
        },
      },
      message: {
        name: {
          pattern: "Ho va ten không đúng định dạng",
        },
        skype: {
          pattern: "Skype khong dc de trong",
        },
      },
    }
  );

  let [message, setMessage] = useState();
  let auth = useAuth();

  async function _btnClick(e) {
    e.preventDefault();

    console.log(form);
    let error = submit();
    if (Object.keys(error).length === 0) {
      userApi.updateProfile(form).then((res) => {
        console.log(res);

        if (res.data) {
          setMessage("Bạn đã cập nhật thông tin tài khoản thành công");
          window.location.reload();
          clearInput("profile_Info");
        }
      });
    }
  }

  if (!dataInfo) return <LoadingApi>Thong tin tk dang dc load</LoadingApi>;

  if (dataInfo === "K tim thay thong tin ng dung")
    return <LoadingApi>K tim thay thong tin ng dung</LoadingApi>;

  return (
    <div className="tab1" id="profile_Info">
      <FormField
        label="Họ và Tên"
        type="text"
        name="name"
        defaultValue={dataInfo.name}
        required
        onChange={(e) => inputChange(e)}
        errorMsg={error.name}
      />
      <FormField
        label="Số điện thoại"
        type="text"
        name="phone"
        defaultValue={dataInfo.phone}
        required
        onChange={(e) => inputChange(e)}
        errorMsg={error.phone}
      />
      <FormField
        label="Email"
        type="text"
        // name="email"
        defaultValue={dataInfo.email}
        required
        // onChange={(e) => inputChange(e)}
        errorMsg={error.email}
        disabled
      />
      <FormField
        label="Facebook"
        type="text"
        name="fb"
        defaultValue={dataInfo.fb}
        required
        onChange={(e) => inputChange(e)}
        errorMsg={error.facebook}
      />
      <FormField
        label="Skype"
        type="text"
        name="skype"
        defaultValue={dataInfo.skype}
        value={dataInfo.skype}
        required
        onChange={(e) => inputChange(e)}
        errorMsg={error.website}
      />

      {/* Message  */}
      <p>{message}</p>
      <div className="btn main rect" onClick={(e) => _btnClick(e)}>
        LƯU LẠI
      </div>
    </div>
  );
}
