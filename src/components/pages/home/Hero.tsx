import { FunctionComponent } from "react";
import { DualSquarePattern } from "src/components/design";
import { BASE } from "src/config/env";

export const Hero: FunctionComponent = () => {
  return (
    <>
      {/* <div className=" -z-10 w-full h-full absolute">
        <img
          className="w-full h-full object-cover"
          src={`${BASE}/assets/evmavericks_full.svg`}
          alt=""
        />
      </div> */}
      <div className="relative pb-4 sm:pb-8">
        <DualSquarePattern />

        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">
                {/* <a
                href="https://ethereum.org/en/"
                target="_blank"
                className="inline-flex"
              >
                <span className="sr-only">Ethereum</span>
                <img
                  className="h-8 w-auto sm:h-12 px-2"
                  src={`${BASE}/assets/ethereum.svg`}
                  style={{ fillColor: "red" }}
                  alt=""
                />
              </a> */}
                EVMavericks
              </span>
              <span className="block text-indigo-600">ManeNet DAO</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              advances the decentralized Ethereum Web3 ecosystem by aligning
              shared member incentives with funding, developing, and promoting
              public goods and education.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
