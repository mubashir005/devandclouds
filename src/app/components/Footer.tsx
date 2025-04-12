import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer2() {
    return (

        <section>
            <div className="bg-gray-100">
                <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    {/* col 1 */}
                    <div className='p-5'>
                        <h5 className="font-semibold text-xs text-indigo-600">Dev and Clouds</h5>
                        <p>Dev and Clouds, based in Munich, Germany, provides IT solutions to enterprises and SMEs worldwide.</p>

                        {/* Social media section */}
                        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex justify-end">
                        <Link href="https://www.linkedin.com" target="_blank">
                            <div className="w-7 h-7 mx-1 flex items-center justify-center border border-gray-300 rounded-md shadow-md hover:bg-teal-300 transition">
                            <FaLinkedinIn className="text-gray-700 text-sm" />
                            </div>
                        </Link>

                        <Link href="https://www.facebook.com" target="_blank">
                            <div className="w-7 h-7 mx-1 flex items-center justify-center border border-gray-300 rounded-md shadow-md hover:bg-teal-300 transition">
                            <FaFacebookF className="text-gray-700 text-sm" />
                            </div>
                        </Link>

                        <Link href="https://www.youtube.com" target="_blank">
                            <div className="w-7 h-7 mx-1 flex items-center justify-center border border-gray-300 rounded-md shadow-md hover:bg-teal-300 transition">
                            <FaYoutube className="text-gray-700 text-sm" />
                            </div>
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <div className="w-7 h-7 mx-1 flex items-center justify-center border border-gray-300 rounded-md shadow-md hover:bg-teal-300 transition">
                            <FaXTwitter className="text-gray-700 text-sm" />
                            </div>
                        </Link>

                        </div>
                    </div>
                    {/* col 2 */}
                    <div className="p-5">
                        <div className="font-semibold text-xs  uppercase text-indigo-600 ">Resources</div>
                        <Link href="/#">
                        Certifications <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link href="/#">
                        Documentation <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link href="/#">
                        Tutorials <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link href="/#">
                        Support <span className="text-teal-600 text-xs p-1">New</span>
                        </Link>
                    </div>
                    {/* col 3 */}
                    <div className="p-5">
                    <div className="font-semibold text-xs uppercase text-indigo-600">Support</div>
                        <Link href="/#">
                        Help Center <span className="text-teal-600 text-xs p-1">24/7</span>
                        </Link>
                        <Link href="/#">
                        Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link href="/#">
                        Conditons <span className= " text-teal-600 text-xs p-1"></span>
                        </Link>
                    </div>
                    {/* col 4 */}
                    <div className='p-5'>
                        <div className=" font-semibold text-xs uppercase text-indigo-600 ">Contact Us</div>
                        <Link href="/#">
                            XXX XXXX, Floor 4 RothernBurger str.145, Nuremberg Germany <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                        <Link href="mailto:contact@company.com">
                            contact@d&c.com <span className="text-teal-600 text-xs p-1"></span>
                        </Link>
                    </div>
                </div>
                <div className="max-w-screen-lg px-4 sm:px-6 flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row mx-auto">
                    <p className="text-sm text-gray-600">
                    © Copyright 2020 Lorem Inc. All rights reserved.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row ">
                    <li>
                        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
                    </li>
                    <li>
                        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
                    </li>
                    </ul>
                </div>
            
            </div>
            
        </section>
    );
}
