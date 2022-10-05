import type { Category } from "../../../../types";

export interface MenuProps {
  isOpen: boolean;
  categories: Category[];
  setIsOpen: (value: boolean) => void;
}
