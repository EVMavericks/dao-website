import type { AnchorHTMLAttributes, FunctionComponent, PropsWithChildren } from "react";
import { classNames } from "src/utils";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  className,
  children,
  target = "_blank",
  ...otherProps
}) => {
  return (
    <a
      className={classNames(
        "text-indigo-500 hover:text-indigo-600 font-medium hover:underline hover:underline-offset-2",
        className
      )}
      target={target}
      {...otherProps}
    >
      {children}
    </a>
  );
};
