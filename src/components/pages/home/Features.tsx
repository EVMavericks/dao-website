import { FunctionComponent } from "react";
import AccountGroupIcon from "~icons/mdi/account-group";
import DiscordIcon from "~icons/mdi/discord";
import GoldIcon from "~icons/mdi/gold";
import HammerIcon from "~icons/mdi/hammer-screwdriver";
import ParachuteIcon from "~icons/mdi/parachute";
import PickaxeIcon from "~icons/mdi/pickaxe";
import ShcoolIcon from "~icons/mdi/school";
import VoteIcon from "~icons/mdi/vote";

const features = [
  {
    name: "Snapshot Votes",
    description:
      "Directly weight in on the organization's future by participating in regular snapshot votes.",
    icon: VoteIcon,
  },
  {
    name: "Join a Family",
    description:
      "EVMavericks are bound together with the will to see Ethereum succeed, we share strong values and ideals.",
    icon: AccountGroupIcon,
  },
  {
    name: "Discover the ecosystem",
    description:
      "Thanks to our diverse and talented community, there is countless opportunities to learn and discover.",
    icon: ShcoolIcon,
  },
  {
    name: "Build the Future",
    description:
      "Contribute with us to Ethereum's next chapter, pushing for decentralization as a public good for all.",
    icon: HammerIcon,
  },
  {
    name: "Private Discord Access",
    description:
      "Have access to all private channels on Discord, including our best #alpha related ones.",
    icon: DiscordIcon,
  },
  {
    name: "Partners Airdrops",
    description:
      "Building our ever growing network, you can expect some interesting Airdrops in the future.",
    icon: ParachuteIcon,
  },
  {
    name: "Exclusive NFT mints",
    description:
      "Gain access to pre-mints for partner projects that have ethos aligned with ours.",
    icon: PickaxeIcon,
  },
  {
    name: "Potential Revenue Stream",
    description:
      "We want to build and maintain a thriving community, you might get directly incentivised to hold an EVM.",
    icon: GoldIcon,
  },
];

export const Features: FunctionComponent = () => {
  return (
    <section id="features" className="bg-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Joining the EVMavericks ManeNet DAO
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          To join our DAO you must own an EVMavericks NFT. You can buy one on{" "}
          <a
            href="https://looksrare.org/collections/0x7dDAA898D33D7aB252Ea5F89f96717c47B2fEE6e"
            className="hover:text-indigo-300"
          >
            LooksRare
          </a>{" "}
          or{" "}
          <a
            href="https://opensea.io/collection/evmavericks"
            className="hover:text-indigo-300"
          >
            OpenSea
          </a>
          . Being a member of the EVMavericks family gives you some nice and
          exclusive features:
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-indigo-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
