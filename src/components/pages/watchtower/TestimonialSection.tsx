import React, { FunctionComponent, HTMLProps } from "react";
import { Blockquote } from "./Blockquote";
import { SquarePattern } from "src/components/design";

export const TestimonialSection: FunctionComponent = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            The 22% cap signaling
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let's protect Ethereum decentralization
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
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
            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
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
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Tweet your support
                </a>
              </div>
              <div className="rounded-md shadow ml-4">
                <a
                  href="#faq"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <SquarePattern />
            <Blockquote />
          </div>
        </div>
      </div>
    </section>
  );
};
