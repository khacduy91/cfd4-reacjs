import React from "react";

export default function Infomation(props) {
  const { name, imageUrl, imageAlt, member } = props;
  return (
    <div className="information">
      <div className="avatar">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="name">{name}</div>
      <p className="member">{member}</p>
    </div>
  );
}
