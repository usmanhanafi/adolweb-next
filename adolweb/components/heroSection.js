import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="overflow-x-hidden relative">
        <div className="container px-6 md:px-0 mx-auto">
          <div className="h-screen w-screen">
            <div className="flex h-screen items-center">
          <h1 className="font-normal text-black text-4xl md:text-8xl leading-tight tracking-wide">
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
    )
}

export default HeroSection;
