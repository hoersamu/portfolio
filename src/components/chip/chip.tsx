import { component$, HTMLAttributes, Slot } from "@builder.io/qwik";
import classNames from "classnames";

export const Chip = component$(
  ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
    return (
      <span
        className={classNames(
          "rounded-md p-1 shadow-md m-1 dark:border border-gray-700 hover:headline",
          className
        )}
        {...props}
      >
        <Slot />
      </span>
    );
  }
);
