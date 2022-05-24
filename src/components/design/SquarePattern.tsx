import { FunctionComponent } from "react";

export const SquarePattern: FunctionComponent = () => {
  return (
    <svg
      className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
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
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={384}
        fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
      />
    </svg>
  );
};
