import type { NextPage } from "next";
// import { trpc } from "../utils/trpc";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = (props) => {
  // const hello = trpc.useQuery(["comments.all"]);
  // if (!hello.data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Head>
        <title>IS-GAP</title>
        <meta
          name="description"
          content="Academic articles translated for public use."
        />
        <link rel="icon" href="/search.ico" />
      </Head>

      <main className="w-screen h-screen flex flex-col p-2 px-6 md:px-20">
        <div className="h-full w-full fixed top-0 left-0 -z-10">
          <Image
            alt="bg-image"
            src="/gradienta-bg.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="text-slate-100 text-4xl md:text-8xl font-bold drop-shadow-md mt-72 md:mt-40 w-80 md:w-2/3">
          Academic material for non-academics.
        </h2>
        <button className="w-full bg-slate-100 text-slate-900 font-semibold text-xl rounded-md p-2 mt-8 hover:bg-slate-50 transition-all">
          Search
        </button>
        <button className="w-full bg-black text-slate-100 border-2 border-slate-100 font-semibold text-xl rounded-md p-2 mt-4 hover:bg-slate-100 hover:text-black transition-all">
          Sign In
        </button>
      </main>

      <footer>{/* Acknowledgements & Links */}</footer>
    </div>
  );
};

export default Home;
