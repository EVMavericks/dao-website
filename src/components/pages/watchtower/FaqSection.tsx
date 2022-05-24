import { FunctionComponent } from "react";

const FAQ_ITEMS = [
  {
    question: "Why is 22% important?",
    answer:
      "If each entity is limited to 22% of the validators on the beacon chain, it takes more than three entities in collusion to finalize the chain with inaccurate data. At the same time, 22% control is still viable as any one entity could go down without threatening finality of the chain.",
  },
  {
    question: "Why 22% precisely?",
    answer:
      "One threshold percentage had to be chosen to simplify this catalog's scope and prevent varied (and unfair) thresholds across staking entities. 22% is becoming a popular threshold in the community as it represents a middle ground between the entirely new set of dangers >33% control brings while still not going too low to discourage staking entity committment all together.",
  },
  {
    question: "What happens at 33%?",
    answer:
      "If any entity controls 33% of the network they can disrupt the network by preventing finalization since 66% of validators need to agree on the chain for finalization. It's easy to assume that this would be a malicious attack, but there are plenty of scenarios where a well-meaning entity with 33% could be forced to go offline against their will - consider something like a ransomeware attack that cripples one entity for a prolonged period.",
  },
  {
    question: "Are you fighting against X?",
    answer:
      "Improving decentralization on Etherem doesn't mean we're fighting against anyone, it means we're fighting for the network.",
  },
];

export const FaqSection: FunctionComponent = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can't find the answer you're looking for? Reach out to us on{" "}
              <a
                href="https://discord.gg/EVMavericks"
                target="_blank"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                discord
              </a>
              .
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
