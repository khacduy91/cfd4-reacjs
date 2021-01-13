import React from "react";

export default function FormField(props) {
  const { label, required, type, name, placeholder, style } = props;

  return (
    <div className="field">
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        type={type}
        name={name}
        // defaultValue
        placeholder={placeholder}
        style={style}
      />
    </div>
  );
}
