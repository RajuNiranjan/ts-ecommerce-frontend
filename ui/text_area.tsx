import React from "react";

interface ChildProps {
  type: string;
  labelName: string;
  placeholder: string;
  value: string;
  name: string;
  height?: string;
  width?: string;
  rightIcon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<ChildProps> = ({
  labelName,
  placeholder,
  name,
  rightIcon,
  value,
  onChange,
  height,
  width,
}) => {
  const inputStyle: React.CSSProperties = {
    height: height || "auto",
    width: width || "auto",
  };
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-normal text-[16px]">{labelName}</label>
      <div
        className="border border-blue-300 flex items-center p-2 rounded-md w-full"
        style={inputStyle}>
        <textarea
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
          className="focus:outline-none flex-1 bg-transparent resize-none"
        />
        <span>{rightIcon}</span>
      </div>
    </div>
  );
};

export default TextArea;
