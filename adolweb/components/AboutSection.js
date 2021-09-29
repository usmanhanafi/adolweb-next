import Image from "next/image";
const AboutSection = () => {
    return (
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
    )
}

export default AboutSection;
