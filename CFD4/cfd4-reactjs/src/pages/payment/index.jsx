import React from "react";
import HeaderContent from "../../components/headercontent";
import FooterContent from "../../components/footercontent";
import Section from "../../components/section";
import PaymentItem from "../../components/paymentItem";

export default function Payment() {
  return (
    <>
      <HeaderContent />
      <main>
        <Section type="Thanh Toán" className="payment">
          <PaymentItem
            title="Hình thức thanh toán"
            //1
            subtitle1="Hình thức chuyển khoản"
            content1={
              <div className="card">
                - Thẻ ATM nội địa;
                <br />
                - Thẻ Visa, Master, JCB...;
                <br />- Ví MOMO.
              </div>
            }
            tt1="CFD chỉ gửi xác nhận sau khi học phí được chuyển đến tài khoản
            của CFD và sẽ không chịu trách nhiệm hay hoàn trả học phí khi
            có sai sót trong quá trình chuyển khoản hoặc sai thông tin
            chuyển khoản. Nếu xảy ra sai sót, Bạn vui lòng làm việc với
            ngân hàng để được xử lí."
            //2
            subtitle2="THÔNG TIN TÀI KHOẢN:"
            content2={
              <>
                <ul>
                  <li>
                    {" "}
                    <strong>Chủ tài khoản:</strong>TRAN LE TRONG NGHIA
                  </li>
                  <li>
                    <strong> Số tài khoản:</strong>004704070012672
                  </li>
                  <li>
                    <strong> Ngân hàng:</strong>HD Bank - chi nhánh Nguyễn Trãi
                    (hoặc chọn Tp Hồ Chí Minh)
                  </li>
                  <li>
                    {" "}
                    <strong>Nội dung chuyển khoản: </strong> Họ và tên số điện
                    thoại mã khóa học (ví dụ: Nguyen Tuan Anh 0989998881 CFD2)
                  </li>
                </ul>
                <p>
                  Sau khi thanh toán và CFD nhận được tiền sẽ chủ động nhắn tin
                  để xác nhận.
                </p>
              </>
            }
            tt2=""
            //3
            subtitle3="Hình thức trực tiếp"
            content3=""
            tt3="Hình thức thanh toán này chỉ áp dụng cho các thành viên tham
            gia khóa CFD OFFLINE. Thanh toán ngày đầu tiên khi tham gia
            khóa học."
          />

          <PaymentItem
            title="Hoàn trả học phí"
            tt1="CFD không chịu trách nhiệm hoàn trả học phí trong bất kỳ
                  trường hợp nào trừ khi dịch vụ của CFD bị gián đoạn, trục trặc
                  do lỗi từ phía CFD gây ảnh hưởng nghiêm trọng đến quyền lợi
                  của học viên."
          />

          <PaymentItem
            title="Chính sách ưu đãi"
            tt1="Sẽ được CFD thông báo công khai tại website theo từng chương
                  trình ưu đãi cụ thể."
          />
        </Section>
      </main>
      <FooterContent />
    </>
  );
}
