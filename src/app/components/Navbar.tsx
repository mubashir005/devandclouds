/* "use client";  
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import '../styles/global.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        
        <ul className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/ServicesSection" className="hover:text-gray-400">Services</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/PortfolioSection" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/careers" className="hover:text-gray-400">Careers</Link></li>
          <li><Link href="/blog" className="hover:text-gray-400">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        
        <div className="hidden md:flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
          <FiSearch className="text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white outline-none"
          />
        </div>

        
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <ul className="text-center text-white space-y-4">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/ServicesSection" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/PortfolioSection" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
} */
"use client";
import { useHtmlContext } from 'next/dist/shared/lib/html-context.shared-runtime';
import React, { useState } from 'react'
import Link from "next/link";



const Navbar = () => {

    const[isClick,setisClick] =useState( false);
    const toggleNavbar = ():void =>{
        setisClick (!isClick);
    }

    const[isOpen, setIsOpen]=useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-[#1E2A47] border-b-4 border-[#4A5F7F] text-[#F3F4F6] sticky top-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img src="/logo-01.png" alt="Logo" className="h-12" />
              </Link>
            </div>
      
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block text-[#F3F4F6]">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a id="team-link" className="text-[#949FAF] transition hover:text-[#0EB494] relative" href="/about"> 
                    About 
                    <span className="absolute bottom-[-40px] left-0 w-full h-[2px] bg-[#0EB494] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    </a>
                  </li>
      
                  <li className="relative group">
                    <div className="cursor-pointer flex items-center text-[#949FAF] hover:text-[#0EB494] relative">
                        Services
                        <span className="absolute bottom-[-40px] left-0 w-full h-[2px] bg-[#0EB494] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                        <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                      >
                        <path d="M7 10l5 5 5-5" fill="#949FAF" />  
                      </svg>

                    </div>

                    {/* Dropdown Menu */}
                    <ul className="absolute left-0 top-[52px] w-48 bg-white text-gray-700 px-4 py-3 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/corporate-networking">Corporate Networking</Link>
                        </li>
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/cloud-computing">Cloud Computing</Link>
                        </li>
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/managed-services">Managed Services</Link>
                        </li>
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/universal-communications">Universal Communications</Link>
                        </li>
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/disaster-recovery">Disaster Recovery</Link>
                        </li>
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/audit-compliance">Audit Compliance</Link>
                        </li>
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/software-development">Software Development</Link>
                        </li>
                        <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                        <Link href="/services/mobile-app-development">Mobile App Development</Link>
                        </li>
                    </ul>
                  </li>
      
                  <li>
                  <a id="team-link"
                    className="text-[#949FAF] transition hover:text-[#0EB494] duration-300 ease-in-out relative"
                    href="/team"
                  >
                    Team
                    <span className="absolute bottom-[-40px] left-0 w-full h-[2px] bg-[#0EB494] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                  </a>
                  </li>
      
                  <li>
                  <a id="team-link"
                    className="text-[#949FAF] transition hover:text-[#0EB494] duration-300 ease-in-out relative"
                    href="/team"
                  >
                    Our Clients
                    <span className="absolute bottom-[-40px] left-0 w-full h-[2px] bg-[#0EB494] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                  </a>
                  </li>
      
                  <li>
                    <a id="team-link" className="text-[#949FAF] transition hover:text-[#0EB494] relative" href="/schedule"> 
                    Schedule To Discuss <span className="absolute bottom-[-40px] left-0 w-full h-[2px] bg-[#0EB494] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    </a>
                  </li>
      
                  <li>
                    <a id="team-link" className="text-[#949FAF] transition hover:text-[#0EB494] relative" href="/blog"> 
                    Blog 
                    <span className="absolute bottom-[-40px] left-0 w-full h-[2px] bg-[#0EB494] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    </a>
                  </li>
                  <li>
                    <a id="team-link" className="text-[#949FAF] transition hover:text-[#0EB494] relative" href="/contact"> 
                    Contact 
                    <span className="absolute bottom-[-40px] left-0 w-full h-[2px] bg-[#0EB494] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    </a>
                  </li>
                </ul>
              </nav>
      
              <div className="flex items-center gap-4">

      
                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleNavbar}>
                  {isClick ? (
                        <svg  className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor" >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round"  d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden block bg-white shadow-md">
                <nav aria-label="Global">
                <ul className="flex flex-col space-y-4 p-4">
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-500" href="/about"> About </a>
                    </li>
                    {/* Services Dropdown */}
                    <li>
                        <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full text-left flex items-center text-gray-700 hover:text-black"
                        >
                        Services
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`ml-1 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                            }`}
                        >
                            <path d="M7 10l5 5 5-5" />
                        </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                        <ul className="mt-2 bg-white text-gray-700 px-4 py-3 rounded-lg space-y-2">
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/corporate-networking">Corporate Networking</Link>
                            </li>
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/cloud-computing">Cloud Computing</Link>
                            </li>
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/managed-services">Managed Services</Link>
                            </li>
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/universal-communications">Universal Communications</Link>
                            </li>
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/disaster-recovery">Disaster Recovery</Link>
                            </li>
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/audit-compliance">Audit Compliance</Link>
                            </li>
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/software-development">Software Development</Link>
                            </li>
                            <li className="py-2 hover:text-black hover:bg-gray-100 rounded-md transition">
                            <Link href="/services/mobile-app-development">Mobile App Development</Link>
                            </li>
                        </ul>
                        )}
                    </li>
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-500" href="/team"> Team </a>
                    </li>
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-500" href="/clients"> Our Clients </a>
                    </li>
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-500" href="/schedule"> Schedule To Discuss </a>
                    </li>
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-500" href="/blog"> Blog </a>
                    </li>
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-500" href="/contact"> Contact </a>
                    </li>
                </ul>
                </nav>
                
            </div>
            )}

        </div>
        
      </header>  
      
    );
    {/* <nav className="bg-black w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white text-lg font-bold">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    HOME
                </a>
                <a href="/about" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    ABOUT US
                </a>
                <a href="/services" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    SERVICES
                </a>
                <a href="/team" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    TEAM
                </a>
                <a href="/clients" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    OUR CLIENTS
                </a>
                <a href="/schedule" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    SCHEDULE TO DISCUSS
                </a>
                <a href="/blog" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    BLOG
                </a>
                <a href="/contact" className="text-white text-xs hover:bg-white hover:text-black rounded-lg p-2">
                    CONTACT US
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
                <button
                className='inline-flex items-center justify-center p-2 rounded-md text-white
                 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                 onClick={toggleNavbar}
                >
                    {isClick ? (
                        <svg  className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor" >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg  className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    )}
                </button>
            </div>
          </div>
        </div>
        {isClick && (
            <div className='md:hidden'>
                <div className='px-2 pt-2 pd-3 space-y-1 sm:px-3'>
                <a href="/" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    HOME
                </a>
                <a href="/about" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    ABOUT US
                </a>
                <a href="/services" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    SERVICES
                </a>
                <a href="/team" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    TEAM
                </a>
                <a href="/clients" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    OUR CLIENTS
                </a>
                <a href="/schedule" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    SCHEDULE TO DISCUSS
                </a>
                <a href="/blog" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    BLOG
                </a>
                <a href="/contact" className="text-white text-xs block hover:bg-white hover:text-black rounded-lg p-2">
                    CONTACT US
                </a>
                </div>
            </div>
        )}
      </nav> */}
  };
  
  export default Navbar;
  
                    