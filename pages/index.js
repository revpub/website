import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <div className="pt-[6rem]">
        <Image
          className="mx-auto mb-[2rem]"
          priority
          src="/images/logo_with_text.svg"
          height={400}
          width={400}
          alt=""
        />
        <section>
          <div className="w-[42rem] mx-auto justify-center">
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
            <p className="mdHeading">
              Coming soon: A description of the features, initial design, and
              source code repository.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
