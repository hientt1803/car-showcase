import { MouseEventHandler } from "react";

// ? : is mean optinal
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface searchManufactureProps {
  manufacturer: string;
  setManufacturer: (menufacturer: string) => void;
}

export interface optionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options?: optionProps[];
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface filterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
