import React from "react";

export const Input = ({ value, handler, text }) => {
  return (
    <input
      style={{ width: "200px" }}
      placeholder={text}
      value={value}
      onChange={(e) => handler(e.target.value)}
    />
  );
};
