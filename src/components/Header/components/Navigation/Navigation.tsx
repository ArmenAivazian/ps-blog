import { useState } from "preact/hooks";
import { Resources } from "../../../../constants/resources";
import Burger from "./components/Burger";
import Button from "./components/Button";
import ListItems from "./components/ListItems";
import type { NavigationProps } from "./types";

const Navigation = ({ categories }: NavigationProps) => {
  const [openCategory, setOpenCategory] = useState("");

  const data = categories.data.categories;

  return (
    <>
      <Burger categories={data} />
      <nav className="hidden space-x-10 md:flex">
        {data.map(({ name, slug, subcategories, posts, isMainCategory }) => {
          const isOpenCategory = name === openCategory;
          const style = isOpenCategory ? {} : { display: "none" };

          if (!isMainCategory) return;

          if (subcategories.length)
            return (
              <>
                <div
                  className="fixed w-screen h-screen opacity-0 left-0 top-0"
                  onClick={() => setOpenCategory("")}
                  style={style}
                ></div>
                <div className="relative">
                  <Button
                    name={name}
                    openCategory={openCategory}
                    setOpenCategory={setOpenCategory}
                  />
                  <div
                    className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                    style={style}
                  >
                    <ListItems
                      slug={slug}
                      subcategories={subcategories}
                      posts={posts}
                    />
                  </div>
                </div>
              </>
            );
          return (
            <a
              href={`${Resources.Category}${slug}`}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {name}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
