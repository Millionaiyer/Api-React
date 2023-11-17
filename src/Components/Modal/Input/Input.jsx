import React from "react";

const Input = ({
  type,
  placeholder,
  className,
  value = "",
  name,
  onChange,
  checked,
  err,
  errStatus,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        checked={checked}
        className={` ${className} w-[489px] h-8 px-4 py-2 border-[#E6E6E6] border-[1px] rounded-md`}
      />
      <p>{errStatus ? err : ""}</p>
    </>
  );
};

export default Input;
