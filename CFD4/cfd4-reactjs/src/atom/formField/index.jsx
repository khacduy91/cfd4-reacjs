import React from "react";

export default function FormField(props) {
  const {
    label,
    required,
    type,
    name,
    placeholder,
    style,
    onChange,
    errorMsg,
    errorStyle,
    disabled,
  } = props;

  return (
    <>
      <label>
        <p>
          {label}
          {required && <span>*</span>}
        </p>
        <input
          type={type}
          name={name}
          // defaultValue
          placeholder={placeholder}
          style={style}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
      <span style={errorStyle}>{errorMsg}</span>
    </>
  );
}
