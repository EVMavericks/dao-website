import { FunctionComponent } from "react";
import { SquarePattern } from "src/components/design";
import { Blockquote } from "./Blockquote";

export const AboutSection: FunctionComponent = () => {
  return (
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl space-y-8 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            A note from the creator (u/danksharting)
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 leading-8 sm:text-4xl">
            About the project
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="mx-auto text-gray-500 prose prose-indigo lg:max-w-none">
              <p className="pb-8">
                First and foremost, this project was made for fun. It incorporates a lot of the
                memes we've come to know and love. I didn't create these memes, so I'm not looking
                to profit off of them, which is why the proceeds are directed to ManeNet DAO, who I
                feel are some of the best contributors in the Ethereum ecosystem.
              </p>
              <p className="pb-8">
                I want owning an EIPanda to represent that you were here for the Merge, like a POAP,
                but personalized to you. That is why the whitelist is primarily made from POAP
                holders. I also want this to be a project we can look back on years from now, and
                have a laugh. Anyways, I hope you mint one, and I hope you like it!
              </p>
              <p className="pb-8">
                P.S. - There is no planned DAO and no roadmap for this project. The only official
                communication will come from the @EIPandas twitter account. You are also welcome to
                chat on the EVMavericks' discord. -danksharting
              </p>
            </div>
            {/* <div className="flex mx-auto mt-10 text-base max-w-prose lg:max-w-none">
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
            </div> */}
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
