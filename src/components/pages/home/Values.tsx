import type { FunctionComponent } from "react";
import BankIcon from "~icons/mdi/bank";
import EarthIcon from "~icons/mdi/earth";
import SchoolIcon from "~icons/mdi/school";

export const Values: FunctionComponent = () => {
  return (
    <section
      className="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <h2 className="sr-only" id="contact-heading">
        Contact us
      </h2>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        {supportLinks.map((link) => (
          <div key={link.name} className="flex flex-col bg-white shadow-xl rounded-2xl">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <div className="absolute top-0 inline-block p-5 bg-indigo-600 shadow-lg transform -translate-y-1/2 rounded-xl">
                <link.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
              <div className="mt-4 text-base text-gray-500">{link.description()}</div>
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

      <p className="max-w-md mx-auto mt-3 text-base text-center text-gray-500 md:mt-5 md:text-sm md:max-w-3xl">
        ManeNet DAO envisions a world with a long-term, self-sufficient, and regenerative
        cryptoeconomic landscape.
      </p>
    </section>
  );
};

const supportLinks = [
  {
    name: "Public Goods",
    href: "#",
    description: () => (
      <>
        <p>ManeNet DAO emerges from the culture of open-source software, the foundation of Web3.</p>
        <br />
        <p>
          ManeNet DAO treasury allocates funding towards public goods that honor this ethos, through
          avenues such as Gitcoin.
        </p>
        <br />
        <p>
          We want to set an example for future Web3 communities: contribute to the infrastructure
          that underpins this space while still providing value to your members.
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
          The current technological landscape of Ethereum is a world of opportunities with
          increasingly complex innovation.
        </p>
        <br />
        <p>
          ManeNet DAO will host and distribute knowledge so the community can remain on the cutting
          edge on this new and exciting frontier.
        </p>
        <br />
        <p>
          The foundation of our community has always been education. We have a history of teaching
          each other, and we want to extend our tradition of discussion amongst intellectually
          honest peers to a wider audience.
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
        <p>We value decentralization in all aspects: of the network and of power.</p>
        <br />
        <p>
          ManeNet DAO actively supports a distributed Ethereum and works to amplify its resilience,
          as well as incentivize decentralization in existing and future projects.
        </p>
        <br />
        <p>
          We believe that decentralization is a means to provide freedom, fairness, and open access
          to every person.
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
