import React from "react";
import HeaderContent from "../../components/headercontent";
import FooterContent from "../../components/footercontent";
import Section from "../../components/section";
import CoreTeam from "../../components/coreteam";
import CoreTeamItem from "../../components/coreteamItem";

export default function Cfdteam() {
  return (
    <>
      <HeaderContent />
      <main>
        <Section
          title={
            <>
              "Lorem ipsum dolor sit amet consectetur adipiscing elit."
              <br /> "aliquam tincidunt elementum sem non luctus"
            </>
          }
          type="CFD TEAM"
        >
          <CoreTeam className="teacher">
            <CoreTeamItem
              imageUrl="/img/teacher-1.jpg"
              imageAlt="trần nghĩa"
              name="trần nghĩa"
              job="Founder &amp; Creative Front-End Developer"
              isStudent="false"
            />
            <CoreTeamItem
              imageUrl="/img/teacher-2.jpg"
              imageAlt="đặng thuyền vương"
              name="đặng thuyền vương"
              job="Co-Founder &amp; Fullstack Developer"
              isStudent="false"
            />
            <CoreTeamItem
              imageUrl="/img/teacher-3.jpg"
              imageAlt="đặng thuyền quân"
              name="đặng thuyền quân"
              job="Co-Founder &amp; Backend Developer"
              isStudent="false"
            />
            <CoreTeamItem
              imageUrl="/img/teacher-4.jpg"
              imageAlt="nguyễn đức huy"
              name="nguyễn đức huy"
              job="Co-Founder &amp; Front-End Developer"
              isStudent="false"
            />
          </CoreTeam>

          {/* Student  */}

          <CoreTeam className="student">
            <CoreTeamItem
              imageUrl="/img/student-1.jpg"
              imageAlt="Diệp anh thy"
              name="Diệp anh thy"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-2.jpg"
              imageAlt="Huỳnh tiến tài"
              name="Huỳnh tiến tài"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-3.jpg"
              imageAlt="Ngô Thành Long"
              name="Ngô Thành Long"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-4.jpg"
              imageAlt="Trần Anh Tuấn"
              name="Trần Anh Tuấn"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-5.jpg"
              imageAlt="Ngô Thành Long"
              name="Ngô Thành Long"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/teacher-2.jpg"
              imageAlt="Nguyễn Thanh Tùng"
              name="Nguyễn Thanh Tùng"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-2.jpg"
              imageAlt="Phạm Thành Trung"
              name="Phạm Thành Trung"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/teacher-3.jpg"
              imageAlt="Lê Đình Văn"
              name="Lê Đình Văn"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-1.jpg"
              imageAlt="Diệp anh thy"
              name="Diệp anh thy"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-2.jpg"
              imageAlt="Huỳnh tiến tài"
              name="Huỳnh tiến tài"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-3.jpg"
              imageAlt="Ngô Thành Long"
              name="Ngô Thành Long"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-4.jpg"
              imageAlt="Trần Anh Tuấn"
              name="Trần Anh Tuấn"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-5.jpg"
              imageAlt="Ngô Thành Long"
              name="Ngô Thành Long"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/teacher-2.jpg"
              imageAlt="Nguyễn Thanh Tùng"
              name="Nguyễn Thanh Tùng"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/student-2.jpg"
              imageAlt="Phạm Thành Trung"
              name="Phạm Thành Trung"
              job="CFD1-Offline"
            />
            <CoreTeamItem
              imageUrl="/img/teacher-3.jpg"
              imageAlt="Lê Đình Văn"
              name="Lê Đình Văn"
              job="CFD1-Offline"
            />
          </CoreTeam>
        </Section>
      </main>
      <FooterContent />
    </>
  );
}
