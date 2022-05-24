import { FunctionComponent } from "react";
import DiscordIcon from "~icons/mdi/discord";
import RedditIcon from "~icons/mdi/reddit";
// import tw from "tailwind-styled-components";

export const TableFooter: FunctionComponent = ({ className = "" }) => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
          Supported by our forward-thinking communities
        </h2>
        <div className=" mt-8 grid grid-cols-2 gap-8 md:grid-cols-36 lg:grid-cols-3 mx-auto">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <a
              href="https://www.reddit.com/r/ethfinance"
              target="_blank"
              className="text-center text-gray-400 hover:text-gray-500 text-sm font-semibold uppercase tracking-wide"
            >
              <RedditIcon className="inline-flex h-8 w-auto" />
              &nbsp; r/ethfinance
            </a>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <a
              href="https://www.reddit.com/r/ethstaker"
              target="_blank"
              className="text-center text-gray-400 hover:text-gray-500 text-sm font-semibold uppercase tracking-wide"
            >
              <RedditIcon className="inline-flex h-8 w-auto" />
              &nbsp; r/ethstaker
            </a>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <a
              href="https://discord.gg/EVMavericks"
              target="_blank"
              className="text-center text-gray-400 hover:text-gray-500 text-sm font-semibold uppercase tracking-wide"
            >
              <DiscordIcon className="inline-flex h-8 w-auto" />
              &nbsp; EVMavericks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const Text = tw.div`text-center text-gray-400 text-sm font-semibold uppercase tracking-wide`;
