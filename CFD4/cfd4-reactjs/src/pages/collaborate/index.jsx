import React from "react";

import HeaderContent from "../../components/headercontent";
import FooterContent from "../../components/footercontent";
import Section from "../../components/section";
import FormField from "../../components/formField";
import Form from "../../components/form";

export default function Collaborate() {
  return (
    <>
      <HeaderContent />
      <main>
        <Section title="liên hệ" type="hợp tác cùng CFD" className="register">
          <Form />
        </Section>
      </main>
      <FooterContent />
    </>
  );
}
