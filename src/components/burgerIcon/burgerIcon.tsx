import { component$ } from "@builder.io/qwik";
import classNames from "classnames";

export interface BurgerIconProps {
  isOpen: boolean;
}

export const BurgerIcon = component$<BurgerIconProps>(({ isOpen }) => {
  return (
    <div
      className={classNames("burger-icon", {
        open: isOpen,
      })}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
});
