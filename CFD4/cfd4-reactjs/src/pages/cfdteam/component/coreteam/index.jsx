import React from "react";

export default function CoreTeam(props) {
  const { className } = props;
  return (
    <div className={`coreteam__${className}`}>
      <div className="row">{props.children}</div>
    </div>
  );
}
