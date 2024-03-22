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
        description="Interact Oradea"
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Interact Oradea",
          description: "Interact Oradea",
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
        className="w-full h-screen bg-cover bg-center min-h-[900px]"
        style={{
          backgroundImage: "url(hero-bg.png)",
        }}
      >
        <div className="text-white max-w-[95%] md:max-w-[80%] mx-auto">
          <div className="xl:ml-[3rem] xl:text-3xl xl:text-left text-xl text-center">
            <h1 className="xl:text-8xl xl:pt-[20%] pt-[65%] text-4xl font-[700]">SERVICE ABOVE SELF</h1>
            <p className="xl:mx-0 xl:max-w-[50%] py-6 mx-auto font-[350]">Trăiește experiențe unice, distrează-te și adu o schimbare în comunitatea locală alături de Interact Oradea!</p>
            <button className="py-[2.6rem] px-[1.8rem] mt-5 bg-sky-900 bg-opacity-60 hover:bg-sky-700 hover:bg-opacity-65 text-white font-bold border border-sky-700 rounded">CHECK OUT OUR PROJECTS!</button>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="px-4 pt-10 max-w-[95%] md:max-w-[80%]  mx-auto md:pt-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-2 text-center items-center font-medium text-sky-700">
            <div className="grid grid-cols-1 items-center">
              <div className="font-[800] text-4xl xl:text-3xl xl:ml-[2rem] xl:mr-[5%] mb:text-left xl:text-6xl text-left">
                ABOUT US
              </div>
              <div className="pt-5 font-[400] text-xl md:text-2xl xl:ml-[2rem] xl:mr-[5%] text-left">
                Clubul Interact Oradea este o organizație non-profit care aparține de clubul Rotary Oradea, cu peste 10 ani de activitate în crearea de noi oportunități pentru tinerii orădeni și dezvoltarea de noi proiecte, atât pentru comunitatea locală cât și pentru tinerii din toată țara.
              </div>
              <button className="xl:text-2xl justify-self-start text-left py-[1rem] px-[1.8rem] xl:ml-[2rem] mt-5 bg-sky-900 bg-opacity-90 hover:bg-sky-700 hover:bg-opacity-70 text-white font-bold border border-sky-700 rounded">READ MORE...</button>
            </div>
            {/* <div className="align-middle">
              caca
            </div> */}
            <div className="row-span">
              <div className="grid grid-rows-1 grid-cols-2 my-10 md:py-5">
                <img src='about-us1.png' className="size-[90%] xl:mt-20 md:mt-14 mt-10 self-end floating-photo">
                </img>
                <img src='about-us2.png' className="size-[90%] justify-self-end floating-photo">
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
        </div>
      </section>

      <section
        className="w-full h-screen bg-cover bg-center min-h-[900px]"
        style={{
          backgroundImage: "url(bg-our-lense.jpg)",
        }}
      >
        <div className="text-white max-w-[95%] md:max-w-[80%] mx-auto">
          <div className="xl:ml-[3rem] xl:text-3xl xl:text-left text-xl text-center">
            <h1 className="xl:text-8xl xl:pt-[20%] pt-[65%] text-4xl font-[700]">THROUGH OUR LENSE...</h1>
            <p className="xl:mx-0 xl:max-w-[50%] mt-6 mx-auto font-[350]">...pentru că cele mai frumoase amintiri sunt cele în care am ajutat pe cineva fără să așteptăm nimic în schimb.</p>
            <p className="xl:mx-0 xl:max-w-[50%] mt-5 mx-auto font-[350]">-Byron Pulsifer</p>
            <button className="py-[2.6rem] px-[1.8rem] mt-11 bg-sky-900 bg-opacity-60 hover:bg-sky-700 hover:bg-opacity-65 text-white font-bold border border-sky-700 rounded">Check out our Gallery!</button>
          </div>
        </div>
      </section>
      {/* <Sponsors />
      <Features />
      <Pricing />
      <Footer /> */}
    </div >
  );
}
