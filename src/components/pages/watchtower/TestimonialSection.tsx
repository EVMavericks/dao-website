import React, { FunctionComponent, HTMLProps } from "react";
import { Blockquote } from "./Blockquote";
import { SquarePattern } from "src/components/design";

export const TestimonialSection: FunctionComponent = () => {
  return (
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl space-y-8 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            The 22% cap signaling
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 leading-8 sm:text-4xl">
            Let's protect Ethereum decentralization
          </p>
        </div>
        <div className="relative z-10 mx-auto text-base max-w-prose lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500">
            @TODO Inspired by{" "}
            <a href="https://twitter.com/superphiz/status/1525218193756807169">
              tweets
            </a>{" "}
            and{" "}
            <a href="https://www.reddit.com/r/ethfinance/comments/unt9m0/comment/i8d1bw9/?utm_source=share&utm_medium=web2x&context=3">
              Reddit posts
            </a>{" "}
            by{" "}
            <a
              href="https://twitter.com/superphiz"
              className="text-indigo-400 hover:text-indigo-500"
              target="_blank"
            >
              @superphiz
            </a>
            .{" "}
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="mx-auto text-gray-500 prose prose-indigo lg:max-w-none">
              <p>
                In the early days of the Beacon Chain at the start of 2021, it
                seemed as if centralized exchanges like Coinbase and Kraken
                might be poised to dominate Ethereum staking by making it easy
                for their massive user bases to pool their ether and earn
                staking rewards.
              </p>
              <br />
              <p>
                While centralized exchanges are indeed playing a large role in
                the ETH staking game, the largest staker on Ethereum's PoS
                Beacon Chain by far is Lido, a so-called liquid staking pool
                that has amassed a massive 30% share of all staking activity on
                Ethereum, according to Etherscan.
              </p>
            </div>
            <div className="flex mx-auto mt-10 text-base max-w-prose lg:max-w-none">
              <div className="shadow rounded-md">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                >
                  Tweet your support
                </a>
              </div>
              <div className="ml-4 shadow rounded-md">
                <a
                  href="#faq"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-12 text-base max-w-prose lg:mt-0 lg:max-w-none">
            <SquarePattern />
            <Blockquote />
          </div>
        </div>
      </div>
    </section>
  );
};
