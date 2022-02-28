import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-700 min-h-screen">
      <Head>
        <title>IS-GAP</title>
        <meta
          name="description"
          content="Academic articles translated for public use."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex flex-col"></main>

      <footer>{/* Acknowledgements & Links */}</footer>
    </div>
  );
};

export default Home;
