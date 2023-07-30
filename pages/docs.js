import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function Docs() {
  return (
    <Layout>
      <Head>
        <title>RevPub Documentation</title>
      </Head>
      <section className="sm:w-full md:w-[42rem] mx-auto pt-[6rem] justify-center">
        <h1>Documentation</h1>
        <p className="mdHeading">
          This is where official technical documentation for the RevPub protocol
          will go.
        </p>
      </section>
    </Layout>
  );
}
