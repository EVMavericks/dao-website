import { FunctionComponent, HTMLProps } from "react";
import DiscordIcon from "~icons/mdi/discord";
import GithubIcon from "~icons/mdi/github";
import HeartIcon from "~icons/mdi/heart";
import TwitterIcon from "~icons/mdi/twitter";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Discord",
      href: "https://discord.gg/EVMavericks",
      icon: (props) => <DiscordIcon {...props} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/evmavericks",
      icon: (props) => <TwitterIcon {...props} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/EVMavericks",
      icon: (props) => <GithubIcon {...props} />,
    },
    {
      name: "LooksRare",
      href: "https://looksrare.org/collections/0x7dDAA898D33D7aB252Ea5F89f96717c47B2fEE6e",
      icon: (props) => (
        <svg viewBox="0 0 148 148" {...props}>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 86C61.3026 86 51 75.7077 51 63C51 50.2923 61.3026 40 74 40C86.6974 40 97 50.2923 97 63C97 75.7077 86.6974 86 74 86ZM64 63C64 68.5251 68.4794 73 74 73C79.5206 73 84 68.5251 84 63C84 57.4749 79.5206 53 74 53C68.4794 53 64 57.4749 64 63Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 63.0304L44 19H104L148 63.0304L74 137L0 63.0304ZM108 46.9998C89.3047 28.2224 58.6953 28.2225 40 46.9999L24 63.0001L40 79.0002C58.6953 97.7776 89.3047 97.7775 108 79.0001L124 63.0001L108 46.9998Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ],
};

export type FooterProps = HTMLProps<HTMLDivElement>;

export const Footer: FunctionComponent<FooterProps> = ({ ...otherProps }) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav> */}
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 " aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy;2022 a ManeNet DAO initiative
        </p>
        <p className="mt-2 text-center text-2xs text-gray-400">
          Built with <HeartIcon className="inline" /> by{" "}
          <a
            href="https://twitter.com/RisingPaw"
            className="text-indigo-400 hover:text-indigo-500"
            target="_blank"
          >
            @RisingPaw
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
