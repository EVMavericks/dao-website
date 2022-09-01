import { FunctionComponent } from "react";

export const Strong: FunctionComponent = ({ children }) => (
  <span className="font-medium text-indigo-500 font-weight-600">
    {children}
  </span>
);
