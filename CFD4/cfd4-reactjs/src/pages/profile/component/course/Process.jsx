import React, { useEffect, useState } from "react";
import "./index.scss";

export default function Process({ opening_time, count_video }) {
  //rate
  let [rate, setRate] = useState();
  let [process, setProcess] = useState();

  const startDay = new Date(opening_time);
  const startDay_milisec = startDay.getTime();

  const today = new Date(Date.now());
  const today_milisec = today.getTime();

  const period = (count_video / 3) * 7 * 86400 * 1000;

  const endDay_milisec = startDay_milisec + period;

  useEffect(() => {
    if (startDay_milisec >= today_milisec) {
      //   let rate = `${((today - startDay) / (endDay - startDay)) * 100}%`;
      setRate("Khoá học chưa bắt đầu");
    } else if (startDay_milisec < today_milisec) {
      if (endDay_milisec < today_milisec) {
        setRate("Khoá học đã kết thúc");
        setProcess("100%");
      } else {
        let rate_percent = Math.floor(
          ((today_milisec - startDay_milisec) /
            (endDay_milisec - startDay_milisec)) *
            100
        );

        setRate(`${rate_percent}%`);
        setProcess(`${rate_percent}%`);
      }
    }
  }, []);

  // 1 chua bat dau khoa hoc  startDay > toDay
  // 2 dang trong khoa hoc   startDay < today < endDay
  // 3 ket thuc khoa hoc      endDay < to day
  // if (!rate) return <span>aa</span>;

  return (
    <div className="process">
      <div className="line">
        <div
          className="rate"
          style={{
            width: `${process}`,
          }}
        ></div>
        <div>
          <p className="badge processBadge">{rate}</p>
        </div>
      </div>
    </div>
  );
}
