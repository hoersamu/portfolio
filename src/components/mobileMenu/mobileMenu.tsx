import { component$ } from "@builder.io/qwik";
import { navItems } from "../header";
import { NavigationItem } from "../navigationItem";

export interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = component$<MobileMenuProps>(({ isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <div className="fixed md:hidden z-40 transition-all duration-700 delay-100 ease-in-out bg-gradient-to-b from-grey-200 dark:from-grey-900 to-transparent backdrop-blur-xl w-screen p-4 gap-12 top-0 h-screen">
          <ul className="flex flex-col justify-center align-center text-center gap-4 h-full">
            {navItems.map(({ href, title }) => (
              <NavigationItem href={href} title={title} key={href} />
            ))}
            <li className="flex justify-center mt-12"></li>
          </ul>
        </div>
      ) : null}
    </div>
  );
});
