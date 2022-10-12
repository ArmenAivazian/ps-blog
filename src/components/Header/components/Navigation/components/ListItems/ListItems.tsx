import { Resources } from "../../../../../../constants/resources";
import type { ListItemsProps } from "./types";

const ListItems = ({ slug, subcategories, posts }: ListItemsProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
        <div>
          <h3 className="text-base font-medium text-gray-500">
            Останні статті
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {posts.map(({ slug, title }) => (
              <li className="truncate text-base">
                <a
                  href={`${Resources.Post}${slug}`}
                  className="font-medium text-gray-900 hover:text-gray-700"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 text-sm">
          <a
            href={`${Resources.Category}${slug}`}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Дивитися всі пости
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        {subcategories.map(({ name, slug, description, icon }) => (
          <a
            href={`${Resources.Category}${slug}`}
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            <span dangerouslySetInnerHTML={{ __html: icon?.text }}></span>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">{name}</p>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
