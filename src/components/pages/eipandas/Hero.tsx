import type { FunctionComponent } from "react";
import { Link, Strong } from "src/components/content";
import { BASE } from "src/config/env";

export const Hero: FunctionComponent = () => {
  return (
    <section className="relative">
      <div className="relative px-4 py-8 mx-auto max-w-7xl sm:py-12 sm:px-6 lg:px-8">
        <img
          className="w-auto h-32 pb-4 pr-2 mx-auto sm:h-48"
          src={`${BASE}/eipandas/logo.png`}
          alt=""
        />
        <h2 className="text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
          Celebrate{" "}
          <Link
            href="https://ethereum.org/en/upgrades/merge/"
            className="font-bold hover:no-underline"
          >
            "The Merge"
          </Link>{" "}
          with a panda!
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
          The Ethereum Improvement Pandas are putting the "fun" back in non-fungible.
          <br />
          <Strong>5,875</Strong> pandas will be available to mint as a way to celebrate the success
          of Ethereum's transition to Proof-of-Stake.
        </p>
      </div>
    </section>
  );
};
