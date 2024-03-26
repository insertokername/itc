import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Headerold from "../components/Headerold";
import Footer from "../components/Footer";

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

      {/* <Header /> */}

      <section
        className="w-full h-screen bg-cover bg-center min-h-[100vh]"
        style={{
          backgroundImage: "url(hero-bg.png)",
        }}
      >
        <Header />
        <div className="text-white max-w-[95vw] md:max-w-[85vw] mx-auto">
          <div className="xl:ml-[3rem] xl:text-3xl md:text-left md:text-2xl  text-xl text-center">
            <h1 className="xl:text-8xl pt-[37vh] md:text-5xl text-4xl font-[700]">SERVICE ABOVE SELF</h1>
            <p className="xl:mx-0 xl:max-w-[50%] py-6 mx-auto font-[350]">Trăiește experiențe unice, distrează-te și adu o schimbare în comunitatea locală alături de Interact Oradea!</p>
            <button className="py-[2.6rem] px-[1.8rem] mt-5 bg-sky-900 bg-opacity-60 hover:bg-sky-700 hover:bg-opacity-65 text-white font-bold border border-sky-700 rounded">CHECK OUT OUR PROJECTS!</button>
          </div>
        </div>
      </section>

      <section className="relative md:min-h-[100vh]">
        <div className="px-4 pt-10 max-w-[82vw] md:max-w-[80vw] mx-auto xl:pt-[15vh] md:pt-12" >
          <div className="flex xl:flex-nowrap flex-wrap gap-x-2 text-center items-center font-medium text-sky-700">
            <div className="xl:basis-[75%] grid grid-cols-1 items-center">
              <div className="font-[800] text-4xl md:text-6xl xl:ml-[2rem] xl:mr-[5%] mb:text-left xl:text-7xl text-left">
                ABOUT US
              </div>
              <div className="pt-5 font-[400] text-xl md:text-2xl xl:text-3xl xl:ml-[2rem] xl:mr-[5%] text-left" >
                <p style={{ position: 'relative', zIndex: '1' }}>Clubul Interact Oradea este o organizație non-profit care aparține de clubul Rotary Oradea, cu peste 10 ani de activitate în crearea de noi oportunități pentru tinerii orădeni și dezvoltarea de noi proiecte, atât pentru comunitatea locală cât și pentru tinerii din toată țara.</p>
              </div>
              <button className="text-xl md:text-2xl xl:text-3xl justify-self-start text-left py-[1rem] px-[1.8rem] xl:ml-[2rem] mt-5 bg-sky-900 bg-opacity-90 hover:bg-sky-700 hover:bg-opacity-70 text-white font-bold border border-sky-700 rounded">READ MORE...</button>
            </div>
            <div className="xl:mt-[0] mt-[2vh] justify-self-center">
              <div className="flex flex-wrap md:grid md:grid-rows-1 grid-cols-2 my-10 md:py-5 xl:gap-10 gap-5">
                <img src='about-us1.jpg' className="h-0 md:h-[auto] xl:mt-14 xl:self-end">
                </img>
                <img src='about-us2.jpg' className="justify-self-end">
                </img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full h-screen bg-cover bg-center min-h-[100vh]"
        style={{
          backgroundImage: "url(bg-our-lense.jpg)",
        }}
      >
        <div className="text-white max-w-[95vw] md:max-w-[85vw] mx-auto ">
          <div className="xl:ml-[3rem] xl:text-3xl xl:text-left text-xl text-center">
            <h1 className="xl:text-8xl pt-[31vh] md:text-5xl text-4xl font-[700]">THROUGH OUR LENSE...</h1>
            <p className="xl:mx-0 xl:max-w-[60%] md:max-w-[80%] mt-6 mx-auto font-[350] xl:text-4xl md:text-2xl">...pentru că cele mai frumoase amintiri sunt cele în care am ajutat pe cineva fără să așteptăm nimic în schimb.</p>
            <p className="xl:mx-0 xl:max-w-[50%] mt-5 mx-auto font-[350] xl:text-4xl md:text-2xl">-Byron Pulsifer</p>
            <button className="py-[2.6rem] px-[1.8rem] mt-11 bg-sky-900 bg-opacity-60 hover:bg-sky-700 hover:bg-opacity-65 text-white font-bold border border-sky-700 rounded">Check out our Gallery!</button>
          </div>
        </div>
      </section>

      <section
        className="w-full h-screen bg-cover bg-center min-h-[100vh]"
        style={{
          backgroundImage: "url(bg-create-hope.jpg)",
        }}
      >
        <div className="text-white max-w-[95vw] md:max-w-[70vw] xl:max-w-[90vw] mx-auto">
          <div className="xl:ml-[3rem] md:text-3xl xl:text-left text-xl text-center">
            <h1 className="xl:text-8xl xl:pt-[24vh] pt-[15vh] text-4xl font-[700]">CREATE HOPE IN THE WORLD… </h1>
            
            <div className="text-center xl:mt-[23vh] mt-[10vh] grid xl:grid-cols-4 xl:gap-y-0 md:grid-cols-2 grid-cols-1 gap-y-[5vh] justify-items-center xl:text-3xl">
              <div className="py-[1rem] px-[1.8rem] bg-sky-900 bg-opacity-90 text-white font-bold border border-sky-700 rounded flex flex-col justify-items-left">
                <img src="hope-membrii.png" className="h-[122px] pb-4 w-[auto] mx-auto justify-self-center">
                </img>
                <div className="min-w-[180px]">
                  130 <br/> MEMBRII
                </div>
              </div>

              <div className="py-[1rem] px-[1.8rem] bg-sky-900 bg-opacity-90 text-white font-bold border border-sky-700 rounded flex flex-col justify-items-left">
                <img src="hope-board.png" className="h-[122px] pb-4 w-[auto] mx-auto justify-self-center">
                </img>
                <div >
                  6 <br /> <inline className="xl:text-2xl">MEMBRII BOARD</inline>
                </div>
              </div>

              <div className="py-[1rem] px-[1.8rem] bg-sky-900 bg-opacity-90 text-white font-bold border border-sky-700 rounded flex flex-col justify-items-left">
                <img src="hope-proiecte.png" className="h-[122px] pb-4 w-[auto] mx-auto justify-self-center">
                </img>
                <div className="min-w-[180px]">
                  66+ <br /> PROIECTE
                </div>
              </div>

              <div className="py-[1rem] px-[1.8rem] bg-sky-900 bg-opacity-90 text-white font-bold border border-sky-700 rounded flex flex-col justify-items-left">
                <img src="hope-activitate.png" className="h-[122px] pb-4 w-[auto] mx-auto justify-self-center">
                </img>
                <div className="min-w-[180px]">
                  12 <br /> <inline className="xl:text-[1.5rem]">ANI DE ACTIVITATE</inline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
