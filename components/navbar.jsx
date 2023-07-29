import React from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='fixed w-full h-16 shadow bg-white'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex'>
            <Link href='/'>
              <li className='ml-10 text-base font-medium text-gray-500 hover:text-gray-900'>Home</li>
            </Link>
          <Link href='/docs'>
              <li className='ml-10 text-base font-medium text-gray-500 hover:text-gray-900'>Documentation</li>
          </Link>
          <Link href='/faq'>
          <li className='ml-10 text-base font-medium text-gray-500 hover:text-gray-900'>FAQ</li>
          </Link>
          <Link href='/blog'>
          <li className='ml-10 text-base font-medium text-gray-500 hover:text-gray-900'>Developer Blog</li>
          </Link>
          <Link href='https://github.com/revpub'>
          <FontAwesomeIcon icon={faGithub} className='ml-10 h-6 w-6 text-gray-500 hover:text-gray-900' />
          </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
      <Bars3Icon className="h-6 w-6 text-gray-500 hover:text-gray-900" aria-hidden="true" size='25' />
      </div>
      </div>
      
      <div className={
        menuOpen
        ? 'fixed right-0 top-0 w-[65%] h-screen bg-[#edeff1] p-5 ease-in duration-500'
        : 'fixed right-[-100%] top-0 ease-in duration-500'
      }>
        <div className='flex w-full items-center justify-end'>
        <div onClick={handleNav} className='cursor-pointer'>
        <Bars3Icon className='h-6 w-6 text-gray-500 hover:text-gray-900' aria-hidden='true' size='25' />
        </div>
      </div>
      <div className='flex-col py-4'>
        <ul>
          <Link href='/'>
            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-gray-500 hover:text-gray-900'>Home</li>
          </Link>
          <Link href='/docs'>
            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-gray-500 hover:text-gray-900'>Documentation</li>
          </Link>
          <Link href='/faq'>
            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-gray-500 hover:text-gray-900'>FAQ</li>
          </Link>
          <Link href='/blog'>
            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-gray-500 hover:text-gray-900'>Blog</li>
          </Link>
          <Link href='https://github.com/revpub'>
            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>
            <FontAwesomeIcon icon={faGithub} className='h-6 w-6 text-gray-500 hover:text-gray-900' />
            </li>
          </Link>
        </ul>
      </div>
      </div>
      
    </nav>
  )
};

export default Navbar;