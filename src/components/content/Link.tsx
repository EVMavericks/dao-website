import { FunctionComponent } from "react";
import { classNames } from "src/utils";

export const Link: FunctionComponent<HTMLAnchorElement> = ({
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
