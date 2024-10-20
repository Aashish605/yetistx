import { useCallback } from "react";

const Navbar = () => {
    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);



    const navitems = (<>
        <li><a onClick={() => scrollToSection('home')} className="text-xl font-semibold md:hover:text-gray-700 cursor-pointer">Home</a></li>
        <li><a onClick={() => scrollToSection('about')} className="text-xl font-semibold md:hover:text-gray-700 cursor-pointer">About</a></li>
        <li><a onClick={() => scrollToSection('tokenomics')} className="text-xl font-semibold md:hover:text-gray-700 cursor-pointer">Tokenomics</a></li>
        <li><a onClick={() => scrollToSection('buy')} className="text-xl font-semibold md:hover:text-gray-700 cursor-pointer">How to buy</a></li>
        <li><a onClick={() => scrollToSection('roadmap')} className="text-xl font-semibold md:hover:text-gray-700 cursor-pointer">Roadmap</a></li>
    </>)


    return (
        <>
            <div className="navbar bg-primary h-[10vh] text-secondary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navitems
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost  text-4xl font-bold ">Yetistx</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNWEgmKXbqPazpYyjIN4Dl2h6sx7pQ2hPTpCjQ1MvnwNDrkQ/viewform?usp=sf_link" className="btn text-white px-4 py-2 mr-8">Buy Now</a>
                </div>
            </div>
        </>
    )
}

export default Navbar