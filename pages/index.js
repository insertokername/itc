import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="background-periodic text-black text-base md:text-xl">
      <NextSeo
        title="Interact Oradea"
        description="Interact Oradea – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Interact Oradea",
          description: "Plutonium – where darkness meets the web.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "Interact Oradea",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <section
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(hero-bg.png)",
        }}
      ></section>

      <section className="relative">
        <div className="px-4 pt-10 max-w-[95%] md:max-w-[80%]  mx-auto md:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 text-center items-center font-medium text-sky-700">
            <div className="grid grid-cols-1 items-center">
              <div className="font-[800] text-2xl md:text-3xl md:ml-[10%] md:mr-[5%] md:text-left md:text-6xl text-left">
                ABOUT US
              </div>
              <div className="pt-5 font-[400] text-xl md:text-2xl md:ml-[10%] md:mr-[5%] text-left">
                Clubul Interact Oradea este o organizație non-profit care aparține de clubul Rotary Oradea, cu peste 10 ani de activitate în crearea de noi oportunități pentru tinerii orădeni și dezvoltarea de noi proiecte, atât pentru comunitatea locală cât și pentru tinerii din toată țara.
              </div>
            </div>
            {/* <div className="align-middle">
              caca
            </div> */}
            <div className="row-span">
              <div className="grid grid-rows-1 grid-cols-2 py-10 md:py-5">
                <img src='about-us1.png' style={{ height: '90%' }} className="self-end floating-photo">
                </img>
                <img src='about-us2.png' style={{ height: '90%' }} className="justify-self-end floating-photo">
                </img>
              </div>

              {/* <img src='about-us1.png' style={{ top: '30px', left: '0px', backgroundColor: 'black' }} className="size-2/5 floating-photo">
              </img>
              <img src='about-us2.png' style={{ top: '-30px', left: '0px', backgroundColor: 'black' }} className="size-2/5 floating-photo">
              </img> */}
              {/* <div style={{ paddingTop: '300px', backgroundColor: 'red' }}>
              </div> */}
            </div>
          </div>
          {/* <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Bringing darkness
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                straight to the web.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 md:text-lg">
              Plutonium is a Next.js template styled with TailwindCSS. It boasts
              built-in dark-mode support, configured Next-SEO for the best SEO
              optimizations, and clean, organized, easy-to-edit code.
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800"
                aria-label="learn more"
                rel="noreferrer"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center">GitHub Link</span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow hover:shadow-md md:ml-2"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">See a Demo</span>
                </a>
              </Link>
            </div>
          </div> */}
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/photos/e9TrFZZ72DQ"
              >
                <img
                  className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                  src="/images/placeholder.webp"
                  alt="Placeholder Image"
                />
              </a>
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Maybe we&apos;re bringing brightness too?
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>
      <Sponsors />
      <Features />
      {/*<Pricing />*/}
      <Footer />
    </div >
  );
}
