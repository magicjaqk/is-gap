import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import Head from "next/head";

const Home: NextPage = (props) => {
  const hello = trpc.useQuery(["hello", { text: "client" }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-700 text-slate-50 min-h-screen">
      <Head>
        <title>IS-GAP</title>
        <meta
          name="description"
          content="Academic articles translated for public use."
        />
        <link rel="icon" href="/search.ico" />
      </Head>

      <main className="w-full h-full flex flex-col">
        <p>{hello.data.greeting}</p>
      </main>

      <footer>{/* Acknowledgements & Links */}</footer>
    </div>
  );
};

export default Home;
