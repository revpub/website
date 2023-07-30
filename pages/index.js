import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import Link from "next/link";

import {
  AtSymbolIcon,
  CodeBracketSquareIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "No Restrictions",
    description:
      "Fully open source, non-commercial, and builds on the well-known ActivityPub protocol so it will always be free to use and update.",
    icon: AtSymbolIcon,
  },
  {
    name: "Zero Trust Model",
    description:
      "Designed from the ground up to have no single point of failure so it's resilient to bad actors, censorship, and corporate takeover attempts.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Portable Accounts",
    description:
      "Change host communities without losing your content or identity.",
    icon: ArrowsUpDownIcon,
  },
];

export default function Home() {
  return (
    <Layout home>
      <div className="mx-[20px] pt-[6rem]">
        <Image
          className="mx-auto mb-[2rem]"
          priority
          src="/images/logo_with_text.svg"
          height={400}
          width={400}
          alt=""
        />
        <section className="sm:w-full md:w-[42rem] mx-auto justify-center">
          <h1>
            Welcome to the <span className="text-gray-500">material</span>{" "}
            social network
          </h1>
          <p className="mdHeading">
            RevPub is a fully open-source and not-for-commercial-use
            decentralized social media protocol that enables people to more
            easily share physical items and services without using money as a
            medium of exchange.
          </p>
        </section>
        <div class="relative flex py-5 w-[80%] mx-auto items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400">Planned Features</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <FeaturesSection />
        <section className="sm:w-full md:w-[42rem] mx-auto justify-center">
          <p className="mdHeading">
            Coming soon: A description of the initial design, frequently asked
            questions, and a developer's blog
          </p>
        </section>
      </div>
    </Layout>
  );
}

function FeaturesSection() {
  return (
    <div className="relative bg-white pt-12">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {features.map((feature) => (
            <div key={feature.name} className="">
              <div className="flow-root rounded-lg bg-pink-50 px-6 pb-8">
                <div className="block -mt-6" href={feature.href}>
                  <span>
                    <span className="inline-flex items-center justify-center rounded-md bg-sky-500 p-3 shadow-lg">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
