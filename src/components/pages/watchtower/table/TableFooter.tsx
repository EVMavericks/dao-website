import { FunctionComponent } from "react";
import DiscordIcon from "~icons/mdi/discord";
import RedditIcon from "~icons/mdi/reddit";
// import tw from "tailwind-styled-components";

export const TableFooter: FunctionComponent = ({ className = "" }) => {
  return (
    <div className="bg-gray-800">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase">
          Supported by our forward-thinking communities
        </h2>
        <div className="mx-auto mt-8  grid grid-cols-2 gap-8 md:grid-cols-36 lg:grid-cols-3">
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <a
              href="https://www.reddit.com/r/ethfinance"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase hover:text-gray-500"
            >
              <RedditIcon className="inline-flex w-auto h-8" />
              &nbsp; r/ethfinance
            </a>
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <a
              href="https://www.reddit.com/r/ethstaker"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase hover:text-gray-500"
            >
              <RedditIcon className="inline-flex w-auto h-8" />
              &nbsp; r/ethstaker
            </a>
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <a
              href="https://discord.gg/EVMavericks"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase hover:text-gray-500"
            >
              <DiscordIcon className="inline-flex w-auto h-8" />
              &nbsp; EVMavericks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const Text = tw.div`text-center text-gray-400 text-sm font-semibold uppercase tracking-wide`;
