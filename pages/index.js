import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.heading2Xl}>
          Welcome to the material social network
        </h1>
        <p>
          RevPub is a fully open-source and not-for-profit decentralized social
          media protocol that enables people to more easily share physical items
          and services with one another without money as the medium of exchange.
        </p>
        <p>
          Coming soon: A description of the features, initial design, and source
          code repository.
        </p>
      </section>
    </Layout>
  );
}
