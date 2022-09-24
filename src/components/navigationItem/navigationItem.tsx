import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import classNames from "classnames";

export interface NavigationItemProps {
  href: string;
  title: string;
}

export const NavigationItem = component$(
  ({ href, title }: NavigationItemProps) => {
    const { pathname } = useLocation();
    const isActive = pathname.startsWith(href);

    return (
      <li>
        <a
          className={classNames(
            isActive
              ? "font-bold text-off-black dark:text-off-white"
              : "font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white",
            "md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg"
          )}
          href={href}
        >
          {title}
        </a>
      </li>
    );
  }
);
