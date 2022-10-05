import { useState } from "preact/hooks";
import Menu from "./components/Menu";
import type { BurgerProps } from "./types";

const Burger = ({ categories }: BurgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="-my-2 -mr-2 md:hidden">
        <button
          className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Відкрити меню</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
      <Menu isOpen={isOpen} categories={categories} setIsOpen={setIsOpen} />
    </>
  );
};

export default Burger;
