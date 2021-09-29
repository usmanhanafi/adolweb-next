import Image from "next/image";

const logo = "/assets/img/logo.svg";
const Navbar = () => {
    return (
        <nav className="fixed z-20 w-screen bg-white bg-opacity-30 backdrop-blur-md border-b border-gray-200">
            <div className="container px-6 md:px-0 mx-auto py-2">
                <div>
                    <Image src="/assets/img/logo.svg" alt="logo" width="96" height="50"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
