import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Error() {
  return (
    <div className="bg-white">
      <Header />
      <Head>
        <title>404: Page was not found.</title>
      </Head>
      <div className="flex flex-col items-center justify-center px-10 bg-white h-[90vh] md:flex-row md:space-x-6">
        <div className="space-x-2">
          <h1 className="text-6xl font-bold text-gray-900 md:text-8xl md:border-r-2 md:px-6">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            There was an error finding your page.
          </p>
          <Link href="/">
            <a className="px-4 py-2.5 text-black border rounded-lg shadow transition duration-300 hover:shadow-md">
              Return Home
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
