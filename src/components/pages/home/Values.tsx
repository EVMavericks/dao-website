import React, { FunctionComponent, HTMLProps } from "react";
import { BASE } from "src/config/env";
import BankIcon from "~icons/mdi/bank";
import SchoolIcon from "~icons/mdi/school";
import TwitterIcon from "~icons/mdi/twitter";
import EarthIcon from "~icons/mdi/earth";

/* This example requires Tailwind CSS v2.0+ */
// import {
//   NewspaperIcon,
//   PhoneIcon,
//   SupportIcon,
// } from "@heroicons/react/outline";

export const Values: FunctionComponent = () => {
  return (
    <div className="bg-white">
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={`${BASE}/assets/evmavericks_full.svg`}
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Values
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            ManeNet DAO envisions a world with a long-term, self-sufficient, and
            regenerative cryptoeconomic landscape.
          </p>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            We see an ecosystem with a greater symbiotic effect between its
            protocols and users; one that enables sustainable and reliable
            public goods funding for projects that need it most.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <div className="mt-4 text-base text-gray-500">
                  {link.description()}
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  {link.caption()}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const supportLinks = [
  {
    name: "Public Goods",
    href: "#",
    description: () => (
      <>
        <p>
          ManeNet DAO emerges from the culture of open-source software, the
          foundation of Web3.
        </p>
        <br />
        <p>
          ManeNet DAO treasury allocates funding towards public goods that honor
          this ethos, through avenues such as Gitcoin.
        </p>
        <br />
        <p>
          We want to set an example for future Web3 communities: contribute to
          the infrastructure that underpins this space while still providing
          value to your members.
        </p>
      </>
    ),
    caption: () => (
      <>
        Our initiatives<span aria-hidden="true"> &rarr;</span>
      </>
    ),
    icon: BankIcon,
  },
  {
    name: "Education",
    href: "#",
    description: () => (
      <>
        <p>
          The current technological landscape of Ethereum is a world of
          opportunities with increasingly complex innovation.
        </p>
        <br />
        <p>
          ManeNet DAO will host and distribute knowledge so the community can
          remain on the cutting edge on this new and exciting frontier.
        </p>
        <br />
        <p>
          The foundation of our community has always been education. We have a
          history of teaching each other, and we want to extend our tradition of
          discussion amongst intellectually honest peers to a wider audience.
        </p>
      </>
    ),
    caption: () => (
      <>
        Our initiatives<span aria-hidden="true"> &rarr;</span>
      </>
    ),
    icon: SchoolIcon,
  },
  {
    name: "Decentralization",
    href: "#",
    description: () => (
      <>
        <p>
          We value decentralization in all aspects: of the network and of power.
        </p>
        <br />
        <p>
          ManeNet DAO actively supports a distributed Ethereum and works to
          amplify its resilience, as well as incentivize decentralization in
          existing and future projects.
        </p>
        <br />
        <p>
          We believe that decentralization is a means to provide freedom,
          fairness, and open access to every person.
        </p>
      </>
    ),
    caption: () => (
      <>
        Our initiatives<span aria-hidden="true"> &rarr;</span>
      </>
    ),
    icon: EarthIcon,
  },
];
