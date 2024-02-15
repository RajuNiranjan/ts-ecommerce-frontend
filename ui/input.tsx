import React from "react";

interface ChildProps {
  type: string;
  labelName: string;
  placeholder: string;
  value: string;
  name: string;
  rightIcon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<ChildProps> = ({
  labelName,
  placeholder,
  name,
  type,
  rightIcon,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-normal text-[16px]">{labelName}</label>
      <div className="border border-blue-300 flex items-center p-2 rounded-md w-full">
        <input
          onChange={onChange}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className="focus:outline-none flex-1"
        />
        <span>{rightIcon}</span>
      </div>
    </div>
  );
};

export default Input;
