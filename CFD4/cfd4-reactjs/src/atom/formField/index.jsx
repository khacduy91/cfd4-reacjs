import React from "react";

export default function FormField({
  label = 0,
  required,
  type,
  name,
  placeholder,
  style,
  onChange,
  errorMsg,
  errorStyle,
  disabled,
  defaultValue,
}) {
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
          defaultValue={defaultValue}
          // value={defaultValue}
        />
      </label>
      <span style={errorStyle}>{errorMsg}</span>
    </>
  );
}
