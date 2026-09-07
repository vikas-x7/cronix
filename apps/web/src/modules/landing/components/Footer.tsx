'use client';

import React from 'react';
import Link from 'next/link';
import { BiSolidSquare } from 'react-icons/bi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="w-full  text-black pt-12 sm:pt-16 lg:pt-20 pb-8 px-6 sm:px-12 lg:px-10 border-t border-black/5"
    >
      <div className="mx-auto flex flex-col justify-between ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center">
                <BiSolidSquare size={34} className="text-[#DF5BCC]" />
                <span className="text-xl sm:text-3xl font-semibold tracking-[-1px]  text-black">
                  Cronix.
                </span>
              </div>

              {/* Subheading */}
              <p className="mt-8 sm:mt-10 text-sm sm:text-base md:text-[17px] text-black/90 max-w-md ">
                Reach out to us to discover how our services can assist you in
                accomplishing your objectives.
              </p>
            </div>

            {/* Email Address */}
            <div className="mt-10 sm:mt-14 lg:mt-20">
              <a
                href="mailto:Inquiry@cronix.io"
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black hover:opacity-80 transition-opacity"
              >
                Cronix@gamil.com
              </a>
            </div>
          </div>

          {/* Right Column: Nav Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12 lg:justify-end lg:pl-16 pt-1">
            {/* Company Column */}
            <div>
              <h3 className="text-[18px] font-semibold text-black  tracking-[-0.5px] mb-4 sm:mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    History
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Mission
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-[18px] text-black font-semibold tracking-[-0.5px] mb-4 sm:mb-5">
                Services
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Automation & Webhooks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-24 lg:mt-32 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-600 ">
          <p>©{currentYear} Cronix All rights reserved</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-black transition-colors">
              Legal Notice
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
