import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <title>RevPub FAQ</title>
      </Head>
      <section className="sm:w-full md:w-[42rem] mx-auto pt-[6rem] justify-center">
        <h1>Frequently Asked Questions</h1>
        <p className="mdHeading">
          This is where frequently asked questions and our responses will go.
        </p>
      </section>
    </Layout>
  );
}
