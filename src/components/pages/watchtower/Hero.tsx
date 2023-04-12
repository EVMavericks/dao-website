import type { FunctionComponent } from "react";

export const Hero: FunctionComponent = () => {
  return (
    <div className="relative pb-4 sm:pb-8">
      <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">
              {/* <a
                href="https://ethereum.org/en/"
                target="_blank"
                className="inline-flex"
              >
                <span className="sr-only">Ethereum</span>
                <img
                  className="w-auto h-8 px-2 sm:h-12"
                  src={`${BASE}/assets/ethereum.svg`}
                  style={{ fillColor: "red" }}
                  alt=""
                />
              </a> */}
              Decentralization is a
            </span>
            <span className="block text-indigo-600">public good</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            WatchTower tracks staking entities who have committed to cap their scope of control to
            under 22% of the Ethereum network's validators.
          </p>
        </div>
      </div>
    </div>
  );
};
