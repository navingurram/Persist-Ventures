import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-scroll";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigation = [
    { name: "Features", href: "features", id: 1 },
    { name: "Diet Plan", href: "dietplan", id: 2 },
    { name: "Workout Plans", href: "dietplan", id: 3 },
    { name: "Blog", href: "blog", id: 4 },
    { name: "FAQs", href: "faqs", id: 5 },
    { name: "Contact Us", href: "contact", id: 5 },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 flex items-center text-white justify-between ${
          isScrolled
            ? "shadow-md bg-orange-400 text-white transition-all duration-700 bg-none"
            : ""
        }`}
      >
        <div className="container px-4 py-3 md:py-2">
          <div className="flex justify-between items-center">
            <div>
              <Link className="flex items-center gap-3">
              
                <a href="/"><h1 className="text-3xl font-bold cursor-pointer">Gym Fluencer</h1></a>
                {/* <span className='text-2xl sm:text-2xl font-semibold'>Infosai Software</span> */}
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navigation.map((item, id) => {
                  return (
                    <li key={item.id} className="cursor-pointer py-4">
                      <Link
                        activeClass="active"
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="relative text-[15.5px] font-semibold hover:text-orange-800
                                                transition-all duration-300 navlink"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <button className="hidden lg:inline-block bg-orange-500 text-white rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300 p-2 mr-5">
                Get Started
              </button>
              <button className="hidden lg:inline-block bg-orange-500 text-white rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300 p-2">
                Log In
              </button>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              {mobileMenuOpen ? (
                <VscChromeClose
                  onClick={toggleMenu}
                  className="text-2xl cursor-pointer transition-all duration-300"
                />
              ) : (
                <HiOutlineMenuAlt1
                  onClick={toggleMenu}
                  className="text-2xl cursor-pointer transition-all duration-300"
                />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Navlinks Section */}
        <ResponsiveMenu mobileMenuOpen={mobileMenuOpen} />
      </nav>
    </>
  );
};

export default Header;
