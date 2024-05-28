import Image from "next/image";
import React from "react";

type ButtonProps = {
  title: string;
  variant: string;
  type: "button" | "submit" | "reset";
  icon?: string;
};

const Button = ({ title, variant, type, icon }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter rounded-full hidden ${variant}`}>
      {icon && <Image src={icon} alt="icon" className="mr-2" />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
