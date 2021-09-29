import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
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
    )
}

export default Footer;
