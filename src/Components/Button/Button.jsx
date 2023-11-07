import React from "react";

const Button = ({ onClick, label, type }) => {

  

  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className=" w-[118px] h-[40px] bg-[#1597E4] text-center shadow text-white rounded-md "
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
