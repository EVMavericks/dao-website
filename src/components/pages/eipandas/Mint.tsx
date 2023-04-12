import { CurrencyDollarIcon, ScaleIcon } from "@heroicons/react/24/outline/index.js";
import type { FunctionComponent } from "react";
import { Link, Strong } from "src/components/content";
import { SquarePattern } from "src/components/design";
import { BASE } from "src/config/env";
import PickaxeIcon from "~icons/mdi/pickaxe";

const transferFeatures = [
  {
    id: "mint",
    name: "Mint details",
    description: (
      <>
        EIPandas will use <Link href="https://www.autominter.com/">AutoMinter</Link> for the mint as
        they launched many successful NFT projects, including EVMavericks.
      </>
    ),
    caption: (
      <div className="pt-2 text-md">
        • Date:{" "}
        <Link target="_blank" href="https://bordel.wtf">
          Predicted Sep 15 (Merge day)
        </Link>{" "}
        <br />• Supply: <Strong>5,875</Strong>
        <br />• Price: <Strong>0.003675 ETH</Strong>
        <br />• Royalty fee: <Strong>7.5%</Strong>
      </div>
    ),
    icon: PickaxeIcon,
  },
  {
    id: "whitelist",
    name: "Whitelist",
    description: <>There are 11,468 addresses whitelisted:</>,
    caption: (
      <div className="pt-2 text-sm">
        • Beacon Chain first <Strong>32,769</Strong> Block Validators (2021)
        <br />• Beacon Chain first <Strong>1,024</Strong> Depositors and Proposers
        <br />• Beacon Chain Genesis Depositor
        <br />• Goerli Testnet Merge Protocol Supporter
        <br />• Kiln Testnet Merge Viewers
        <br />• Ropsten Testnet Merge Protocol Supporter
        <br />• Sepolia Testnet Merge Protocol Supporter
        <br />• EVMavericks NFT holder of the following NFTs as of Sep 10,
      </div>
    ),
    icon: ScaleIcon,
  },
  {
    id: "proceeds",
    name: "Proceeds",
    description: <>The proceeds from the mint and royalties will be split accordingly:</>,
    caption: (
      <div className="pt-2 text-sm">
        • <u>Mint revenue:</u>
        <br />
        &nbsp;&nbsp;• <Strong>50%</Strong> to the ManenetDAO
        <br />
        &nbsp;&nbsp;• <Strong>30%</Strong> to{" "}
        <Link href="https://www.pandasinternational.org/">Pandas International</Link> to adopt our
        very own panda!
        <br />
        &nbsp;&nbsp;• <Strong>20%</Strong> to the artist and collection creator
        <br />
        <br />• <u>Royalties revenue:</u>
        <br />
        &nbsp;&nbsp;• <Strong>100%</Strong> to the ManenetDAO
      </div>
    ),
    icon: CurrencyDollarIcon,
  },
];

export const Mint: FunctionComponent = () => {
  return (
    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
      <div className="relative">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Mint your Panda!
        </h3>
        <p className="mt-3 text-lg text-gray-500">
          The project is made and set up by community members of the ManeNet DAO (a community formed
          from EVMavericks holders). We're hoping for it to be one of the first successful NFT
          projects launched after The Merge.
        </p>

        <dl className="mt-10 space-y-10">
          {transferFeatures.map((item) => (
            <div key={item.id} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {item.description}
                {item.caption}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
        <SquarePattern className="top-0 right-0 -mt-20" />
        <img className="relative mx-auto" width={438} src={`${BASE}/eipandas/meme.png`} alt="" />
        {/* <img
          className="relative mx-auto"
          width={438}
          height={438}
          src={`${BASE}/eipandas/panda_1.png`}
          alt=""
        /> */}
      </div>
    </div>
  );
};

// The project is made and set up by community members of the ManeNet DAO (a community formed from EVMavericks holders).
