import Head from "next/head";
import Navbar from "../components/navbar";

export const siteTitle = "RevPub - Why buy when you can take?";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="RevPub - Why buy when you can take?"
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
}
