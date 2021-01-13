import React from "react";
import HeaderContent from "../../components/headercontent";
import FooterContent from "../../components/footercontent";
import Infomation from "../../components/information";
import ProfileContainer from "../../components/profileContainer";

export default function Profile() {
  return (
    <>
      <HeaderContent />
      <main>
        <section className="section top-info">
          {/* Infomation  */}

          <Infomation
            name="Trần Nghĩa"
            imageUrl="img/avt1.jpg"
            imageAlt=""
            member="Thành viên của team CFD1-OFFLINE"
          />

          {/* Container  */}
          <ProfileContainer
            title1="Thông tin tài khoản"
            title2="Khoá học của tôi"
            title3="Dự án đã làm"
            title4="Lịch sử thanh toán"
          />
        </section>
      </main>{" "}
      <FooterContent />
    </>
  );
}
