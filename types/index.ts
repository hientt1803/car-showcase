import { MouseEventHandler } from "react";

// ? : is mean optinal
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface searchManufactureProps {
  manufacturer: string;
  setManufacturer: (menufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
}
