import type { FunctionComponent, PropsWithChildren } from "react";

export const Strong: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <span className="font-medium text-indigo-500 font-weight-600">{children}</span>
);
