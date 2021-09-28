import Image from "next/image";

const logo = "/assets/img/logo.svg";
const Navbar = () => {
    return (
        <nav className="fixed z-20 bg-white">
            <div className="container mx-auto flex py-8">
                {/* logo */}
                <div className="flex justify-start">
                    <Image src={logo} alt="logo" width="96" height="50"/>
                </div>
                {/* link */}
                <div>
                    {''}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
