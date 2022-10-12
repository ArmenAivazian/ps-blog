import type { MenuProps } from "./types";
import Logo from "../../../../../Logo";
import Button from "./components/Button";
import { Resources } from "../../../../../../../../constants/resources";

const Menu = ({ isOpen, categories, setIsOpen }: MenuProps) => {
  const containerStyle = isOpen ? undefined : { display: "none" };

  return (
    <>
      <div
        className="fixed w-screen h-screen opacity-0 left-0 top-0"
        onClick={() => setIsOpen(false)}
        style={containerStyle}
      ></div>
      <div
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 md:hidden"
        style={containerStyle}
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <Logo class="h-8 w-auto" />
              <Button setIsOpen={setIsOpen} />
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8 pb-3">
                {categories.map(
                  ({ name, slug, subcategories, isMainCategory }) => {
                    if (!isMainCategory) return;

                    const category = (
                      <a
                        href={`${Resources.Category}${slug}`}
                        className="hover:text-indigo-500 text-base font-bold -mb-3"
                      >
                        {name}
                      </a>
                    );
                    return subcategories.length ? (
                      <div className="grid gap-y-8">
                        {category}
                        {subcategories.map(({ slug, name }) => (
                          <a
                            href={`${Resources.Category}${slug}`}
                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 pl-5"
                          >
                            <span className="text-base font-medium text-gray-900">
                              {name}
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      category
                    );
                  }
                )}
              </nav>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <a
              href={`${Resources.Post}all`}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Всі пости
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
