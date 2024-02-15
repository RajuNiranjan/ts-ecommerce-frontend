import React from "react";

interface ChildProps {
  lableName: string;
  placeholder: string;
  name: string;
  type: string;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<ChildProps> = ({
  lableName,
  placeholder,
  name,
  type,
  rightIcon,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-normal text-[16px]">{lableName}</label>
      <div className="border border-blue-300 flex items-center p-2 rounded-md">
        {/* <span>icon</span> */}
        <input
          type={type}
          name={name}
          id=""
          placeholder={placeholder}
          className="focus:outline-none flex-1"
        />
        <span>{rightIcon}</span>
      </div>
    </div>
  );
};

export default Input;
