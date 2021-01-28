import React, { useEffect, useState } from "react";
import LoadingApi from "../../../../atom/LoadingApi";
import userApi from "../../../../core/API/userApi";

export default function Coin() {
  let [dataCoin, setDataCoin] = useState();
  useEffect(
    () =>
      userApi.getDataCoin().then((res) => {
        console.log(res, "a");
        if (res) {
          setDataCoin(res);
        } else if (res) {
          setDataCoin("K tim thay thong tin ng dung");
          console.log(res);
        }
      }),
    []
  );

  if (!dataCoin) return <LoadingApi>Thong tin tk dang dc load</LoadingApi>;

  if (dataCoin === "K tim thay thong tin ng dung")
    return <LoadingApi>K tim thay thong tin ng dung</LoadingApi>;

  return (
    <div className="tab5 cointab">
      <div className="coininfo">
        <div className="coininfo__box">
          <h3>
            <strong>Thông tin COIN</strong>
          </h3>
          <div className="coininfo__box-ct">
            <div>
              <img src="img/cfd-coin.png" alt="" />
              <p>
                Bạn có <strong>300</strong> COIN
              </p>
            </div>
          </div>
        </div>
        <div className="coininfo__box">
          <h3>
            <strong>Đổi COIN</strong>
          </h3>
          <div className="coininfo__box-ct">
            <label className="checkcontainer">
              Voucher Tiki 100k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Voucher Tiki 200k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Voucher Tiki 500k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Thẻ nạp điện thoại 100k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Thẻ nạp điện thoại 200k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Thẻ nạp điện thoại 500k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <small>
              <i>*Bạn có thể đổi COIN 1 lần</i>
            </small>
          </div>
          <button className="btn main">Đổi COIN</button>
        </div>
      </div>
      <div className="coinhistory">
        <h3>
          <strong>Lịch sử COIN</strong>
        </h3>
        {/* <p>Chưa sử dụng COIN</p> */}
        <div className="itemhistory">
          <div className="td">
            <strong>COIN</strong>
          </div>
          <div className="td">
            <strong>Thời gian</strong>
          </div>
          <div className="td">
            <strong>Nội dung</strong>
          </div>
          <div className="td">
            <strong>Trạng thái</strong>
          </div>
        </div>
        <div className="itemhistory">
          <div className="td">
            <span className="coin red">-300</span>
          </div>
          <div className="td">09/09/2020</div>
          <div className="td">Giới thiệu khóa học cho học viên mới</div>
          <div className="td">Đã chấp nhận</div>
        </div>
        <div className="itemhistory">
          <div className="td">
            <span className="coin">+300</span>
          </div>
          <div className="td">18/10/2020</div>
          <div className="td">Dùng COIN để quy đổi sang Voucher Tiki</div>
          <div className="td">Đã chấp nhận</div>
        </div>
        <div className="itemhistory">
          <div className="td">
            <span className="coin red">-300</span>
          </div>
          <div className="td">18/10/2020</div>
          <div className="td">Dùng COIN để đổi sang Thẻ nạp điện thoại</div>
          <div className="td">Chờ duyệt</div>
        </div>
      </div>
    </div>
  );
}
