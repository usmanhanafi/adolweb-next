import Layout from "./Layout";
// import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
const index = () => {
  return (
    <Layout title="Home">
      {/* <Navbar /> */}
      <div className="fixed z-20 w-screen bg-white bg-opacity-30 backdrop-blur-md border-b border-gray-200">
            <div className="container px-6 md:px-0 mx-auto py-2">
                <div>
                    <Image src="/assets/img/logo.svg" alt="logo" width="96" height="50"/>
                </div>
            </div>
        </div>
      {/* hero */}
      <section className="overflow-x-hidden relative">
        <div className="container px-6 md:px-0 mx-auto">
          <div className="h-screen w-screen">
            <div className="flex h-screen items-center">
          <h1 className="font-normal text-black text-5xl md:text-8xl leading-tight tracking-wide font-sans">
            We like to help you build{" "}
            <span className="font-bold text-secondary">Website & Apps</span>
          </h1>
            </div>
          </div>
        </div>
        <div className="absolute right-4 bottom-0">
        <Image src="/assets/img/shape1.svg" width="180" height="180" alt="shape"/>
        </div>
      </section>
      {/* hero */}

      {/* about */}
      <section className="my-12 overflow-hidden">
        <div className="relative w-full bg-right" style={{backgroundImage: "url('/assets/img/bg-about.png')"}}>
        <div className="container px-6 md:px-0 mx-auto py-12">
          <h2 className="font-normal text-black text-5xl md:text-8xl leading-none text-center">We’re<br /><span className="font-bold text-secondary">adolweb</span></h2>
          <p className="font-normal text-black text-2xl md:text-3xl text-center leading-normal mt-4">Professional | High Quality <br />Software Agency</p>
        </div>
            {/* shape */}
        <div className="absolute -left-8 top-0">
        <Image src="/assets/img/shape2.svg" width="400" height="400" alt="shape"/>
        </div>
        </div>
      </section>
      {/* offer */}
      <section className="my-12">
        <div className="relative py-16 overflow-hidden">
        {/* text */}
        <div className="container px-6 md:px-0 mx-auto">
        <div className="md:mx-12 w-full md:w-2/5 py-12">
          <h2 className="font-bold text-secondary text-center md:text-left text-4xl md:text-6xl">We Offer You</h2>
          <p className="font-normal text-black text-2xl text-center md:text-left md:text-3xl leading-normal mt-4">We offering you to planing, build & maintain product web/app for your Startup/Bussiness with high quality and efficient budget.</p>
        </div>
        </div>
        {/* shape */}
        <div className="absolute -right-24 md:-right-8 top-0">
        <Image className="rotate-180" src="/assets/img/shape2.svg" width="400" height="400" alt="shape"/>
        </div>
        </div>
      </section>
      {/* get started */}
      <section>
        <div className="container px-6 md:px-0 mx-auto md:w-1/3 my-12">
        <h2 className="font-normal text-secondary text-center text-4xl md:text-6xl">Let’s get <br /><span className="font-bold">Started</span></h2>
        <form className="flex flex-col items-center md:px-8 mt-8">
          <input className="py-3 px-4 rounded-xl shadow-xl border border-gray-200 my-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full" type="text" name="name" id="name" placeholder="Name"/>
          <input className="py-3 px-4 rounded-xl shadow-xl border border-gray-200 my-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full" type="email" name="email" id="email" placeholder="Email"/>
          <textarea className="py-3 h-36 px-4 rounded-xl shadow-xl border border-gray-200 my-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full" name="name" id="name" placeholder="message"/>
          <button className="py-3 px-12 font-semibold text-white bg-secondary hover:bg-secondary-darken focus:bg-secondary-darken rounded-xl shadow-xl my-4" type="submit">Submit</button>
        </form>
        </div>
      </section>
      {/* contact */}
      <section>
        <div className="container px-6 md:px-0 mx-auto md:w-1/3 text-center py-8 my-12">
        <h2 className="text-black font-semibold text-4xl md:text-6xl">Chat With Us</h2>
        <div className="flex flex-col my-4">
          <p className="font-normal text-gray-400 md:text-xl">Via Telegram</p>
          <p className="text-black font-normal text-3xl md:text-4xl">@adolweb</p>
        </div>
        <div className="flex flex-col my-4">
          <p className="font-normal text-gray-400 md:text-xl">Via Whatsapp</p>
          <p className="text-black font-normal text-3xl md:text-4xl">+62 858 7605 4679</p>
        </div>
        <div className="flex flex-col my-4">
          <p className="font-normal text-gray-400 md:text-xl">Via Email</p>
          <p className="text-black font-normal text-3xl md:text-4xl">Hello@adolweb.com</p>
        </div>
        </div>
      </section>
      <footer className="relative overflow-y-hidden">
        <div className="container px-6 md:px-0 mx-auto py-12 z-10">
          {/* content */}
          <div className="flex flex-col md:px-12">
          <div className="flex flex-col items-center w-full md:w-1/2">
            <div className="md:justify-start">
            <Image src="/assets/img/logo2.svg" width="115" height="50" alt="logo2"/>
            </div>
            <div className="md:justify-start">
            <Image src="/assets/img/weareadolweb.svg" width="280" height="72" alt="we are adolweb"/>
            </div>
            <p className=" my-3 md:my-8 px-8 md:px-0 text-center md:text-left">Mejing Wetan, Ambarketawang, Gamping, Sleman Regency, Special Region of Yogyakarta 55294</p>
          </div>
          {/* copyright */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
            <div className="flex flex-col my-3 md:my-0 text-center md:text-left">
              <p>Create better world with technology</p>
              <p><span className="font-semibold text-secondary mt-4">adolweb</span> 2021</p>
            </div>
            <div className="flex flex-row my-3 md:my-0 justify-center text-center md:text-left">
              <div className="text-black font-semibold mx-4">
              <Link href="#about" >About Us</Link>
              </div>
              <div className="text-black font-semibold mx-4">
              <Link href="#technologi" >Technologi</Link>
              </div>
              <div className="text-black font-semibold mx-4">
              <Link href="#api" >Api</Link>
              </div>
              <div className="text-black font-semibold mx-4">
              <Link href="#blog" >Blog</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="absolute -bottom-48 left-0">
          <Image src="/assets/img/shape2.svg" width="678" height="526" alt="shape"/>
        </div>
      </footer>
    </Layout>
  );
};

export default index;
