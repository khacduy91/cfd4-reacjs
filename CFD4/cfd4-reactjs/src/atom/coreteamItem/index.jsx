import React from "react";

export default function CoreTeamItem(props) {
  const { imageUrl, imageAlt, name, job, isStudent } = props;
  return (
    <div
      className={`${isStudent ? "col-md-6" : "col-md-3"} coreteam__${
        isStudent ? "student" : "teacher"
      }--item`}
    >
      <div className="wrap">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="text">
        <div className="name">{name}</div>
        <div className="job">{job}</div>
      </div>
    </div>
  );
}
