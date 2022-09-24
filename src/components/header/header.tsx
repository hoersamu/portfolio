import {
  component$,
  mutable,
  useClientEffect$,
  useStore,
  useWatch$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Headroom } from "~/components/headroom";
import { Logo } from "~/components/logo";
import { BurgerIcon } from "../burgerIcon";
import { MobileMenu } from "../mobileMenu";
import { NavigationItem } from "../navigationItem";
import { ThemeToggle } from "../themeToggle";

export const navItems = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/uses",
    title: "Uses",
  },
  {
    href: "/case-studies",
    title: "Case Studies",
  },
];

export const Header = component$(() => {
  const state = useStore({ open: false, path: "" });
  const location = useLocation();

  useClientEffect$(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  useClientEffect$(({ track }) => {
    track(state, "open");
    if (state.open) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  });

  useWatch$(({ track }) => {
    track(location, "pathname");
    state.open = false;
  });

  return (
    <Headroom>
      <header className="relative z-50 px-4 lg:px-20 py-8 backdrop-blur-md w-full">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-lg">
              {navItems.map(({ href, title }) => (
                <NavigationItem href={href} title={title} key={href} />
              ))}
            </ul>
          </nav>
          <button
            className="absolute z-50 top-8 right-4 md:hidden"
            aria-label="Menu"
            onClick$={() => {
              state.open = !state.open;
            }}
          >
            <BurgerIcon isOpen={mutable(state.open)} />
          </button>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mutable(state.open)} />
    </Headroom>
  );
});
