import React, { useEffect, useState } from "react";
import LoadingApi from "../../../../atom/LoadingApi";
import userApi from "../../../../core/API/userApi";

export default function Payment() {
  let [dataPayment, setDataPayment] = useState();
  useEffect(
    () =>
      userApi.getDataPayment().then((res) => {
        console.log(res, "a");
        if (res) {
          setDataPayment(res);
        } else if (res) {
          setDataPayment("K tim thay thong tin ng dung");
          console.log(res);
        }
      }),
    []
  );

  if (!dataPayment)
    return <LoadingApi>Lịch sử thanh toán dang dc load</LoadingApi>;

  if (dataPayment === "K tim thay thong tin ng dung")
    return <LoadingApi>K tim thay thong tin ng dung</LoadingApi>;

  return (
    <div className="tab4">
      {dataPayment.data.map((ele, index) => (
        <div className="item itemhistory" key={`dataPayment_${index}`}>
          <div className="name">{ele.course.title}</div>
          <div className="date">09/09/2020</div>
          <div className="money">1.500.000 VND</div>
        </div>
      ))}
    </div>
  );
}
