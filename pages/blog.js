import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>RevPub Developer Blog</title>
      </Head>
      <section className="sm:w-full md:w-[42rem] mx-auto pt-[6rem] justify-center">
        <h1>Developer Blog</h1>
        <p className="mdHeading">
          This is where news and details on development of the RevPub protocol
          and apps will go.
        </p>
      </section>
    </Layout>
  );
}
