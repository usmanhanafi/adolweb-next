import Layout from "./Layout";
import Navbar from "../components/Navbar";
import Image from "next/image";
const index = () => {
  return (
    <Layout title="Home">
      <Navbar />
      {/* hero */}
      <section className="overflow-x-hidden relative">
        <div className="container mx-auto h-screen w-screen">
            <div className="flex h-screen items-center">
          <h1 className="font-normal text-black text-8xl ">
            We like to help you build{" "}
            <span className="font-bold text-secondary">Website & Apps</span>
          </h1>
            </div>
        </div>
        <div className="absolute right-4 bottom-0">
        <Image src="/assets/img/shape1.svg" width="180" height="180" alt="shape"/>
        </div>
      </section>
      {/* hero */}

      {/* about */}
      <section className="my-12 overflow-hidden">
        <div className="relative w-screen" style={{backgroundImage: "url('/assets/img/bg-about.png')"}}>
        <div className="container mx-auto py-12">
          <h2 className="font-normal text-black text-8xl text-center">We’re<br /><span className="font-bold text-secondary">adolweb</span></h2>
          <p className="font-normal text-black text-3xl text-center leading-normal mt-4">Professional | High Quality <br />Software Agency</p>
        </div>
            {/* shape */}
        <div className="absolute -left-8 top-0">
        <Image src="/assets/img/shape2.svg" width="400" height="400" alt="shape"/>
        </div>
        </div>
      </section>
      {/* offer */}
      <section className="my-12">
        <div className="relative py-4 overflow-hidden">
        {/* text */}
        <div className="container mx-auto">
        <div className="mx-12 w-1/2 py-8">
          <h2 className="font-bold text-secondary text-6xl">We Offer You</h2>
          <p className="font-normal text-black text-3xl leading-normal mt-4">We offering you to planing, build & maintain product web/app for your Startup/Bussiness with high quality and efficient budget.</p>
        </div>
        </div>
        {/* shape */}
        <div className="absolute -right-8 top-0">
        <Image className="rotate-180" src="/assets/img/shape2.svg" width="400" height="400" alt="shape"/>
        </div>
        </div>
      </section>
      {/* get started */}
      <section>
        <h2 className="font-normal text-secondary text-6xl">Let’s get <br /><span className="font-bold">Started</span></h2>
      </section>
    </Layout>
  );
};

export default index;
