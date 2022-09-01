import React, { FunctionComponent, HTMLProps } from "react";
import TwitterIcon from "~icons/mdi/twitter";

export type BlockquoteProps = HTMLProps<HTMLDivElement>;

export const Blockquote: FunctionComponent<BlockquoteProps> = ({
  ...otherProps
}) => {
  return (
    <blockquote className="relative bg-white rounded-lg shadow-lg">
      <div className="px-6 py-8 rounded-t-lg sm:px-10 sm:pt-10 sm:pb-8">
        <TwitterIcon className="absolute -top-1 -left-1 m-4 w-12 h-12 text-[#1d9bf0]" />
        <div className="relative mt-8 text-lg font-medium text-gray-700">
          <svg
            className="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-3 -translate-y-2"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative">
            The @EIPandas are hoping to be the first PFP project on PoS
            Ethereum. Follow us for future whitelist announcements and special
            previews before the NFT drop on merge day!
          </p>
        </div>
      </div>
      <cite className="relative flex items-center px-6 py-5 not-italic bg-indigo-600 rounded-b-lg sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
        <span className="relative border-2 border-white rounded-full sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
          <img
            className="w-12 h-12 bg-indigo-300 rounded-full sm:w-20 sm:h-20"
            src="https://pbs.twimg.com/profile_images/1558466229345697799/SxTcMyO4_400x400.jpg"
            alt=""
          />
        </span>
        <span className="relative ml-4 font-semibold text-indigo-300 leading-6 sm:ml-24 sm:pl-1">
          <a
            href="https://twitter.com/EIPandas"
            target="_blank"
            className="font-semibold text-white sm:inline"
          >
            @EIPandas
          </a>
          <span className="text-sm lg:block">
            Ethereum Beacon Chain community health consultant
          </span>
        </span>
      </cite>
    </blockquote>
  );
};
