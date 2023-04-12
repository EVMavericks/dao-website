import { GiftIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline/index.js";
import type { FunctionComponent } from "react";
import { Strong } from "src/components/content";
import { SquarePattern } from "src/components/design";
import { BASE } from "src/config/env";

const communicationFeatures = [
  {
    id: "earth",
    name: "Values",
    description:
      "Not only are pandas a fun symbol for the Merge, but bears in general are also a great way to honor the eco-friendly nature of Ethereum as we switch to Proof of Stake, since much of their habitat has been destroyed",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    id: "supply",
    name: "Supply",
    description: <>The 5,875 supply will be broken down as follows:</>,
    caption: (
      <div className="pt-2 text-sm">
        &nbsp;&nbsp;• <Strong>4,000</Strong> Pandas
        <br />
        &nbsp;&nbsp;• <Strong>1,000</Strong> Special Pandas
        <br />
        &nbsp;&nbsp;• <Strong>300</Strong> Grizzly Bears
        <br />
        &nbsp;&nbsp;• <Strong>300</Strong> Black Bears
        <br />
        &nbsp;&nbsp;• <Strong>275</Strong> Polar Bears
        <br />
      </div>
    ),
    icon: GiftIcon,
  },
];

export const Artwork: FunctionComponent = () => {
  return (
    <div className="relative mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="lg:col-start-2">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Artwork</h3>
          <p className="mt-3 text-lg text-gray-500">
            The Ethereum Improvement Pandas (EIPandas) is a project inspired by the Merge meme where
            a black bear and a white bear merge into a panda bear.
          </p>

          <dl className="mt-10 space-y-10">
            {communicationFeatures.map((item) => (
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

        <div className="relative mt-10 -mx-4 lg:col-start-1 lg:mt-0">
          <SquarePattern className="top-0 left-0 -mt-20" />
          <img
            className="relative mx-auto"
            width={438}
            height={438}
            src={`${BASE}/eipandas/panda_1.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
