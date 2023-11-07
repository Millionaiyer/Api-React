import React from "react";

const Input = ({ type, placeholder,className }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className={` ${className} w-[489px] h-8 px-4 py-2 border-[#E6E6E6] border-[1px] rounded-md`} />
    </>
  );
};

export default Input;
