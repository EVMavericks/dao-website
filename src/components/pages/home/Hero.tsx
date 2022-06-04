import { FunctionComponent } from "react";
import { DualSquarePattern, SquarePattern } from "src/components/design";
import { BASE } from "src/config/env";
import DiscordIcon from "~icons/mdi/discord";

export const Hero: FunctionComponent = () => {
  return (
    <section className="relative pb-32 bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={`${BASE}/assets/evmavericks_full.svg`}
          alt=""
        />
        <div
          className="absolute inset-0 bg-gray-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-white">
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
            <span className="block text-orange-400">ManeNet DAO</span>
          </h1>
          <div className="max-w-md mx-auto sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-300">
            <p className="mt-6">
              ManeNet DAO advances the decentralized Ethereum Web3 ecosystem by
              aligning shared member incentives with funding, developing, and
              promoting public goods and education.
            </p>
            {/* <p className="mt-6">
                Let's build an ecosystem with a greater symbiotic effect between
                its protocols and users; one that enables sustainable and
                reliable public goods funding for projects that need it most.
              </p> */}
          </div>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://discord.gg/EVMavericks"
                target="_blank"
                className="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 px-8 py-3 md:px-8 md:py-3 md:text-lg "
              >
                <DiscordIcon />
                &nbsp; Join us on Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
