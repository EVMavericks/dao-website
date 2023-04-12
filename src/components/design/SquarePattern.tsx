import type { FunctionComponent } from "react";
import { classNames } from "src/utils";

export type SquarePatternProps = { className?: string };

export const SquarePattern: FunctionComponent<SquarePatternProps> = ({ className }) => {
  return (
    <svg
      className={classNames("absolute", className)}
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
    </svg>
  );
};
