import { component$ } from "@builder.io/qwik";
import { LinkWrapper } from "../linkWrapper";

export interface UsesItemProps {
  name?: string;
  description?: string;
  link?: string;
}

export const UsesItem = component$(
  ({ name, description, link }: UsesItemProps) => {
    return (
      <li className="mt-1">
        {link ? (
          <LinkWrapper
            name={name || ""}
            url={link}
            className="underlined relative"
          >
            <strong>{name}</strong>
          </LinkWrapper>
        ) : (
          <strong>{name}</strong>
        )}{" "}
        {description}
      </li>
    );
  }
);
