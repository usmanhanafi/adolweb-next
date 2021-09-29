import Image from "next/image";
const OfferSection = () => {
    return (
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
    )
}

export default OfferSection;
